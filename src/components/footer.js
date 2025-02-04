import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"

export default function Footer() {
    return (
        <div className="flex flex-row bg-green text-white justify-between px-8 md:px-12 py-4">
            <div className="flex flex-row gap-4 text-sm my-auto text-xs md:text-lg">
                <p>الشروط والأحكام</p>
                <p>تواصل معنا</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-row gap-1 mx-auto">
                    <img src={Twitter} className="w-4" />
                    <img src={Instagram} className="w-5 -ml-0.5"/>
                    <img src={Facebook} className="w-4"/>
                </div>
                <p className="font-bold text-sm md:text-lg md:order-second order-first">ALPHA PLUS</p>
            </div>
        </div>
    );
}