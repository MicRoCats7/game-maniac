import bgHeroSection from "@/public/assets/bg-heroSection.jpeg";
import CarouselBanner from "./CarouselBanner";
import Image from "next/image";
import FlashSale from "./FlashSale";

function HeroSection() {
    return (
        <section
            style={{
                backgroundImage: `url(${bgHeroSection.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
            }}
            className="overflow-hidden md:pt-20 pt-10"
        >
            <CarouselBanner />
            <div className="md:wrapper md:px-[120px] wrapper-mobile pt-6">
                <h1 className="font-semibold md:text-[32px] text-sm text-[#F9F9F9] md:py-3 py-0 overflow-hidden">Starlight November 2023: Melissa “Nightwalker”</h1>
                <p className="font-normal md:text-sm text-[10px] md:text-[#EAEAEA] text-[#C9C9C9]">Segera dapatkan skin startlight Melissa “Nightwalker” dengan topup murah hanya di VocaGame.</p>
            </div>
            <FlashSale />
        </section>
    );
}

export default HeroSection;