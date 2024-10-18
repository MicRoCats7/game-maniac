import qris from '@/public/assets/qris.png';
import Image from 'next/image';
import scanQris from '@/public/assets/scanqris.png'

function ScanPayment() {
    return (
        <div className='bg-[#282828] w-full rounded-xl flex items-center flex-col justify-center gap-5 p-8 border border-[#5E5E5E]'>
            <div className='bg-[#282828] rounded-xl w-full border border-[#5E5E5E]'>
                <div className='flex items-center gap-4 p-3'>
                    <div className='bg-[#3E3E3E] p-[10px] rounded-[10px]'>
                        <Image src={qris} width={100} height={100} alt='qris' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-white font-bold md:text-base text-sm font-manrope'>Scan QRIS</p>
                        <p className='text-[#949494] font-normal text-xs font-manrope'>
                            Shopee Pay, OVO, DANA, Gopay, LinkAja, dan transfer bank via QRIS
                        </p>
                    </div>
                </div>
            </div>
            <Image src={scanQris} width={319} height={319} alt='qris' />
            <button className='w-full p-3 bg-white text-[#282828] font-semibold text-sm rounded-lg'>Unduh QR Code</button>
        </div>
    )
}

export default ScanPayment