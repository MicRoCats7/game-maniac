import Image from 'next/image'
import gamepad from '@/public/assets/icon_gamepad.svg'
import { Divider, Input } from 'antd'

function CardForm() {
    return (
        <div className='bg-[#282828] p-6 rounded-xl'>
            <div className='flex items-center gap-5'>
                <div className='py-6 px-[18px] bg-[#3E3E3E] rounded-[19px]'>
                    <Image
                        src={gamepad}
                        alt='bannerDiskon'
                        width={60}
                        height={30}
                    />
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-space-grotesk font-bold text-[32px] text-white'>Topup Game</h1>
                    <p className='font-space-grotesk font-normal text-[20px] text-[#949494]'>Lengkapi data dan dapatkan produk anda!</p>
                </div>
            </div>
            <Divider className='border-[1px] border-[#3E3E3E] my-6' />
            <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm text-white'>User ID*</label>
                    <input placeholder='Masukkan User ID' className='p-4 outline-none text-sm font-normal rounded-lg bg-[#3E3E3E] text-white' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm text-white'>Zone ID*</label>
                    <input placeholder='Masukkan Zone ID' className='p-4 outline-none text-sm font-normal rounded-lg bg-[#3E3E3E] text-white' />
                </div>
                <div className='flex flex-col gap-1 col-span-2'>
                    <label className='text-sm text-white'>Nomor WhatsApp</label>
                    <input placeholder='Ketik nomor WA (081*********21)' className='p-4 outline-none text-sm font-normal rounded-lg bg-[#3E3E3E] text-white' />
                </div>
            </div>
            <p className='pt-6 text-[#949494] text-sm font-normal'>Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID dan Server ID / Zone ID Anda untuk menyelesaikan transaksi. User ID berada diluar tanda kurung dan Server ID / Zone ID didalam tanda kurung. Contoh : 12345678(1234).</p>
        </div>
    )
}

export default CardForm