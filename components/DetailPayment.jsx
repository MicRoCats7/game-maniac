import React from 'react'
import { RiFileCopy2Line } from 'react-icons/ri'
import Image from 'next/image'
import { Divider } from 'antd'
import customerService from '@/public/assets/customer-service.svg'
import { MdKeyboardArrowRight } from 'react-icons/md'

function DetailPayment() {
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));
    const purchaseDate = paymentData ? new Date(paymentData.purchaseDate).toLocaleDateString() : 'N/A';

    return (
        <div className='w-full flex flex-col gap-5'>
            <div className='bg-[#282828] rounded-xl'>
                <div className='flex md:items-center items-start md:justify-center md:flex-row flex-col gap-5 md:bg-[#3E3E3E] md:py-5 py-4 md:px-8 px-4'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-normal text-xs text-[#A1A1A1]'>Tanggal Pembelian</span>
                        <span className='font-semibold text-sm text-white'>{purchaseDate}</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='font-normal text-xs text-[#A1A1A1]'>Nomor Pesanan</span>
                        <span className='flex items-center gap-2 font-semibold text-sm text-white'>
                            ML-1691549057-VLMEW1WN0FA6MIG
                            <RiFileCopy2Line color='#949494' size={20} className='cursor-pointer' />
                        </span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <span className='font-normal text-xs text-[#A1A1A1]'>Metode Pembayaran</span>
                        <span className='font-semibold text-sm text-white uppercase'>{paymentData.activeSubMethod || 'N/A'}</span>
                    </div>
                </div>
                <Divider className='border-[1px] border-[#3E3E3E]  my-4' />
                <div>
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
                        <div className='md:grid grid-cols-2 gap-2 hidden'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Item</span>
                                <span className='font-bold text-white text-sm'>{paymentData?.selectedItem?.name || 'N/A'}</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Harga</span>
                                <span className='font-bold text-white text-sm'>Rp {paymentData?.selectedItem?.priceDiscount > 0 ? paymentData.selectedItem.priceDiscount.toLocaleString() : paymentData.selectedItem.price.toLocaleString()},-</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>USER ID</span>
                                <span className='font-bold text-white text-sm'>{paymentData.userId}</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Fee</span>
                                <span className='font-bold text-white text-sm'>Rp {paymentData.serviceFee},-</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>ZONE ID</span>
                                <span className='font-bold text-white text-sm'>{paymentData.zoneId}</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Kode Unik</span>
                                <span className='font-bold text-white text-sm'>338</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[#A1A1A1] font-normal text-sm'>Username</span>
                                <span className='font-bold text-white text-sm'>S1lverQuens</span>
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
                <div className='flex items-center justify-between gap-5 bg-[#F9F9F9] py-5 px-8'>
                    <h1 className='text-[#282828] font-semibold text-sm'>Total Pembayaran</h1>
                    <div className='flex flex-col gap-1 md:w-1/2'>
                        <span className='flex items-center gap-2 font-semibold text-sm text-[#009E11]'>
                            Rp {paymentData.totalPayment.toLocaleString()},-
                            <RiFileCopy2Line color='#949494' size={20} className='cursor-pointer' />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between gap-5 bg-[#282828] py-5 px-8 rounded-xl'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={customerService}
                        alt='customer-service'
                        width={24}
                        height={24}
                    />
                    <h1 className='text-[#949494] font-semibold text-sm md:block hidden'>Sudah bayar namun pesanan belum masuk? <span className='text-white'>Hubungi kami</span></h1>
                    <h1 className='text-[#949494] font-semibold text-sm md:hidden block'>Butuh bantuan? <span className='text-white'>Hubungi kami</span></h1>
                </div>
                <MdKeyboardArrowRight size={24} color='white' />
            </div>
        </div>
    )
}

export default DetailPayment