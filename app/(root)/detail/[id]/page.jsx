'use client'

import BannerDetail from "@/components/BannerDetail";
import CardPilihProduk from "@/components/CardPilihProduk";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useGameStore from "@/store/useGameStore";
import CardForm from "@/components/CardForm";
import CardDiskon from "@/components/CardDiskon";
import CardMetodePembayaran from "@/components/CardMetodePembayaran";

function Detail() {
    const { id } = useParams();
    const { fetchGamesById, setActiveGame, activeGame, isLoading } = useGameStore();

    useEffect(() => {
        if (id) {
            fetchGamesById(id);
        }
    }, [id, fetchGamesById]);

    console.log(activeGame);

    return (
        <section className="relative bg-[#1A1A1A]">
            <div className="h-[300px] bg-gradient-to-r from-gray-200 to-gray-400" />
            <div className="wrapper">
                <BannerDetail items={activeGame} />
                <div className="pt-[250px] flex items-start gap-5 mb-[112px]">
                    <CardPilihProduk items={activeGame?.items} isLoading={isLoading} />
                    <div className="w-1/2 flex flex-col gap-5">
                        <CardForm />
                        <CardDiskon />
                        <CardMetodePembayaran />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Detail;
