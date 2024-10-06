import Header from "../../component/header";
import Footer from "../../component/footer";

export default function QA () {
    return (
        <div className="w-full">
            <Header /> 
            <div className="pb-14 px-[350px] pt-[50px]">
                <div className="flex justify-center items-center text-3xl  font-bold text-center text-[#002855] pt-[80px] space-x-10">
                    <hr className="w-20 border-2 border-[#002855]" />
                    <h1>Q&A</h1>
                    <hr className="w-20 border-2 border-[#002855]" />
                </div>
                <div className="flex text-3xl font-bold text-[#002855] pb-8 font-[sans-serif] pt-[70px] space-x-2">
                    <hr className="w-8 border-2 border-[#002855] mt-4" />
                    <h1>How do I know if I will benefit from a Form FIN-320 appraisal?</h1>
                </div>
                <p className="font-light leading-relaxed text-2xl ">If your vehicle has any flaws that might lower its value, like a rebuilt title, mechanical issues, excessive wear, or body damage, you could benefit from an appraisal. These factors can reduce your vehicle’s market value compared to the book value. If you’re unsure, feel free to contact us for an initial impression. We’re happy to help you determine if an appraisal is right for you.</p>
                <div className="flex text-3xl font-bold text-[#002855] font-[sans-serif] pt-10 space-x-2">
                    <hr className="w-8 border-2 border-[#002855] mt-4" />
                    <h1>Do you guarantee that the assessed value will be lower than the book value, saving me money?</h1>
                </div>
                <p className="font-light leading-relaxed text-2xl pt-6 font-[sans-serif]">We are impartial and committed to providing accurate assessments. While we can’t guarantee that the appraised value will be lower than the book value, there are some indications—like vehicle flaws—that suggest you could save money. If you’re unsure, reach out to us for an honest opinion</p>
                <div className="flex text-3xl font-bold text-[#002855] font-[sans-serif] pt-8 space-x-2">
                    <hr className="w-8 border-2 border-[#002855] mt-4" />
                    <h1>How long does the process take?</h1>
                </div>
                <p className="font-light leading-relaxed text-2xl pt-6 font-[sans-serif]">We typically send you the appraisal report and completed FIN-320 form within 24 hours. If we need more information, we’ll reach out to you promptly to keep the process moving smoothly.</p>
                <div className="flex text-3xl font-bold text-[#002855] font-[sans-serif] pt-8 space-x-2">
                    <hr className="w-8 border-2 border-[#002855] mt-4" />
                    <h1>What information do I need to submit for an appraisal?</h1>
                </div>
                <p className="font-light leading-relaxed text-2xl pt-6 font-[sans-serif]">We’ll guide you through the submission process. Essentially, we need photos or video of your vehicle from all angles, including the engine bay, interior, tires, trunk, and windshield. A picture of the odometer and any mechanical inspection reports are also helpful. If you have an online ad for the vehicle, screenshots of that can assist as well.</p>
                <div className="flex text-3xl font-bold text-[#002855] font-[sans-serif] pt-10 space-x-2">
                    <hr className="w-8 border-2 border-[#002855] mt-4" />
                    <h1>Do you handle appraisals for divorce, bankruptcy, and dispute settlements?</h1>
                </div>
                <p className="font-light leading-relaxed text-2xl pb-10 font-[sans-serif]">Yes, we offer appraisals for divorce, bankruptcy, and dispute settlements. The process is very similar to our regular appraisals, but it doesn’t involve the FIN-320 form. The cost remains the same.</p>
            </div>
            <Footer />
        </div>
    )
}