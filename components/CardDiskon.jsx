import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import priceTag from "@/public/assets/priceTag.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

function CardDiskon() {
    return (
        <div className='bg-[#282828] md:p-6 px-6 pt-6 md:rounded-xl rounded-ss-xl rounded-se-xl'>
            <div className="flex items-center bg-[#3E3E3E] justify-between rounded-xl">
                <FiSearch color="fff" size={30} className="ml-[18px] md:block hidden" />
                <FiSearch color="fff" size={20} className="ml-[8px] block md:hidden" />
                <input className="bg-[#3E3E3E] w-[55%] md:py-[17px] py-[12px] md:text-sm text-xs outline-none text-white" placeholder="Ketik kode promo (opsional)" />
                <button className="text-[#1C2108] md:text-sm text-xs font-semibold bg-white md:py-5 p-3 md:px-6">Gunakan</button>
            </div>
            <div className="flex items-center p-4 justify-between border-[1px] border-[#3E3E3E] rounded-lg mt-6">
                <div className="flex items-center gap-4">
                    <Image src={priceTag} alt="bannerDiskon" width={24} height={24} />
                    <span className="text-white font-plus-jakarta-sans text-sm">Lihat promo tersedia</span>
                </div>
                <MdKeyboardArrowRight size={24} color="FFF" />
            </div>
        </div>
    )
}

export default CardDiskon