import Link from "next/link";
import Image from "next/image";
export default function Header () {
    return (
        <div className="flex items-center justify-between w-full h-[80px] px-4 border-b shadow-md fixed top-0 left-0 bg-white ">
            <div className="text-2xl font-semibold">
                <Link href="/"><Image src="https://framerusercontent.com/images/SoN265laOE0mzu2vvK6uaOwio.png" width={300} height={80} alt="logo" /></Link>
            </div>
            <div className="flex items-center space-x-6">
                <div className="text-xl font-semibold py-3 px-4 hover:border-b-2 hover:border-gray-600 cursor-pointer">
                    <Link href="/about-us">About Us</Link>
                </div>
                <div className="text-xl font-semibold py-3 px-4 hover:border-b-2 hover:border-gray-600 cursor-pointer">
                    <Link href="/how-it-works">How It works</Link>
                </div>
                <div className="text-xl font-semibold py-3 px-4 hover:border-b-2 hover:border-gray-600 cursor-pointer">
                    <Link href="/prices">Prices</Link>
                </div>
                <div className="text-xl font-semibold py-3 px-4 hover:border-b-2 hover:border-gray-600 cursor-pointer">
                    <Link href="/qa">Q&A</Link>
                </div>
                <div className="flex text-xl font-semibold border-yellow-600 border-2 hover:bg-yellow-500 hover:text-white transition-all cursor-pointer px-4 py-3 rounded-xl text-yellow-500 space-x-2 group">
                    <div>Get Started</div>
                    <div className="group-hover:text-red-700"><span>➔</span></div>
                    {/* <div className="group-hover:text-green-600"><span>dd</span></div> */}
                </div>
                <div className="text-xl font-semibold bg-green-800 rounded-xl text-white border-green-800 border-2 hover:bg-white hover:text-green-800 transition-all cursor-pointer px-4 py-3">
                    Contact Us
                </div>
            </div>
        </div>
    )
}