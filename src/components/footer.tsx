import Image from "next/image";

export default function Footer(){
    return (
        <div className="w-full">
            <div className="bg-gray-200 px-[110px] pb-7">
                <div className="flex justify-center items-center text-4xl  font-bold text-center text-[#002855] py-[80px] space-x-10">
                    <hr className="w-20 border-2 border-[#002855]" />
                    <h1>CONTACT US</h1>
                    <hr className="w-20 border-2 border-[#002855]" />
                </div>
                <div className="flex space-x-10">
                    <div className="space-y-4">
                        {/* <Image src="hh" width={125} height={125} alt="image" className="mx-5" /> */}
                        <p className="text-2xl text-[#002855]">Address:</p>
                        <p className="text-2xl text-[#002855]">83 North Renfrew Street, Vancouver (just across from the PNE grounds)</p>
                        <div className="text-green-500 cursor-pointer text-2xl font-semibold px-5 py-3">Get Directions<span>➔</span></div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-[#002855]">Name</div>
                        <input name="name" type="text" placeholder="Jane Smith" className="w-full p-2 rounded-lg bg-gray-400 border-gray-200 "/>
                        <div className="text-[#002855]">Email</div>
                        <input name="name" type="text" placeholder="jane@framer.com" className="w-full p-2 rounded-lg bg-gray-400 border-gray-200"/>
                        <div className="text-[#002855]">Message</div>
                        <textarea name="name" rows={4} placeholder="Write your message here " className="w-full p-2 rounded-lg border-2 border-gray-600 hover:border-green-500"/>
                        <div className="text-lg text-center font-semibold bg-green-800 rounded-xl text-white border-green-800 border-2 transition-all cursor-pointer p-2">
                            submit
                        </div>
                        <div className="text-2xl text-[#002855] pt-4">Email:contact@apexautoappraisals.ca</div>
                        <div className="text-2xl text-[#002855]">Phone:778-819-2656</div>
                    </div>
                </div>
            </div>
            <div className="py-10 pl-10 flex justify-between">
                <Image src="https://framerusercontent.com/images/SoN265laOE0mzu2vvK6uaOwio.png" width={350} height={80} alt="logo" />
                <div className="flex space-x-10 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24"  fill="#166534" className="w-10 h-10" ><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-8f73f41c-e47b-4f0e-ba6c-f5f9a2e369e2, #166534" className="w-10 h-10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    {/* <svg className="w-10 h-10 text-green-900" ><use href="#svg9711146952"></use></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 24 24" className="w-10 h-10" fill="#166534"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg>
                    </div>
            </div>
        </div>
    )
}