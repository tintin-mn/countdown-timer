import CountDown from "./components/CountDown.jsx";
import ProgressCircle from "./components/ProgressCircle.jsx";
import {useEffect, useState} from "react";
import FooterMenu from "./components/FooterMenu.jsx";

const App = () => {

    const [id, setId] = useState('')
    const [modal, setModal] = useState(false)
    const [timerDown, setTimerDown] = useState(30000) // ms
    const duration = 30000
    const randomId = () => Math.floor(Math.random() * 100) + 1

    useEffect(() => {
        if (timerDown <= 0) {
            setModal(true)

            const sound = new Audio('/sounds/ready.wav')
            sound.play()

            return
        }

        const interval = setInterval(() => {
            setTimerDown(prevState => prevState - 1000)
        }, 1000)

        return () => clearInterval(interval)
    }, [timerDown])

    useEffect(() => {
        setId(randomId())
    }, [])

    const closeModal = () => {
        setModal(false)
    }

    const progress = ((duration - timerDown) / duration) * 100

    const handleReset = () => {
        setTimerDown(30000)
        setId(randomId())
        setModal(false)
    }

    return (
        <main className="bg-gradient-to-b from-[#E0EAFC]/80 to-[#CFDEF3]/80 w-full mx-auto flex flex-col items-center justify-center h-screen">
            <div
                className="flex flex-col items-center w-[80%] mx-auto gap-y-14 md:w-[30%]">
                <header className=" space-y-3 text-center">
                    <h1 className="font-bold text-3xl tracking-wide">Order Status</h1>
                    <p className="font-semibold text-gray-800">Order Code: # {id} </p>
                </header>
                <section className="w-full md:w-2/3 ">
                    <ProgressCircle progress={progress}/>
                    <CountDown timerDown={timerDown}/>
                </section>
                <footer className="w-full px-5 md:px-10">
                    <FooterMenu onReset={handleReset}/>
                </footer>
            </div>
            {
                modal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white px-16 py-8 rounded-xl shadow-xl text-center space-y-8">
                            <h2 className="text-xl font-bold">Your order is ready!🎉</h2>
                            <button onClick={closeModal} className="bg-orange-700 hover:bg-orange-600 text-white py-2 px-8 rounded">OK</button>
                        </div>
                    </div>
                )
            }
        </main>
    );
};

export default App;