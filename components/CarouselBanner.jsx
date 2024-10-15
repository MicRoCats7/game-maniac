import { Carousel } from "antd";
import React from "react";
import banner1 from "@/public/assets/banner-1.webp";
import banner2 from "@/public/assets/banner-2.webp";
import banner3 from "@/public/assets/banner-3.webp";
import banner4 from "@/public/assets/banner-4.webp";

function CarouselBanner() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const banners = [banner1, banner2, banner3, banner4];

    return (
        <div>
            <Carousel
                afterChange={onChange}
                slidesToShow={1}
                slidesToScroll={1}
                infinite
                dots={true}
                autoplay
                draggable
                centerMode={true}
            >
                {banners.map((banner, index) => (
                    <div key={index}>
                        <div style={{
                            width: "100%",
                            height: "400px",
                            borderRadius: "20px",
                            overflow: "hidden",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                            padding: "0 16px"
                        }}>
                            <img
                                src={banner.src}
                                alt={`banner-${index}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "20px"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselBanner;
