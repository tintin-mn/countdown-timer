import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import Animation from '../assets/chef.lottie'

const ProgressCircle = ({progress}) => {

    const radius = 50;
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid place-items-center w-[310px] h-[310px] relative">
                <DotLottieReact src={Animation} className="w-32 h-32 mb-9"
                                autoplay
                                loop
                />
                <svg className="absolute rounded-full" viewBox="0 0 120 120">
                    <defs>
                        <linearGradient id="strokeGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#FD9C02"/>
                            <stop offset="100%" stopColor="#EE341B"/>
                        </linearGradient>
                    </defs>

                    <circle
                        cx={60}
                        cy={60}
                        r={45}
                        stroke="#949494"
                        strokeWidth={0.5}
                        fill="none"
                    />

                    <circle
                        cx={60}
                        cy={60}
                        r={radius}
                        stroke="#ddd"
                        strokeWidth={3}
                        fill="none"
                    />

                    <circle
                        cx={60}
                        cy={60}
                        r={radius}
                        stroke="url(#strokeGradient)"
                        strokeWidth={3}
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform="rotate(-90 60 60)"
                        className="text-black transition-all ease-in-out duration-500"
                    />

                </svg>
            </div>
        </div>
    );
};

export default ProgressCircle;