import Image from "next/image";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";

function BannerDetail({ items }) {
    console.log(items)

    return (
        <div className="absolute md:top-10 top-0 md:w-[1200px] w-full md:h-[490px] h-[400px] md:rounded-[20px] md:bg-[#282828] bg-white">
            <img src={items?.image} alt="banner" className="md:block hidden w-full h-full" />
            <div className="absolute md:bottom-0 bottom-10 backdrop-blur-lg bg-white/30 py-[33px] pl-[32px] w-full">
                <div className="flex md:items-start items-center md:flex-row flex-col md:gap-8 gap-3 md:h-auto h-[300px] mr-[20px]">
                    <img src={items?.image} alt="logo" className="md:w-[110px] w-[60%] md:h-auto h-full md:rounded-sm rounded-2xl" />
                    <div className="flex flex-col md:items-start items-center">
                        <div className="bg-[#EAEAEA] py-[2px] px-[4px] flex items-center justify-center rounded md:hidden w-1/4 overflow-hidden">
                            <span className="font-semibold text-[8px] text-[#282828]">GameManiac.com</span>
                        </div>
                        <h1 className="md:text-[32px] text-base overflow-hidden font-bold font-plus-jakarta-sans md:text-white text-black pb-3">{items?.name}</h1>
                        <span className="font-plus-jakarta-sans md:text-xl text-[10px] overflow-hidden font-normal md:mb-2 mb-4 pb-2 md:text-white text-[#949494]">{items?.publisher}</span>
                        <div className="flex items-center md:gap-3 gap-1 py-2 overflow-hidden">
                            <div className="flex items-center gap-[6px] backdrop-blur-sm md:bg-white/15 bg-[#EAEAEA] px-3 py-1 rounded-full">
                                <RiCustomerServiceFill size={10} className="md:text-white text-black" />
                                <span className="font-plus-jakarta-sans md:text-xs text-[8px] md:text-white text-black font-bold">Customer Service 24/7</span>
                            </div>
                            <div className="flex items-center gap-[6px] backdrop-blur-sm md:bg-white/15 bg-[#EAEAEA] px-3 py-1 rounded-full">
                                <IoShieldCheckmark size={10} className="md:text-white text-black" />
                                <span className="font-plus-jakarta-sans md:text-xs text-[8px] md:text-white text-black font-bold">Customer Service 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerDetail