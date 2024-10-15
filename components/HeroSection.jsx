import bgHeroSection from "@/public/assets/bg-heroSection.jpeg";
import CarouselBanner from "./CarouselBanner";
import graphic from "@/public/assets/graphic.png";
import Image from "next/image";
import FlashSale from "./FlashSale";

function HeroSection() {
    return (
        <section
            style={{
                backgroundImage: `url(${bgHeroSection.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                paddingTop: "80px",
                position: "relative",
            }}
        >
            <CarouselBanner />
            <div className="wrapper pt-6">
                <h1 className="font-semibold text-[32px] text-[#F9F9F9]">Starlight November 2023: Melissa “Nightwalker”</h1>
                <p className="font-normal text-sm text-[#EAEAEA]">Segera dapatkan skin startlight Melissa “Nightwalker” dengan topup murah hanya di VocaGame.</p>
            </div>
            <FlashSale />
            {/* <div className="relative">
                <Image
                    src={graphic}
                    alt="graphic"
                    width={200}
                    height={200}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
            </div> */}
        </section>
    );
}

export default HeroSection;