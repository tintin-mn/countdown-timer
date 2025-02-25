import {BiRevision, BiSupport} from "react-icons/bi";

const FooterMenu = ({onReset}) => {
    return (
        <section className="w-full flex items-center justify-between">
            <button
                onClick={onReset}
                className=" bg-white p-4 rounded-full text-orange-700 active:bg-orange-300 hover:bg-orange-100 transition duration-100 ease-in-out shadow-gray-500"
            >
                <BiRevision/>
            </button>

            <a href="#" className=" bg-white p-4 rounded-full text-orange-700 active:bg-orange-300 hover:bg-orange-100 transition duration-100 ease-in-out shadow-gray-500">
                <BiSupport/>
            </a>
        </section>
    );
};

export default FooterMenu;