import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { Divider } from "antd";

function Footer() {
    return (
        <footer className="bg-[#282828] font-space-grotesk">
            <div className="md:wrapper md:px-[120px] wrapper-mobile pt-[60px]">
                <div className="flex flex-col md:flex-row gap-[48px] md:gap-0 items-start justify-between">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={250}
                        height={100}
                    />
                    <div className="flex items-start gap-[97px] text-[#EAEAEA]">
                        <div className="md:flex flex-col gap-4 hidden">
                            <span className="font-bold text-sm">PETA SITUS</span>
                            <ul className="flex flex-col gap-[17px]">
                                <li className="font-normal text-base">Beranda</li>
                                <li className="font-normal text-base">Semua Game</li>
                                <li className="font-normal text-base">Masuk</li>
                                <li className="font-normal text-base">Daftar</li>
                            </ul>
                        </div>
                        <div className="md:flex flex-col gap-4 hidden">
                            <span className="font-bold text-sm">TOP UP LAINNYA</span>
                            <ul className="flex flex-col gap-[17px]">
                                <li className="font-normal text-base">Mobile Legends</li>
                                <li className="font-normal text-base">Free Fire</li>
                                <li className="font-normal text-base">Pubg Mobile</li>
                                <li className="font-normal text-base">Undawn</li>
                            </ul>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-4 gap-[33px]">
                            <div className="flex flex-col gap-4">
                                <span className="font-bold text-sm">IKUTI KAMI</span>
                                <div className="flex items-center gap-[10px]">
                                    <div className="p-3 md:bg-[#3E3E3E] bg-[#ffff] md:text-white text-[#3E3E3E] rounded-full">
                                        <IoLogoInstagram size={28} />
                                    </div>
                                    <div className="p-3 md:bg-[#3E3E3E] bg-[#ffff] md:text-white text-[#3E3E3E] rounded-full">
                                        <FaTiktok size={24} />
                                    </div>
                                    <div className="p-3 md:bg-[#3E3E3E] bg-[#ffff] md:text-white text-[#3E3E3E] rounded-full">
                                        <FaYoutube size={28} />
                                    </div>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-[17px]">
                                <li className="font-bold text-sm md:block hidden">PERTANYAAN BISNIS</li>
                                <li className="font-bold text-sm md:hidden block">KONTAK KAMI</li>
                                <li className="font-normal text-base text-[#949494] md:text-[#EAEAEA]">contact@email.id</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Divider className="w-full bg-white mt-[60px] hidden md:block" />
                <div className="text-white flex items-center justify-between pb-4">
                    <span className="text-sm font-normal pt-12 md:pt-0 pb-10 md:pb-0 text-[#949494] md:text-[#EAEAEA]">© PT BERMAIN BERSAMA INDONESIA, 2023</span>
                    <span className="text-sm font-normal hidden md:block">Kebijakan Privasi</span>
                    <span className="text-sm font-normal hidden md:block">Terms of Service</span>
                    <span className="text-sm font-normal hidden md:block">Hubungi Kami</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer