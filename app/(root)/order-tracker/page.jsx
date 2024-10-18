'use client';

import bannerTracker from '@/public/assets/Banner-tracker.jpg';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import logo from '@/public/assets/logo-ml.png';
import React, { useEffect } from 'react';
import useStore from '@/zustand/useGameStore';
import maintenance from '@/public/assets/Maintenance.svg';

function OrderTracker() {
    const {
        paymentData,
        purchaseDate,
        searchQuery,
        searchResult,
        setPaymentData,
        setPurchaseDate,
        setSearchQuery,
        searchOrder
    } = useStore();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedPaymentData = JSON.parse(localStorage.getItem('paymentData'));
            setPaymentData(storedPaymentData);

            if (storedPaymentData) {
                const formattedDate = new Date(storedPaymentData.purchaseDate).toLocaleDateString();
                setPurchaseDate(formattedDate);
            }
        }
    }, [setPaymentData, setPurchaseDate]);

    useEffect(() => {
        searchOrder();
    }, [searchQuery, searchOrder]);

    return (
        <div className='bg-[#1A1A1A]'>
            <div className='md:px-[110px]'>
                <Image
                    src={bannerTracker}
                    alt="Banner Tracker"
                    width={1440}
                    height={400}
                    layout="responsive"
                    className='rounded-xl'
                />
            </div>
            <div className='md:wrapper md:px-[120px] wrapper-mobile'>
                <div className='md:p-8 p-4 bg-[#282828] rounded-xl'>
                    <div className="flex items-center bg-[#3E3E3E] justify-between rounded-xl">
                        <div className='flex items-center gap-3 w-full'>
                            <FiSearch color="fff" size={30} className="md:ml-[18px] ml-[12px]" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-[#3E3E3E] w-full md:py-[17px] py-[20px] md:text-sm text-xs outline-none text-white"
                                placeholder="Cari kode pesanan atau nama produk"
                            />
                            <button className="text-[#1C2108] md:text-sm text-xs font-semibold bg-white md:py-5 p-3 md:px-6 md:block hidden">Gunakan</button>
                        </div>
                    </div>
                    <p className='mt-6 text-[#909090] md:text-xs text-[10px] font-normal'>
                        Pesanan kamu tidak terdaftar meskipun kamu yakin sudah memesan? harap tunggu 1-2 jam namun jika pesanan masih tidak muncul maka kamu dapat menghubungi kami via <span className='text-white underline'>Whatsapp</span>
                    </p>
                </div>

                {searchResult ? (
                    <div className='md:mt-[60px] mt-4 mb-12'>
                        <h1 className='pb-5 font-space-grotesk font-bold text-[32px] text-white md:block hidden'>Riwayat Pesanan</h1>
                        <div className='py-6 px-5 bg-[#282828] rounded-lg md:flex items-center justify-between grid grid-cols-2 gap-9'>
                            <div className='flex items-center gap-4 col-span-2'>
                                <Image
                                    src={searchResult.icon || logo}
                                    alt='logo'
                                    width={40}
                                    height={40}
                                />
                                <div className='flex flex-col col-span-2'>
                                    <span className='text-[#C9C9C9] text-sm font-normal font-manrope'>{searchResult.gameName || 'N/A'}</span>
                                    <span className='font-manrope font-semibold text-base text-white'>{searchResult?.selectedItem?.name || 'N/A'}</span>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#C9C9C9] text-sm font-normal font-manrope'>Harga Produk</span>
                                <span className='font-manrope font-semibold text-base text-white'>
                                    Rp {searchResult?.selectedItem?.priceDiscount > 0 ? searchResult.selectedItem.priceDiscount.toLocaleString() : searchResult.selectedItem.price.toLocaleString()},-
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#C9C9C9] text-sm font-normal font-manrope'>Metode Pembayaran</span>
                                <span className='font-manrope font-semibold text-base text-white uppercase'>{searchResult.activeSubMethod || 'N/A'}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#C9C9C9] text-sm font-normal font-manrope'>Tanggal</span>
                                <span className='font-manrope font-semibold text-base text-white'>{purchaseDate}</span>
                            </div>
                            <div className='flex flex-col'>
                                <button className='py-3 px-[31px] bg-[#95BF001A] text-[#95BF00] text-sm font-semibold rounded-lg'>Success</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='md:mt-[60px] mt-4 mb-12'>
                        <div className='flex items-center justify-center flex-col'>
                            <Image
                                src={maintenance}
                                alt='logo'
                                width={250}
                                height={250}
                                className='md:w-[250px] w-[160px] h-[160px] md:h-[250px]'
                            />
                            <p className='font-semibold md:text-base text-xs text-white md:w-1/4 w-[55%] text-center'>Produk belum bisa ditampilkan, silakan isi nomor HP terlebih dahulu</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderTracker;
