const CountDown = ({timerDown}) => {
    const minutes = Math.floor(timerDown / 60000);
    const seconds = Math.floor((timerDown % 60000) / 1000);

    return (
        <p className="mt-4 text-center text-xl sm:text-2xl font-semibold text-gray-800">
            {minutes}:{String(seconds).padStart(2, "0")}
        </p>
    );
};

export default CountDown;