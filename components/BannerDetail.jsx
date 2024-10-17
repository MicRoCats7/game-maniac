import Image from "next/image";
import bannerDetail from "@/public/assets/banner-detail.png";
import profileMl from "@/public/assets/logo-ml.png";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldCheckmark } from "react-icons/io5";

function BannerDetail({ items }) {
    console.log(items)

    return (
        <div className="absolute top-10 w-[1200px] h-[490px] rounded-[20px] bg-[#282828]">
            <img src={items?.image} alt="banner" className="w-full h-full" />
            <div className="absolute bottom-0 backdrop-blur-lg bg-white/30 py-[33px] pl-[32px] w-full">
                <div className="flex items-start gap-8">
                    <Image src={items?.image} alt="logo" className="w-[110px] rounded-sm" width={110} height={110} />
                    <div className="flex flex-col">
                        <h1 className="text-[32px] font-bold font-plus-jakarta-sans text-white">{items?.name}</h1>
                        <span className="font-plus-jakarta-sans text-xl font-normal mb-2 text-white">{items?.publisher}</span>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-[6px] backdrop-blur-sm bg-[rgba(255, 255, 255, 0.1)] px-3 py-1 rounded-full">
                                <RiCustomerServiceFill size={15} color="#fff" />
                                <span className="font-plus-jakarta-sans text-xs text-white font-bold">Customer Service 24/7</span>
                            </div>
                            <div className="flex items-center gap-[6px] backdrop-blur-sm bg-[rgba(255, 255, 255, 0.1)] px-3 py-1 rounded-full">
                                <IoShieldCheckmark size={15} color="#fff" />
                                <span className="font-plus-jakarta-sans text-xs text-white font-bold">Customer Service 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerDetail