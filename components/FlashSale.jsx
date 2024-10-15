import React from 'react'
import Countdown from 'react-countdown';

function FlashSale() {

    const endDate = new Date('2024-12-31T00:00:00');

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div className="flex items-center gap-4 wrapper pt-[100px]">
                <h3 className="text-[32px] text-white font-semibold overflow-hidden">FLASH SALE</h3>
                <div className="flex gap-2">
                    <div className="bg-red-600 text-white p-2 rounded-md text-2xl font-bold w-12 flex justify-center shadow-md">
                        {String(hours).padStart(2, '0')}
                    </div>
                    <div className="bg-red-600 text-white p-2 rounded-md text-2xl font-bold w-12 flex justify-center shadow-md">
                        {String(minutes).padStart(2, '0')}
                    </div>
                    <div className="bg-red-600 text-white p-2 rounded-md text-2xl font-bold w-12 flex justify-center shadow-md">
                        {String(seconds).padStart(2, '0')}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Countdown
            date={endDate}
            renderer={renderer}
        />
    );
}

export default FlashSale