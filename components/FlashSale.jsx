import React from 'react'
import Countdown from 'react-countdown';
import CardFlashSale from './CardFlashSale';
import { Carousel } from 'antd';

function FlashSale() {

    const endDate = new Date('2024-12-31T00:00:00');

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div className="flex flex-col gap-4">
                <div className='flex items-center md:gap-5 gap-2'>
                    <h3 className="md:text-[32px] overflow-hidden text-base text-white font-semibold">FLASH SALE</h3>
                    <div className="flex gap-2">
                        <div className="bg-red-600 text-white rounded-md md:text-lg text-base md:w-10 w-8 flex justify-center shadow-md overflow-hidden">
                            {String(hours).padStart(2, '0')}
                        </div>
                        <div className="bg-red-600 text-white rounded-md md:text-lg text-base md:w-10 w-8 flex justify-center shadow-md overflow-hidden">
                            {String(minutes).padStart(2, '0')}
                        </div>
                        <div className="bg-red-600 text-white rounded-md md:text-lg text-base md:w-10 w-8 flex justify-center shadow-md overflow-hidden">
                            {String(seconds).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className='md:wrapper md:px-[120px] wrapper-mobile md:py-[100px] py-[32px]'>
            <Countdown
                date={endDate}
                renderer={renderer}
            />
            <p className="font-normal md:text-sm text-[10px] md:mt-0 mt-1 text-[#EAEAEA]">Segera dapatkan penawaran terbatas dari kami, jangan sampai ketinggalan!</p>
            <div className='grid-cols-4 gap-3 pt-10 hidden md:grid'>
                {Array(8).fill().map((_, i) => (
                    <CardFlashSale key={i} />
                ))}
            </div>
            <div className='md:hidden pt-10'>
                <Carousel
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite
                    dots={false}
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
                    {Array(8).fill().map((_, i) => (
                        <CardFlashSale key={i} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
}

export default FlashSale