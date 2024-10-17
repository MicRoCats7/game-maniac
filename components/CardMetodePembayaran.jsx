import qris from '@/public/assets/qris.png';
import dana from '@/public/assets/dana.png';
import ovo from '@/public/assets/ovo.png';
import shopeepay from '@/public/assets/shopeepay.png';
import linkaja from '@/public/assets/linkaja.png';
import useStore from '@/store/useGameStore';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function CardMetodePembayaran() {
    const { activePaymentMethod, setActivePaymentMethod, activeSubMethod, setActiveSubMethod } = useStore();

    const paymentMethods = [
        {
            key: '1',
            title: 'QRIS',
            subMethods: [
                {
                    key: 'qris',
                    title: 'QRIS',
                    image: qris,
                    service: '+ Rp 1.500,-',
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
                    service: '+ Rp 1.500,-',
                },
                {
                    key: 'ovo',
                    title: 'OVO',
                    image: ovo,
                    service: '+ Rp 1.500,-',
                },
                {
                    key: 'shopeepay',
                    title: 'ShopeePay',
                    image: shopeepay,
                    service: '+ Rp 1.500,-',
                },
                {
                    key: 'linkaja',
                    title: 'LinkAja',
                    image: linkaja,
                    service: '+ Rp 1.500,-',
                },
            ],
        }
    ];

    const togglePanel = (key) => {
        setActivePaymentMethod(activePaymentMethod === key ? null : key);
        if (key === '1') {

            setActiveSubMethod(null);
        }
    };

    const toggleSubMethod = (key) => {
        setActiveSubMethod(activeSubMethod === key ? null : key);
    };

    return (
        <div className='bg-[#282828] p-6 rounded-xl'>
            <h1 className='font-space-grotesk font-bold text-2xl text-white'>Pilih Metode Pembayaran</h1>
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
                            <div className='grid grid-cols-2 gap-4 pt-4'>
                                {method.subMethods ? (
                                    method.subMethods.map((subMethod) => (
                                        <div
                                            key={subMethod.key}
                                            className={`p-3 bg-[#3E3E3E] rounded-xl h-full cursor-pointer 
                                            ${activeSubMethod === subMethod.key ? 'border-2 border-white' : ''}`}
                                            onClick={() => toggleSubMethod(subMethod.key)}
                                        >
                                            {subMethod.image && <img src={subMethod.image.src} alt={subMethod.title} className='w-full h-[130px]' />}
                                            <p className='text-white mt-3 font-semibold text-sm'>{subMethod.title}</p>
                                            <p className='text-[#A1A1A1] font-normal text-sm'>Biaya Layanan</p>
                                            <p className='text-white font-semibold text-sm'>{subMethod.service}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className='p-3 bg-[#3E3E3E] rounded-xl h-full cursor-pointer'>
                                        {method.image && <img src={method.image.src} alt={method.title} className='w-full h-[130px]' />}
                                        <p className='text-white mt-3 font-semibold text-sm'>{method.title}</p>
                                        <p className='text-[#A1A1A1] font-normal text-sm'>Biaya Layanan</p>
                                        <p className='text-white font-semibold text-sm'>{method.service}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardMetodePembayaran;


