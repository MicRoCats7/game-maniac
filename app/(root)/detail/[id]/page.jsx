'use client'

import BannerDetail from "@/components/BannerDetail";
import CardPilihProduk from "@/components/CardPilihProduk";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useGameStore from "@/zustand/useGameStore";
import CardForm from "@/components/CardForm";
import CardDiskon from "@/components/CardDiskon";
import CardMetodePembayaran from "@/components/CardMetodePembayaran";
import TotalBayar from "@/components/TotalBayar";
import { Divider } from "antd";

function Detail() {
    const { id } = useParams();
    const { fetchGamesById, activeGame, isLoading } = useGameStore();

    useEffect(() => {
        if (id) {
            fetchGamesById(id);
        }
    }, [id, fetchGamesById]);

    return (
        <section className="relative bg-[#1A1A1A]">
            <div className="h-[300px] md:bg-gradient-to-r from-gray-200 to-gray-400 bg-white md:block hidden" />
            <div className="md:px-[160px]">
                <BannerDetail items={activeGame} />
            </div>
            <div className="md:wrapper md:px-[120px] wrapper-mobile">
                <div className="flex flex-col items-end justify-end mb-[115px]">
                    <div className="md:pt-[250px] pt-[850px] flex items-start md:flex-row flex-col gap-5 mb-[20px]">
                        <CardPilihProduk items={activeGame?.items} isLoading={isLoading} />
                        <CardForm />
                    </div>
                    <div className="md:w-[38%] w-full flex flex-col md:gap-5 gap-0">
                        <CardDiskon />
                        <div className="bg-[#282828]">
                            <Divider className='border-[1px] border-[#3E3E3E] md:hidden block' />
                        </div>
                        <CardMetodePembayaran />
                    </div>
                </div>
            </div>
            <TotalBayar />
        </section>
    );
}

export default Detail;
