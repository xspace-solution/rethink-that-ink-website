import Image from 'next/image';
import Header from "../../component/header";
import Footer from "../../component/footer";

export default function HowItWorks() {
    const lists = [
        {
            title: "Upload Information:",
            source: "https://framerusercontent.com/images/s7i0foulcnSPzQEc2wihIGpfHWY.png",
            des: "Upload information for an online appraisal, including photos or video.  Or schedule an appointment for an in person appraisal. "
        },
        {
            title: "Comprehensive Appraisal:",
            source: "https://framerusercontent.com/images/rG0PCdsjE53PsSOB8rVytG7U.png",
            des: "We will conduct a detailed evaluation of your vehicle’s condition and determine its true market value."
        },
        {
            title: "Official Documentation:",
            source: "https://framerusercontent.com/images/SrTDtme6YhgOcjJe5UgFDFbs9IM.png",
            des: "We complete the necessary ICBC forms such as FIN-320 appraisal form."
        },
        {
            title: "Review & Payment:",
            source: "https://framerusercontent.com/images/2q8A17B3vUOMbcHaQRxzUYhPHWg.png",
            des: "Pay for your appraisal."
        },
        {
            title: "Submit to ICBC:",
            source: "https://framerusercontent.com/images/UyPV8JDk9Eqy8envaQ61BTnydA.png",
            des: "Attach the appraisal form to your ICBC Transfer/Tax Form to ensure your taxes are based on the true market value of your vehicle."
        },
    ]
    return (
        <div className='w-full'>
            <Header />
            <div className="bg-[#002855] px-[110px] pb-14 pt-[140px]">
                <div className="flex justify-center items-center text-4xl  font-bold text-center text-white py-[30px] space-x-10">
                    <hr className="w-20 border-2 border-white" />
                    <h1>HOW IT WORKS</h1>
                    <hr className="w-20 border-2 border-white" />
                </div>
                <p className="text-2xl  font-bold text-center text-white">At Apex Auto Appraisals, we’ve made the appraisal process simple and convenient:</p>
                {/* <div className="w-full justify-center">
                    <Image src='https://i.ytimg.com/vi_webp/smPos0mJvh8/maxresdefault.webp' width={1000} height={200} alt="image" className="border-2 rounded-2xl py-20"/>
                </div> */}
                <div className="w-full pb-14" >
                    {lists.map(({title, source, des}, idx) => (
                        <div className="bg-white rounded-2xl space-x-10 p-10 m-2 border-2 flex items-center" key={idx}>                      
                            <div className="flex bg-white  items-center w-full">   
                            <Image src={source} width={100} height={100} alt="image"/>
                            <div className="space-y-5">
                                <h1 className="text-3xl font-bold text-[#002855] bg-white w-full">{title}</h1>
                                <p className="text-2xl  bg-white font-semibold w-full font-[sans-serif]">{des}</p>
                            </div>        
                            </div>                      
                        </div>
                    ))}
                </div> 
            </div>
            <Footer />
        </div>
    )
}