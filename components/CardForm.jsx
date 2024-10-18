import Image from 'next/image'
import gamepad from '@/public/assets/icon_gamepad.svg'
import { Divider, Input } from 'antd'
import useStore from '@/zustand/useGameStore';

function CardForm() {
    const { userId, zoneId, whatsapp, errors, setUserId, setZoneId, setWhatsapp, validateForm, submitForm } = useStore();

    const handleSubmit = () => {
        validateForm();
        submitForm();
    };

    return (
        <div className='bg-[#282828] p-6 rounded-xl md:w-1/2 w-[92%] md:relative absolute md:top-0 top-[350px] pt-6 md:pt-6'>
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
                    <h1 className='font-space-grotesk font-bold md:text-[32px] text-base text-white overflow-hidden py-2'>Topup Game</h1>
                    <p className='font-space-grotesk font-normal md:text-[20px] text-xs text-[#949494] overflow-hidden py-2'>Lengkapi data dan dapatkan produk anda!</p>
                </div>
            </div>
            <Divider className='border-[1px] border-[#3E3E3E] my-6' />
            <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-1'>
                    <label className='md:text-sm text-xs text-white'>User ID*</label>
                    <input
                        type='number'
                        placeholder='Masukkan User ID'
                        className='p-4 outline-none md:text-sm text-xs font-normal rounded-lg bg-[#3E3E3E] text-white'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    {errors.userId && <span className="text-red-500 text-xs">{errors.userId}</span>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='md:text-sm text-xs text-white'>Zone ID*</label>
                    <input
                        type='number'
                        placeholder='Masukkan Zone ID'
                        className='p-4 outline-none md:text-sm text-xs font-normal rounded-lg bg-[#3E3E3E] text-white'
                        value={zoneId}
                        onChange={(e) => setZoneId(e.target.value)}
                    />
                    {errors.zoneId && <span className="text-red-500 text-xs">{errors.zoneId}</span>}
                </div>
                <div className='flex flex-col gap-1 col-span-2'>
                    <label className='md:text-sm text-xs text-white'>Nomor WhatsApp</label>
                    <input
                        type='number'
                        placeholder='Ketik nomor WA (081*********21)'
                        className='p-4 outline-none md:text-sm text-xs font-normal rounded-lg bg-[#3E3E3E] text-white'
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                    />
                </div>
            </div>
            <p className='pt-6 text-[#949494] md:text-sm text-xs font-normal'>Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID dan Server ID / Zone ID Anda untuk menyelesaikan transaksi. User ID berada diluar tanda kurung dan Server ID / Zone ID didalam tanda kurung. Contoh : 12345678(1234).</p>
        </div>
    )
}

export default CardForm