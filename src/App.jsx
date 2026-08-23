import CountDown from "./components/CountDown.jsx";
import ProgressCircle from "./components/ProgressCircle.jsx";
import { useEffect, useState } from "react";
import FooterMenu from "./components/FooterMenu.jsx";

const DURATION = 10000;
const generateOrderId = () => Math.floor(Math.random() * 100) + 1;

const App = () => {
  const [orderId, setOrderId] = useState(generateOrderId);
  const [timerDown, setTimerDown] = useState(DURATION);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (timerDown <= 0) {
      setModal(true);

      const sound = new Audio("/sounds/ready.wav");
      sound.play().catch(() => {
        // Browser may block autoplay until user interaction
      });

      return;
    }

    const interval = setInterval(() => {
      setTimerDown((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timerDown]);

  const progress = ((DURATION - timerDown) / DURATION) * 100;

  const handleReset = () => {
    setTimerDown(DURATION);
    setOrderId(generateOrderId());
    setModal(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main className="flex min-h-dvh w-full items-center justify-center bg-gradient-to-b from-[#E0EAFC]/80 to-[#CFDEF3]/80 px-4 py-8 sm:px-6">
      <div className="flex w-full max-w-md flex-col items-center gap-y-10 sm:gap-y-14">
        {/* Header */}
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-wide sm:text-3xl">
            Order Status
          </h1>

          <p className="text-sm font-semibold text-gray-800 sm:text-base">
            Order Code: # {orderId}
          </p>
        </header>

        {/* Timer */}
        <section className="flex w-full max-w-xs flex-col items-center sm:max-w-sm">
          <ProgressCircle progress={progress} />

          <CountDown timerDown={timerDown} />
        </section>

        {/* Footer Menu */}
        <footer className="w-full px-2 sm:px-5">
          <FooterMenu onReset={handleReset} />
        </footer>
      </div>

      {/* Ready Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-ready-title"
        >
          <div className="w-full max-w-sm rounded-xl bg-white px-6 py-8 text-center shadow-xl sm:px-10">
            <h2 id="order-ready-title" className="text-lg font-bold sm:text-xl">
              Your order is ready! 🎉
            </h2>

            <button
              onClick={closeModal}
              className="mt-6 rounded-lg bg-orange-700 px-8 py-2 text-white transition hover:bg-orange-600 active:scale-95"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
