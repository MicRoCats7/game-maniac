import React from 'react'
import Countdown from 'react-countdown';
import CardFlashSale from './CardFlashSale';

function FlashSale() {

    const endDate = new Date('2024-12-31T00:00:00');

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div className="flex flex-col gap-4">
                <div className='flex items-center gap-5'>
                    <h3 className="text-[32px] text-white font-semibold">FLASH SALE</h3>
                    <div className="flex gap-2">
                        <div className="bg-red-600 text-white rounded-md text-lg font-bold w-10 flex justify-center shadow-md overflow-hidden">
                            {String(hours).padStart(2, '0')}
                        </div>
                        <div className="bg-red-600 text-white rounded-md text-lg font-bold w-10 flex justify-center shadow-md overflow-hidden">
                            {String(minutes).padStart(2, '0')}
                        </div>
                        <div className="bg-red-600 text-white rounded-md text-lg font-bold w-10 flex justify-center shadow-md overflow-hidden">
                            {String(seconds).padStart(2, '0')}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className='wrapper py-[100px]'>
            <Countdown
                date={endDate}
                renderer={renderer}
            />
            <p className="font-normal text-sm text-[#EAEAEA]">Segera dapatkan penawaran terbatas dari kami, jangan sampai ketinggalan!</p>
            <div className='grid grid-cols-4 gap-3 pt-10'>
                {Array(8).fill().map((_, i) => (
                    <CardFlashSale />
                ))}
            </div>
        </section>
    );
}

export default FlashSale