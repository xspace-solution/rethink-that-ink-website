import Image from "next/image";
import Header from "../component/header";
import Footer from "../component/footer";

import Carousel from './c';
export default function Home() {
  const benefit_lists = [
    {
        title: "Overpaying on Taxes",
        source: "https://framerusercontent.com/images/kzhshaFtHzVaopz5hPGdpaHKiIs.png",
        des_1: "You buy a used car thinking you’ve got a good deal, only to find out that ICBC values it higher than what the market value is. This means you’re expected to pay more in taxes, even though the car isn’t worth as much.",
        des_2: "We focus on what your vehicle is really worth. Its market value and  not just what the book says. By providing an accurate appraisal, we help you avoid paying more than you should."
    },
    {
        title: "Confusing and Complicated Process",
        source: "https://framerusercontent.com/images/taIK6cPbKaTCwouHZnF328vzP0Q.png",
        des_1: "Dealing with tax forms and vehicle appraisals can be confusing. The rules and regulations don’t always make sense, and it’s easy to feel overwhelmed.",
        des_2: "We simplify things for you. From evaluating your vehicle to helping with the paperwork such as the FIN- 320 form. We guide you through the process so it’s straightforward and stress-free."
    },
    {
        title: "Inconvenience of Scheduling an Appraisal",
        source: "https://framerusercontent.com/images/HVn540mEsWhdQsyHGjDd5mHPB0.png",
        des_1: "It’s not always easy to find the time for an appraisal, especially if you have a busy schedule or live in a remote area.",
        des_2: "We offer flexibility. Whether you prefer an in-person meeting or a remote appraisal, we work around your schedule to make it as convenient as possible."
    },
  ];
  const dif_lists = [
    {
        title: "Accurate Appraisals",
        source: "https://framerusercontent.com/images/SGekoNS9CYO52MU0C7efueg8XYE.png",
        des: "We don’t rely solely on generic book values. Instead, we take a deep dive into the current market to find out what your vehicle is truly worth. Our process includes researching similar vehicles and making precise adjustments based on your car's condition, ensuring the most accurate appraisal possible."
    },
    {
        title: "Unbiased Assessment",
        source: "https://framerusercontent.com/images/fvOsQQStODGOeIFok5bOSyRDXrc.png",
        des: "At Apex Auto Appraisals, we provide unbiased, accurate appraisals based solely on your vehicle's true market value. Free from external pressures, we rely on honest information to ensure our assessments reflect the real condition of your car. Our focus is fairness and truth, not favoring any side."
    },
    {
        title: "Detailed Reporting",
        source: "https://framerusercontent.com/images/8XkhD5gRIFSlxs7fCZeMOBZMuxY.png",
        des: "Our appraisals come with comprehensive reports that outline every factor considered during the evaluation process. From your vehicle’s condition to market research, we document everything so you have a clear understanding of how we arrived at the final valuation."
    },
    {
        title: "Seamless Digital Process",
        source: "https://framerusercontent.com/images/jzYcE6wjkKDJBdkNiyB27wbpdY.png",
        des: "With our online options, getting an appraisal has never been easier. You can upload all necessary documents and photos, and we’ll handle the rest—no need for multiple visits or complicated paperwork."
    },
  ];
  const service_lists = [
    {
      title: "Tax Appraisals and filling out the FIN320 form:",
      source: "https://framerusercontent.com/images/8XkhD5gRIFSlxs7fCZeMOBZMuxY.png",
      des: "Ensure you’re only paying taxes on the true market value of your vehicle."
    },
    {
      title: "Divorce Settlement Appraisals:",
      source: "https://framerusercontent.com/images/qHuHJxQNnHsOIPXryIGDdqEEbo.png",
      des: "When dividing assets, our appraisals help ensure an equitable division of vehicle value."
    },
    {
      title: "Bank Loan Appraisals ",
      source: "https://framerusercontent.com/images/qHuHJxQNnHsOIPXryIGDdqEEbo.png",
      des: "We assess the value of your vehicle to help you secure financing based on its true worth."
    },
    {
      title: "Estate Appraisals:",
      source: "https://framerusercontent.com/images/KcSiguH5JI26NTPZAwBpUafIhPg.png",
      des: "When handling estates, we provide fair vehicle valuations to assist with tax and legal matters."
    },
    {
      title: "Bankruptcy Appraisals:",
      source: "https://framerusercontent.com/images/1doduGvRyroqxbpM5BS6kQHxGMI.png",
      des: "Accurately value your vehicle for bankruptcy filings and proceedings."
    },
  ]
  return (
    <div className="w-full ">
      <Header />
      <div className="pt-[150px] pb-14 px-[110px]">
        <div className=" flex justify-between space-x-10">
          <div className="space-y-4">
            <h1 className="text-[46px] font-semibold text-[#002855] leading-tight font-[sans-serif]">Pay Only What’s Fair: Professional Auto Appraisals That Save You Money</h1>
            <p className="text-2xl leading-normal">Avoid overpaying on vehicle taxes with expert appraisals. We make the process quick, convenient, and tailored to your needs.</p>
            <button className="m-5 text-2xl text-orange-300 font-semibold ">Get Started</button>
            <div className="flex">
              <input type="checkbox" className="m-2"/>
              <p className="font-semibold">BC PST Tax Appraisal (FIN-320 Form)</p>
            </div>
            <div className="flex">
              <input type="checkbox" className="m-2"/>
              <p className="font-semibold">Other Appraisals (Divorce, Bank Loan,<br></br>Bankruptcy, Estate)</p>
            </div>
            <div className="pt-1">
              <button className="rounded-xl outline w-16 h-8 m-5 text-green-800 border-green-800 bg-gray-200">Next</button>
            </div>
          </div>
          <div>
            <div className="bg-black rounded-xl w-[437px] h-[403px]"></div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 px-[110px] pb-7">
        <div className="flex justify-center items-center text-4xl  font-bold text-center  text-indigo-950 py-[80px] space-x-10">
            <hr className="w-20 border-2 border-indigo-950" />
            <h1>SOME BENEFITS OF GETTING AN APPRAISAL</h1>
            <hr className="w-20 border-2 border-indigo-950" />
        </div>
        {benefit_lists.map(({title, source, des_1, des_2}, idx) => (
            <div key={idx} className="pb-12">
                <div className="flex items-start">
                    <Image src={source} width={125} height={125} alt="image" className="mx-5" />
                    <div className="flex flex-col pb-12">
                        <h1 className="text-3xl font-bold text-indigo-950 pb-3 font-[sans-serif]">{title}</h1>
                        <p className="text-2xl font-semibold leading-relaxed font-[sans-serif]">{des_1}</p>
                    </div>
                </div>
                <p className="text-2xl font-semibold  leading-relaxed font-[sans-serif]">{des_2}</p>
            </div>
        ))}
      </div>
       
      <div className="bg-[#002855] px-[110px] pb-14">
        <div className="flex justify-center items-center text-4xl  font-bold text-center text-white py-[80px] space-x-10">
          <hr className="w-20 border-2 border-white" />
          <h1>THE APEX DIFFERENCE</h1>
          <hr className="w-20 border-2 border-white" />
        </div>
          <div className="flex flex-wrap justify-center" >
              {dif_lists.map(({title, source, des}, idx) => (
                  <div className="bg-white rounded-2xl xl:w-[48%] p-4 m-2 border-2 sm:w-[100%] md:w-[100%]" key={idx}>
                      <div className="flex bg-white  items-center">
                          <Image src={source} width={100} height={100} alt="image" className="m-5"/>
                          <h1 className="text-3xl font-bold text-[#002855] bg-white">{title}</h1>
                      </div>
                      <p className="text-2xl  bg-white pb-12 px-5 font-semibold font-[sans serif]">{des}</p>
                  </div>
              ))}
          </div>            
      </div>
      
      <div className="pb-14">
        <div className="flex justify-center items-center text-4xl  font-bold text-center text-[#002855] py-[80px] space-x-10">
          <hr className="w-20 border-2 border-[#002855]" />
          <h1>WHAT OUR CLIENTS SAY ABOUT US</h1>
          <hr className="w-20 border-2 border-[#002855]" />
        </div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <Carousel />
        </div>
      </div>
      <div className="bg-[#002855] px-[110px] pb-14">
        <div className="flex justify-center items-center text-4xl  font-bold text-center text-white py-[80px] space-x-10">
          <hr className="w-20 border-2 border-white" />
          <h1>Our Services</h1>
          <hr className="w-20 border-2 border-white" />
        </div>
        <div className="w-full pb-14" >
            {service_lists.map(({title, source, des}, idx) => (
                <div className="bg-white rounded-2xl space-x-10 p-10 m-2 border-2 flex items-center" key={idx}>                      
                    <Image src={source} width={100} height={100} alt="image"/>
                    <div className="space-y-5">
                      <h1 className="text-3xl font-bold text-[#002855] bg-white w-full">{title}</h1>
                      <p className="text-2xl  bg-white font-semibold w-full font-[sans-serif]">{des}</p>
                    </div>        
                </div>
            ))}
        </div> 
        <div className="flex justify-center items-center text-4xl  font-bold text-center text-white space-x-10 mt-15">
          <hr className="w-20 border-2 border-white" />
          <h1>CONVENIENT APPRAISALS:<br></br>   
          REMOTE, YOUR LOCATION, OR OURS</h1>
          <hr className="w-20 border-2 border-white" />
        </div>
             
        <h1 className="text-3xl  font-bold text-center text-white mt-15"></h1>
        <p className="text-2xl py-[40px] text-white leading-relaxed">We provide both in-person and remote appraisals, depending on your convenience and location. Whether you’re dealing with a vehicle in poor condition, mechanical issues, or other circumstances that affect its value, Apex Auto Appraisals ensures you get the fair market assessment you deserve.</p>
      </div>

      <div className="px-[110px] py-14">
        <div className="flex justify-center items-center text-4xl  font-bold text-center text-[#002855] space-x-10">
          <hr className="w-20 border-2 border-[#002855]" />
          <h1>COMMON CONCERNS ADDRESSED</h1>
          <hr className="w-20 border-2 border-[#002855]" />
        </div>
        <p className="text-2xl text-center py-10 leading-relaxed">We understand that you might have some questions or concerns about getting an appraisal. To make things easier, we’ve put together a brief video that addresses common objections and explains how Apex Auto Appraisals works.</p>
        <div className="flex justify-around space-x-10">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-[#002855]">Watch the Video to Learn More:</h1>
            <h1 className="text-2xl font-semibold text-[#002855] pl-4">"Will this really save me money?"</h1>
            <p className="text-[20px] font-semibold pl-10">Our video explains how our accurate appraisals can lead to significant savings on your taxes by ensuring you’re only paying on your vehicle’s true market value.</p>
            <h1 className="text-2xl font-semibold text-[#002855] pl-4">"What if my vehicle has issues?"</h1>
            <p className="text-[20px] font-semibold pl-10">Find out how we factor in your car's condition and any issues it might have to give you a fair appraisal, rather than relying on outdated book values.</p>
            <h1 className="text-2xl font-semibold text-[#002855] pl-4">"Is the process really as easy as it sounds?"</h1>
            <p className="text-[20px] font-semibold pl-10">We walk you through our straightforward process, from start to finish, to show how we make it simple and stress-free.</p>
            <h1 className="text-2xl font-semibold text-[#002855] pl-4">"How can I be sure the appraisal is accurate?"</h1>
            <p className="text-[20px] font-semibold pl-10">Learn about our unbiased approach and how we ensure that every appraisal reflects the real market value, without influence from outside parties.</p>
          </div>
          <div className="w-full grow">
            <Image src='https://i.ytimg.com/vi_webp/smPos0mJvh8/maxresdefault.webp' width={700} height={200} alt="image" className="border-2 rounded-2xl"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
