import CountDown from "./components/CountDown.jsx";
import ProgressCircle from "./components/ProgressCircle.jsx";
import {useEffect, useState} from "react";
import FooterMenu from "./components/FooterMenu.jsx";

const App = () => {

    const [timerDown, setTimerDown] = useState(30000) // ms
    const duration = 30000

    useEffect(() => {
        if (timerDown <= 0) return;

        const interval = setInterval(() => {
            setTimerDown(prevState => prevState - 1000)
        }, 1000)

        return () => clearInterval(interval)
    }, [timerDown])

    const progress = ((duration - timerDown) / duration) * 100

    const handleReset = () => {
        setTimerDown(30000)
    }

    return (
        <main className="bg-gradient-to-b from-[#E0EAFC]/80 to-[#CFDEF3]/80 w-full mx-auto flex flex-col items-center justify-center h-screen">
            <div
                className="flex flex-col items-center w-[80%] mx-auto gap-y-14 md:w-[30%]">
                <header className=" space-y-3 text-center">
                    <h1 className="font-bold text-3xl tracking-wide">Order Status</h1>
                    <p className="font-semibold text-gray-800">Order Code: #125</p>
                </header>
                <section className="w-full md:w-2/3 ">
                    <ProgressCircle progress={progress}/>
                    <CountDown timerDown={timerDown}/>
                </section>
                <footer className="w-full px-5 md:px-10">
                    <FooterMenu onReset={handleReset}/>
                </footer>
            </div>
        </main>
    );
};

export default App;