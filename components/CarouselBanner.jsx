import { Carousel } from "antd";
import React from "react";
import banner1 from "@/public/assets/banner-1.webp";
import banner2 from "@/public/assets/banner-2.webp";
import banner3 from "@/public/assets/banner-3.webp";
import banner4 from "@/public/assets/banner-4.webp";

function CarouselBanner() {

    const banners = [banner1, banner2, banner3, banner4];

    return (
        <div>
            <Carousel
                slidesToShow={1}
                slidesToScroll={1}
                infinite
                dots={true}
                autoplay
                draggable
                centerMode={true}
                responsive={[
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            centerMode: false,
                        },
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ]}
            >
                {banners.map((banner, index) => (
                    <div key={index}>
                        <div className="w-full h-[200px] md:h-[400px] rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)] px-4">
                            <img
                                src={banner.src}
                                alt={`banner-${index}`}
                                className="w-full h-full object-cover rounded-[20px]"
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselBanner;
