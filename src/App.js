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

      <img src={bigBanner} className="md:w-full h-full"/>
      <div className=" text-center text-lg md:text-4xl mx-auto text-grey mt-12 md:mt-24 mb-6 md:mb-12"><span className="font-bold ml-1 text-green">ألفا بلس</span > لتفتيح وتوحيد لون البشرة</div>
      <div className="flex flex-col px-14 md:px-24 w-full">
        <div className="flex flex-col md:flex-row w-full mb-8 gap-12">
          <div className="w-full md:w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-6 md:p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-12 md:w-28 mb-8" src={A1}/>
            <p className="text-center text-md md:text-2xl text-grey">يعزز الحيوية وينعش البشرة</p>
          </div>
          <div className="w-full md:w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-6 md:p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-12 md:w-28 mb-8" src={A2}/>
            <p className="text-center text-md md:text-2xl text-grey">يعيد إشراقة البشرة</p>
          </div>
          <div className="w-full md:w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-6 md:p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-12 md:w-28 mb-8" src={A3}/>
            <p className="text-center text-md md:text-2xl text-grey">آمن ويستخدم لجميع أنواع البشرة</p></div>
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-12">
          <div className="w-full md:w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-6 md:p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-12 md:w-28 mb-8" src={A4}/>
            <p className="text-center text-md md:text-2xl text-grey">مناسب للبشرة الحساسة والمناطق الحساسة</p></div>
          <div className="w-full md:w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-6 md:p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-12 md:w-28 mb-8" src={A5}/>
            <p className="text-center text-md md:text-2xl text-grey">يقلل بقع التقدم بالعمر</p></div>
          <div className="w-full md:w-1/3 bg-[url(./images/abg.png)] bg-cover bg-no-repeat mx-auto items-center p-6 md:p-24 flex flex-col rounded-3xl">
            <img className="mx-auto w-12 md:w-28 mb-8" src={A6}/>
            <p className="text-center text-md md:text-2xl text-grey">تفتيح البقع والتصبغات في فترة قصيرة</p></div>
        </div>
      </div>

    <div className="flex flex-row my-6 text-lg w-max-screen bg-red-300 text-white bg-[url(./images/2.png)] bg-cover md:h-[900px] md:bg-center bg-right">
      <div className="w-1/2 p-6 md:p-24 flex flex-col justify-around">
        <p className="font-bold text-lg md:text-4xl text-green">مقشر ألفا بلس <br/>
        4 فـــــــــــــــــي 1</p>
        <p className="text-md md:text-3xl text-grey md:mt-0 mt-3"> لتفتيح وتوحيد لون البشرة</p>
        <p className="text-md md:text-3xl text-grey">يعطي نضارة وإشراقة فورية</p>
        <p className="text-md md:text-3xl text-grey  md:mb-0 mb-3">يقشر وينظف البشرة<br/> ويجعلها أكثر نعومة</p>
        <button className="bg-grey rounded-tr-lg rounded-bl-lg text-white px-4 py-2 my-3 w-fit">
                <div className="flex flex-row">
                    <p className="font-bold text-xs md:text-lg">اشتري الآن</p>
                    <img src={leftArrow} className="w-4 md:w-6 bg-green rounded-full p-1 mr-2" />
                </div>
            </button>
      </div>
</div>


      <div className="w-max-screen flex flex-row mt-6 text-lg pr-6 p-24  md:p-6 text-white bg-[url(./images/3.png)] md:h-[800px] bg-center bg-cover relative">
        <div className="md:py-[20%] md:pr-24 w-3/5 md:w-full">
          <p className="font-bold text-lg md:text-4xl text-green mb-1">مواد فعالة مثبتة</p>
          <p  className="text-md md:text-3xl text-grey">مستخلصة من مواد طبيعية</p>
        </div>
      </div>

      <div className="w-max-screen flex flex-row  text-lg p-28 md:p-6 text-white bg-[url(./images/4.png)] md:h-[700px] bg-center bg-cover relative ">
        <button className="bg-grey rounded-tr-lg rounded-bl-lg text-white px-4 py-2 md:mx-12 my-3 w-fit h-fit absolute left-8 md:left-96 top-[70%]">
                <div className="flex flex-row">
                    <p className="font-bold text-xs md:text-lg">اشتري الآن</p>
                    <img src={leftArrow} className="w-4 md:w-6 bg-green rounded-full p-1 mr-2" />
                </div>
            </button>
      </div>

      

      <FAQAccordion />
      <Footer />
    </div>
  );
}

export default App;