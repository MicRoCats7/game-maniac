import React from 'react'
import { RiFileCopy2Line } from 'react-icons/ri'
import Image from 'next/image'
import { Divider } from 'antd'
import invoiceIcon from '@/public/assets/receipt21.svg'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'

function DetailPaymentSucces() {
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const purchaseDate = paymentData ? new Date(paymentData.purchaseDate).toLocaleDateString() : 'N/A';

    return (
        <div className='w-[80%] flex flex-col gap-5'>
            <div className='bg-[#282828] rounded-xl'>
                <div className='flex md:items-center items-start md:justify-between md:flex-row flex-col gap-5 md:bg-[#16C8291A] md:py-5 py-4 md:px-8 px-4'>
                    <div className='flex items-center gap-6'>
                        <div className='p-2 bg-[#16C829] rounded-[20px]'>
                            <Image
                                src={invoiceIcon}
                                alt='invoice'
                                width={42}
                                height={42}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='font-normal md:text-xs text-[10px] text-[#A1A1A1]'>Nomor Pesanan</span>
                            <span className='flex items-center gap-2 font-semibold md:text-sm text-xs text-white'>
                                ML-1691549057-VLMEW1WN0FA6MIG
                                <RiFileCopy2Line color='#949494' size={20} className='cursor-pointer' />
                            </span>
                        </div>
                    </div>
                    <button className='py-[10px] md:w-auto w-full px-4 bg-[#16C829] rounded-[20px] text-white text-sm font-semibold'>
                        Pesanan Berhasil
                    </button>
                </div>
                <Divider className='border-[1px] border-[#3E3E3E]  my-4' />
                <div>
                    <div className='py-4 md:px-8 px-4 md:hidden block'>
                        <div className='flex flex-col gap-2 pb-3 w-full'>
                            <span className='text-[#A1A1A1] font-normal text-sm'>Tanggal Pembelian</span>
                            <span className='font-bold text-white text-sm'>{purchaseDate}</span>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <span className='text-[#A1A1A1] font-normal text-sm'>Metode Pembayaran</span>
                            <span className='font-bold text-white text-sm uppercase'>{paymentData.activeSubMethod}</span>
                        </div>
                    </div>
                    <Divider className='border-[1px] border-[#3E3E3E] my-4' />
                    <div className='flex items-center gap-6 md:py-5 py-4 md:px-8 px-4'>
                        <Image
                            src={paymentData.icon}
                            alt='logo'
                            width={100}
                            height={100}
                            className='rounded-xl'
                        />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-space-grotesk font-bold text-xl text-white'>{paymentData.gameName || 'N/A'}</h1>
                            <span className='font-normal text-sm text-[#A1A1A1]'>{paymentData.publisher || 'N/A'}</span>
                        </div>
                    </div>
                    <Divider className='border-[1px] border-[#3E3E3E]  my-4' />
                    <div className='flex flex-col gap-5 md:py-5 py-4 md:px-8 px-4'>
                        <h1 className='font-semibold text-sm text-white md:block hidden'>Detail</h1>
                        <h1 className='font-semibold text-sm text-white md:hidden block'>Detail ID Game</h1>
                        <div className='md:flex items-start justify-between w-1/2 hidden'>
                            <div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Item</span>
                                    <span className='font-bold text-white text-sm'>{paymentData?.selectedItem?.name || 'N/A'}</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>USER ID</span>
                                    <span className='font-bold text-white text-sm'>{paymentData.userId}</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>ZONE ID</span>
                                    <span className='font-bold text-white text-sm'>{paymentData.zoneId}</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Username</span>
                                    <span className='font-bold text-white text-sm'>S1lverQuens</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Tanggal Pembelian</span>
                                    <span className='font-bold text-white text-sm'>{purchaseDate}</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Metode Pembayaran</span>
                                    <span className='font-bold text-white text-sm uppercase'>{paymentData.activeSubMethod}</span>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Harga</span>
                                    <span className='font-bold text-white text-sm'>Rp {paymentData?.selectedItem?.priceDiscount > 0 ? paymentData.selectedItem.priceDiscount.toLocaleString() : paymentData.selectedItem.price.toLocaleString()},-</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Fee</span>
                                    <span className='font-bold text-white text-sm'>Rp {paymentData.serviceFee},-</span>
                                </div>
                                <div className='flex flex-col gap-2 pb-3 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Kode Unik</span>
                                    <span className='font-bold text-white text-sm'>338</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start flex-col gap-2 md:hidden w-full'>
                            <div className='flex items-center justify-between gap-2 w-full'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Item</span>
                                <span className='font-bold text-white text-sm'>{paymentData?.selectedItem?.name || 'N/A'}</span>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-full'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>USER ID</span>
                                <span className='font-bold text-white text-sm'>{paymentData.userId}</span>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-full'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>ZONE ID</span>
                                <span className='font-bold text-white text-sm'>{paymentData.zoneId}</span>
                            </div>
                            <div className='flex items-center justify-between gap-2 w-full'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Username</span>
                                <span className='font-bold text-white text-sm'>S1lverQuens</span>
                            </div>
                            <Divider className='border-[1px] border-[#3E3E3E] my-4' />
                            <h1 className='font-semibold text-sm text-white md:hidden block mb-5'>Detail ID Game</h1>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex items-center justify-between gap-2 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Harga</span>
                                    <span className='font-normal text-white text-sm'>Rp {paymentData?.selectedItem?.priceDiscount > 0 ? paymentData.selectedItem.priceDiscount.toLocaleString() : paymentData.selectedItem.price.toLocaleString()},-</span>
                                </div>
                                <div className='flex items-center justify-between gap-2 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Fee</span>
                                    <span className='font-light text-white text-[10px]'>Rp {paymentData.serviceFee},-</span>
                                </div>
                                <div className='flex items-center justify-between gap-2 w-full'>
                                    <span className='text-[#A1A1A1] font-normal text-sm'>Kode Unik</span>
                                    <span className='font-light text-white text-[10px]'>338</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5 bg-[#16C829] py-5 px-8'>
                    <h1 className='text-white font-semibold text-sm'>Total Pembayaran</h1>
                    <div className='flex flex-col gap-1 md:w-1/2'>
                        <span className='flex items-center gap-2 font-semibold text-sm text-white'>
                            Rp {paymentData.totalPayment.toLocaleString()},-
                            <RiFileCopy2Line color='#FFF' size={20} className='cursor-pointer' />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex items-start flex-col gap-5 bg-[#282828] md:p-8 p-4 rounded-xl'>
                <h1 className='text-white font-bold md:text-2xl text-base font-space-grotesk'>Tambahkan Ulasan</h1>
                <div className='flex items-center gap-3 '>
                    <p className='font-space-grotesk font-normal text-base text-white'>Rating:</p>
                    <div className='flex items-center gap-[2px]'>
                        <FaStar size={20} color='white' />
                        <FaStar size={20} color='white' />
                        <FaStar size={20} color='white' />
                        <FaStar size={20} color='white' />
                        <FaStar size={20} color='white' />
                    </div>
                </div>
                <textarea className='w-full h-[90px] rounded-lg bg-[#3E3E3E] resize-none p-4 text-xs font-normal' placeholder='Tuliskan ulasan anda' />
                <button className='w-full py-4 bg-transparent border border-white rounded-xl text-white font-semibold text-sm font-manrope'>Tambah Ulasan</button>
            </div>
            <Link
                href='/'
                className='w-full text-center py-6 bg-transparent border border-white rounded-xl text-white font-semibold text-base'
            >
                Kembali Ke Beranda
            </Link>
        </div>
    )
}

export default DetailPaymentSucces