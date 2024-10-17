import React from 'react';
import Image from 'next/image';

function CardFlashSale({ item, game }) {
    return (
        <div className='bg-[#1A1A1A] p-0 rounded-lg'>
            <div
                className='flex items-center gap-3 p-3'
                style={{
                    backgroundImage: "linear-gradient(to left, #666666, #565656, #464646, #373737, #282828)"
                }}
            >
                <Image
                    src={item.iconUrl}
                    alt={item.name}
                    width={48}
                    height={48}
                    className='rounded-md'
                />
                <div className='flex flex-col'>
                    <span className='text-sm text-white font-semibold font-manrope'>{item.name}</span>
                    <span className='text-xs font-normal text-[#A1A1A1] font-manrope'>{game.name}</span>
                </div>
            </div>
            <div className='p-3 flex items-center justify-between'>
                <button className='font-manrope text-white text-[10px] bg-[#C72323] border-none rounded-full px-3 py-1'>
                    Promo
                </button>
                <span className='font-manrope text-white text-[10px]'>
                    {item.priceDiscount > 0 ? `-${((item.priceDiscount / item.price) * 100).toFixed(1)}%` : 'No Discount'}
                </span>
            </div>
        </div>
    );
}

export default CardFlashSale;