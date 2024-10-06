import Image from "next/image";
import Header from "../../component/header";
import Footer from "../../component/footer";

export default function AboutUs () {
    return (
        <div className="w-full">
            <Header />
            <div className="pt-[70px] pb-14 px-[110px]">
                <div className="flex justify-center items-center text-4xl  font-bold text-center text-[#002855] py-[80px] space-x-10">
                    <hr className="w-20 border-2 border-[#002855]" />
                    <h1>ABOUT APEX AUTO APPRAISALS</h1>
                    <hr className="w-20 border-2 border-[#002855]" />
                </div>
                <div className="flex justify-around space-x-20">
                    <div>
                        <p className="font-light leading-relaxed text-2xl py-6 font-[sans-serif]">At Apex Auto Appraisals, we specialize in helping British Columbians save money on vehicle transfer taxes by providing accurate, professional vehicle appraisals. With the government’s use of the Canadian Black Book Average Wholesale Value for tax calculations, many used car buyers end up paying more than necessary. Our job is to ensure you only pay taxes on your vehicle’s true market value.</p>

                        <p className="font-light leading-relaxed text-2xl pb-10 font-[sans-serif]"> We’re a team of experienced appraisers with over a decade of experience in the automotive industry. Whether you’re dealing with excessive wear, mechanical issues, or any other factors that affect your vehicle’s value, we’re here to help. Founded by locals, Apex Auto Appraisals was created to address the real financial struggles that British Columbians face under this taxation system. Our mission is to provide you with an easy, fast, and accurate appraisal process to ensure you’re paying what’s fair</p>
                    </div>
                    <div className="w-full space-y-10 ">
                        <h1 className="text-4xl text-center">MEET US</h1>
                        <Image src="https://framerusercontent.com/images/3UOfY5f5XAFphjVw1gyVNTDUKNQ.jpg" width={500} height={521} alt="image" className="border-2 rounded-2xl"/>
                        <p className="text-4xl font-semibold text-center">Founder, <br/>Nickolas Bochakrev</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}