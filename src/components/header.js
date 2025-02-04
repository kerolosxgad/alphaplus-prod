import leftArrow from "../images/left-arrow.svg"

export default function Header() {
    return (
        <div className="flex flex-row justify-between py-6 px-12">
            <div className="flex flex-col text-green font-bold text-s33md md:text-2xl">
                <p>
                    ALPHA PLUS
                </p>
            </div>
            <button className="bg-grey rounded-tr-lg rounded-bl-lg text-white px-4">
                <div className="flex flex-row py-1">
                    <p className="text-md md:text-lg">اشتري الآن</p>
                    <img src={leftArrow} className="w-4 md:w-6 bg-green rounded-full p-1 mr-2" />
                </div>
            </button>
        </div>
    );
}