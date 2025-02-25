const CountDown = ({timerDown}) => {

    return (
        <p className="text-center text-gray-800 text-2xl font-semibold">
            {Math.floor(timerDown / 60000)}:
            {String(Math.floor((timerDown % 60000) / 1000)).padStart(2, "0")}
        </p>
    );
};

export default CountDown;