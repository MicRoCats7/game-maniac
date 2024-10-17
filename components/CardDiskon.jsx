import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import priceTag from "@/public/assets/priceTag.svg";
import { MdKeyboardArrowRight } from "react-icons/md";

function CardDiskon() {
    return (
        <div className='bg-[#282828] p-6 rounded-xl'>
            <div className="flex items-center bg-[#3E3E3E] justify-between rounded-xl">
                <FiSearch size={30} color="fff" className="ml-[18px]" />
                <input className="bg-[#3E3E3E] w-[55%] py-[17px] text-sm outline-none text-white" placeholder="Ketik kode promo (opsional)" />
                <button className="text-[#1C2108] text-sm font-semibold bg-white py-5 px-6">Gunakan</button>
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