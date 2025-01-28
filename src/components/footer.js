import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"

export default function Footer() {
    return (
        <div className="flex flex-row bg-green text-white justify-between px-12 py-4">
            <div className="flex flex-row gap-4 text-sm my-auto">
                <p>الشروط والأحكام</p>
                <p>تواصل معنا</p>
            </div>
            <div className="flex flex-row gap-3">
                <div className="flex flex-row gap-1">
                    <img src={Twitter} className="w-4" />
                    <img src={Instagram} className="w-5 -ml-0.5"/>
                    <img src={Facebook} className="w-4"/>
                </div>
                <p className="font-bold text-lg">ALPHA PLUS</p>
            </div>
        </div>
    );
}