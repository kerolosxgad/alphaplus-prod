import leftArrow from "../images/left-arrow.svg"

export default function Header() {
    return (
        <div className="flex flex-row justify-between py-6 px-12">
            <div className="flex flex-col text-green font-bold text-2xl">
                <p>
                    ALPHA PLUS
                </p>
            </div>
            <button className="bg-grey rounded-tr-lg rounded-bl-lg text-white px-4">
                <div className="flex flex-row">
                    <p className="text-lg">اشتري الآن</p>
                    <img src={leftArrow} className="w-6 bg-green rounded-full p-1 mr-2" />
                </div>
            </button>
        </div>
    );
}