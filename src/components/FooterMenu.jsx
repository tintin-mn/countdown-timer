import { BiRevision, BiSupport } from "react-icons/bi";

const FooterMenu = ({ onReset }) => {
  return (
    <section className="flex w-full items-center justify-between">
      {/* Reset */}
      <button
        type="button"
        onClick={onReset}
        aria-label="Reset order timer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-700 shadow-md transition duration-150 ease-in-out hover:bg-orange-100 active:scale-95 active:bg-orange-300 sm:h-14 sm:w-14"
      >
        <BiRevision className="text-xl sm:text-2xl" aria-hidden="true" />
      </button>

      {/* Support */}
      <button
        type="button"
        aria-label="Contact support"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-700 shadow-md transition duration-150 ease-in-out hover:bg-orange-100 active:scale-95 active:bg-orange-300 sm:h-14 sm:w-14"
      >
        <BiSupport className="text-xl sm:text-2xl" aria-hidden="true" />
      </button>
    </section>
  );
};

export default FooterMenu;
