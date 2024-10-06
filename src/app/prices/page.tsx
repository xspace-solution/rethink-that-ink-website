import Image from 'next/image';
import Header from '../../component/header';
import Footer from "../../component/footer";

export default function Prices () {
    return (
        <div className='w-full'>
            <Header />
            <div className="pb-14 pt-[50px] px-[110px]">
                <div className="flex justify-center items-center text-3xl  font-bold text-center text-[#002855] pt-[80px] space-x-10">
                    <hr className="w-20 border-2 border-[#002855]" />
                    <h1>PRICING</h1>
                    <hr className="w-20 border-2 border-[#002855]" />
                </div>
                <p className="text-center py-8 text-2xl">Description</p>
                <div className="flex items-center text-3xl font-bold text-[#002855] pt-[30px] space-x-2">
                    <hr className="w-10 border-2 border-[#002855]" />
                    <h1>REMOTE/ONLINE</h1>
                    <hr className="w-10 border-2 border-[#002855]" />
                </div>
                <p className="py-6 text-2xl">You upload pictures and necessary information about  your vehicle online and submit.</p>
                <div className="flex items-center text-3xl font-bold text-[#002855] pt-[30px] space-x-2">
                    <hr className="w-10 border-2 border-[#002855]" />
                    <h1>OFFICE</h1>
                    <hr className="w-10 border-2 border-[#002855]" />
                </div>
                <p className="py-6 text-2xl">You come to our office at 98 North Renfrew Street, Vancouver.</p>
                <div className="flex items-center text-3xl font-bold text-[#002855] pt-[30px] space-x-2">
                    <hr className="w-10 border-2 border-[#002855]" />
                    <h1>ON-SITE</h1>
                    <hr className="w-10 border-2 border-[#002855]" />
                </div>
                <p className="py-6 text-2xl">We come to you, get a quote for pricing if you are beyond the Vancouver, North or West Vancouver, or Burnaby area. Anything close to Vancouver is the base On site fee.</p>
                <div className='flex justify-around pt-10 space-x-5'>
                    <div className='w-1/3 flex flex-col items-center border-1 rounded-xl border-black outline space-y-10 pt-10'>
                        <h1 className='text-center text-3xl text-[#002855] font-bold'>
                            REMOTE
                        </h1>
                        <Image src="https://framerusercontent.com/images/8SsbCZHrKopuxR1DhDCQgswjI8E.png" width={100} height={100} alt="image" className="m-5"/>
                        <p className='text-center text-4xl font-bold'>$80</p>
                        <div className='w-full bg-[#002855] py-5 rounded-b-xl'>
                            <h1 className='text-white text-3xl text-center font-bold'>You Submit Online</h1>
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center rounded-xl shadow-2xl  space-y-10 pt-10'>
                        <h1 className='text-center text-3xl text-[#002855] font-bold'>
                            OFFICE
                        </h1>
                        <Image src="https://framerusercontent.com/images/J9ghFRtFZW0frrbN1pEmzeblcU.png" width={100} height={100} alt="image" className="m-5"/>
                        <p className='text-center text-4xl font-bold'>$100</p>
                        <div className='w-full bg-[#002855] rounded-b-xl'>
                            <h1 className='text-white text-3xl text-center font-bold py-5'>You Come to Us</h1>
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center border-1 rounded-xl border-black outline  space-y-10 pt-10'>
                        <h1 className='text-center text-3xl text-[#002855] font-bold'>
                            ON-SITE
                        </h1>
                        <Image src="https://framerusercontent.com/images/OSwQEOdpecNnVWJOyy9uc1qekY.png" width={100} height={100} alt="image" className="m-5"/>
                        <p className='text-center text-4xl font-bold'>$130</p>
                        <div className='w-full bg-[#002855]  rounded-b-xl'>
                            <h1 className='text-white text-3xl text-center font-bold py-5'>We Come to Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}