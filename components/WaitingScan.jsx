import React from 'react'
import Countdown from 'react-countdown';

function WaitingScan() {
    const endDate = new Date('2024-12-31T00:00:00');

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <div className="bg-[#3E3E3E] border-[1px] border-[#696969] text-white font-manrope rounded-md md:text-[32px] font-bold text-base md:w-[80px] w-full md:h-[101px] items-center flex flex-col justify-center shadow-md  gap-2 overflow-hidden py-[17px] px-[28px]">
                        {String(hours).padStart(2, '0')}
                        <span className='text-xs font-medium'>Jam</span>
                    </div>
                    <div className="bg-[#3E3E3E] border-[1px] border-[#696969] text-white rounded-md md:text-[32px] font-bold text-base md:w-[80px] w-full md:h-[101px] items-center flex flex-col justify-center shadow-md  gap-2 overflow-hidden py-[17px] px-[28px]">
                        {String(minutes).padStart(2, '0')}
                        <span className='text-xs font-medium'>Menit</span>
                    </div>
                    <div className="bg-[#3E3E3E] border-[1px] border-[#696969] text-white rounded-md md:text-[32px] font-bold text-base md:w-[80px] w-full md:h-[101px] items-center flex flex-col justify-center gap-2 shadow-md overflow-hidden py-[17px] px-[28px]">
                        {String(seconds).padStart(2, '0')}
                        <span className='text-xs font-medium'>Detik</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='w-full rounded-xl'>
            <div className=' bg-[#242424CC] py-4 text-center'>
                <h1 className='text-white font-manrope font-bold md:text-xl text-sm'>MENUNGGU PEMBAYARAN</h1>
            </div>
            <div className='bg-[#242424CC] flex items-center justify-center flex-col py-4 gap-4'>
                <h1 className='font-manrope text-xs font-normal text-[#A1A1A1]'>Selesaikan pembayaran sebelum waktu habis</h1>
                <Countdown
                    date={endDate}
                    renderer={renderer}
                />
                <h1 className='font-manrope text-xs font-normal text-[#A1A1A1]'>Agar Pesanan Kamu Tidak Expired</h1>
            </div>
        </div>
    )
}

export default WaitingScan