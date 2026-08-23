import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Animation from "../assets/chef.lottie";

const ProgressCircle = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset = circumference - (safeProgress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[310px] md:w-[310px]">
        {/* Chef Animation */}
        <div className="absolute inset-0 grid place-items-center">
          <DotLottieReact
            src={Animation}
            className="mb-10 h-28 w-28 sm:h-28 sm:w-28 md:h-32 md:w-32"
            autoplay
            loop
          />
        </div>

        {/* Progress Circle */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="strokeGradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#FD9C02" />
              <stop offset="100%" stopColor="#EE341B" />
            </linearGradient>
          </defs>

          {/* Inner Circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#949494"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Background Progress */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#ddd"
            strokeWidth="3"
            fill="none"
          />

          {/* Active Progress */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#strokeGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProgressCircle;
