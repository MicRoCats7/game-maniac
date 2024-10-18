import qris from '@/public/assets/qris.png';
import dana from '@/public/assets/dana.png';
import ovo from '@/public/assets/ovo.png';
import shopeepay from '@/public/assets/shopeepay.png';
import linkaja from '@/public/assets/linkaja.png';
import useStore from '@/zustand/useGameStore';
import vocaCredit from '@/public/assets/emptywallet.svg'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import Image from 'next/image';

function CardMetodePembayaran() {
    const { activePaymentMethod, setActivePaymentMethod, activeSubMethod, setActiveSubMethod, setServiceFee } = useStore();

    const paymentMethods = [
        {
            key: '1',
            title: 'QRIS',
            subMethods: [
                {
                    key: 'qris',
                    title: 'QRIS',
                    image: qris,
                    service: 1500,
                }
            ]
        },
        {
            key: '2',
            title: 'E-Wallet',
            subMethods: [
                {
                    key: 'dana',
                    title: 'Dana',
                    image: dana,
                    service: 1500,
                },
                {
                    key: 'ovo',
                    title: 'OVO',
                    image: ovo,
                    service: 1500,
                },
                {
                    key: 'shopeepay',
                    title: 'ShopeePay',
                    image: shopeepay,
                    service: 1500,
                },
                {
                    key: 'linkaja',
                    title: 'LinkAja',
                    image: linkaja,
                    service: 1500,
                },
            ],
        }
    ];

    const togglePanel = (key) => {
        setActivePaymentMethod(activePaymentMethod === key ? null : key);

        if (activePaymentMethod === key) {
            setActiveSubMethod(null);
        }
    };

    const toggleSubMethod = (subMethod) => {
        setActiveSubMethod(subMethod.key);
        setServiceFee(subMethod.service);
    };

    return (
        <div className='bg-[#282828] md:p-6 px-6 pb-6 md:rounded-xl rounded-es-xl rounded-ee-xl'>
            <h1 className='font-space-grotesk font-bold text-2xl text-white hidden md:block'>Pilih Metode Pembayaran</h1>
            <div
                className={`p-3 border border-white rounded-xl h-full cursor-pointer md:hidden flex items-center gap-4`}
            >
                <div className='bg-[#3E3E3E] p-[10px] rounded-[10px]'>
                    <Image src={vocaCredit} width={30} height={30} alt='VocaCredit' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-white font-bold text-base font-manrope'>VocaCredit</p>
                    <p className='text-[#949494] font-normal text-xs font-manrope'>Rp 2.755.000,-</p>
                    <p className='text-white font-normal text-xs font-manrope'>Sisa saldo: Rp 3.125.000,-</p>
                </div>
            </div>
            {paymentMethods.map((method) => (
                <div key={method.key} className='mt-6'>
                    <div
                        className={`flex justify-between items-center p-4 text-white cursor-pointer bg-[#3E3E3E] rounded-xl`}
                        onClick={() => togglePanel(method.key)}
                    >
                        <h2 className='text-sm text-white font-semibold'>{method.title}</h2>
                        <span>{activePaymentMethod === method.key ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activePaymentMethod === method.key ? 'max-h-[500px]' : 'max-h-0'}`}
                    >
                        {activePaymentMethod === method.key && (
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 pt-4'>
                                {method.subMethods.map((subMethod) => (
                                    <div
                                        key={subMethod.key}
                                        className={`p-3 bg-[#3E3E3E] rounded-xl h-full cursor-pointer md:block flex items-center gap-4
                                        ${activeSubMethod === subMethod.key ? 'border-2 border-white' : ''}`}
                                        onClick={() => toggleSubMethod(subMethod)}
                                    >
                                        {subMethod.image && (
                                            <img src={subMethod.image.src} alt={subMethod.title} className='md:w-full w-[70px] md:h-[130px] h-[50px]' />
                                        )}
                                        <div className='md:block flex items-center justify-between w-full'>
                                            <div>
                                                <p className='text-white md:mt-3 font-semibold text-sm'>{subMethod.title}</p>
                                                <div className='flex items-center md:block gap-1'>
                                                    <p className='text-[#A1A1A1] font-normal text-sm'>Biaya Layanan</p>
                                                    <p className='text-white font-semibold text-sm hidden md:block'>+ Rp {subMethod.service},-</p>
                                                    <p className='text-white font-semibold text-sm md:hidden block'><span className='text-[#A1A1A1] font-normal'>:</span> {subMethod.service}</p>
                                                </div>
                                            </div>
                                            <div className='md:hidden block'>
                                                <input
                                                    type="radio"
                                                    className='accent-white w-5 h-5'
                                                    checked={activeSubMethod === subMethod.key}
                                                    onChange={() => toggleSubMethod(subMethod)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardMetodePembayaran;
