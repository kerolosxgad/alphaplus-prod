import './App.css';
import InfiniteTextSlider from './components/advertisment';
import Header from './components/header';
import Footer from './components/footer';
import FAQAccordion from './components/faq';
import leftArrow from "./images/left-arrow.svg";

import bigBanner from "./images/1.png"

import A1 from "./images/a1.png"
import A2 from "./images/a2.png"
import A3 from "./images/a3.png"
import A4 from "./images/a4.png"
import A5 from "./images/a5.png"
import A6 from "./images/a6.png"

const messages = [
  "لفترة محدودة - اشتري قطعة واحصل على الثانية مجانا",
  "Special offer - Buy one get one free",
  // Add more messages as needed
];

const features = [
  "سريع الجفاف",
  "بدون رائحة",
  "فعالية عالية",
  "تركيبة آمنة"
];

function App() {
  return (
    <div>
      <InfiniteTextSlider messages={messages} />
      <Header />

      <img src={bigBanner} className="w-full h-full"/>
      <div className=" text-center text-4xl mx-auto text-grey mt-24 mb-12"><span className="font-bold ml-1 text-green">ألفا بلس</span > لتفتيح وتوحيد لون البشرة</div>
      <div className="flex flex-col px-24 w-full">
        <div className="flex flex-row w-full mb-8 gap-12">
          <div className="w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-28 mb-8" src={A1}/>
            <p className="text-center text-2xl text-grey">يعزز الحيوية وينعش البشرة</p>
          </div>
          <div className="w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-28 mb-8" src={A2}/>
            <p className="text-center text-2xl text-grey">يعيد إشراقة البشرة</p>
          </div>
          <div className="w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-28 mb-8" src={A3}/>
            <p className="text-center text-2xl text-grey">آمن ويستخدم لجميع أنواع البشرة</p></div>
        </div>

        <div className="flex flex-row mb-8 gap-12">
          <div className="w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-28 mb-8" src={A4}/>
            <p className="text-center text-2xl text-grey">مناسب للبشرة الحساسة والمناطق الحساسة</p></div>
          <div className="w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-28 mb-8" src={A5}/>
            <p className="text-center text-2xl text-grey">يقلل بقع التقدم بالعمر</p></div>
          <div className="w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-28 mb-8" src={A6}/>
            <p className="text-center text-2xl text-grey">تفتيح البقع والتصبغات في فترة قصيرة</p></div>
        </div>
      </div>

    <div className="flex flex-row my-6 text-lg bg-red-300 text-white bg-[url(./images/2.png)] bg-cover h-[900px] bg-center">
      <div className="w-1/3 p-24 flex flex-col justify-around">
        <p className="font-bold text-4xl text-green">مقشر ألفا بلس <br/>
        4 فـــــــــــــــــي 1</p>
        <p className="text-3xl text-grey"> لتفتيح وتوحيد لون البشرة</p>
        <p className="text-3xl text-grey">يعطي نضارة وإشراقة فورية</p>
        <p className="text-3xl text-grey">يقشر وينظف البشرة<br/> ويجعلها أكثر نعومة</p>
        <button className="bg-grey rounded-tr-lg rounded-bl-lg text-white px-4 py-2 my-3 w-fit">
                <div className="flex flex-row">
                    <p className="font-bold text-lg">اشتري الآن</p>
                    <img src={leftArrow} className="w-6 bg-green rounded-full p-1 mr-2" />
                </div>
            </button>
      </div>
</div>



      <p className="mx-12 my-3 text-2xl text-[#A7A8AD]">تجارب العملاء</p>
      <div className="flex flex-row gap-1">
        <div></div>
        <div></div>
        <div></div>
      </div>


      <div className="flex flex-row mt-6 text-lg p-6 text-white bg-[url(./images/3.png)] h-[800px]">
        <div className="py-[20%] pr-24">
          <p className="font-bold text-4xl text-green mb-1">مواد فعالة مثبتة</p>
          <p  className="text-3xl text-grey">مستخلصة من مواد طبيعية</p>
        </div>
      </div>

      <div className="flex flex-row  text-lg p-6 text-white bg-[url(./images/4.png)] h-[700px] bg-center bg-cover relative ">
        <button className="bg-grey rounded-tr-lg rounded-bl-lg text-white px-4 py-2 mx-12 my-3 w-fit h-fit absolute left-96 top-[70%]">
                <div className="flex flex-row">
                    <p className="font-bold text-lg">اشتري الآن</p>
                    <img src={leftArrow} className="w-6 bg-green rounded-full p-1 mr-2" />
                </div>
            </button>
      </div>

      

      <FAQAccordion />
      <Footer />
    </div>
  );
}

export default App;