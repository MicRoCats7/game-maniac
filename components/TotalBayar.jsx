import Image from 'next/image'
import bannerDiskon from '@/public/assets/banner-diskon-total.svg';
import useStore from '@/zustand/useGameStore';

// Import gambar metode pembayaran
import qris from '@/public/assets/qris.png';
import dana from '@/public/assets/dana.png';
import ovo from '@/public/assets/ovo.png';
import shopeepay from '@/public/assets/shopeepay.png';
import linkaja from '@/public/assets/linkaja.png';
import Loading from './Loading';

function TotalBayar() {
    const { selectedItem, activeSubMethod, serviceFee, submitForm, userId, zoneId, whatsapp, activeGame, setLoading, isLoading } = useStore();
    if (!selectedItem || !activeSubMethod) return null;

    const handleBuyNow = () => {
        setLoading(true);

        const dataToStore = {
            selectedItem,
            userId,
            zoneId,
            whatsapp,
            activeSubMethod,
            serviceFee,
            gameName: activeGame?.name,
            publisher: activeGame?.publisher,
            purchaseDate: new Date().toISOString(),
            icon: activeGame.image,
            totalPayment: (selectedItem?.priceDiscount > 0 ? selectedItem.priceDiscount : selectedItem.price) + serviceFee,
        };

        localStorage.setItem('paymentData', JSON.stringify(dataToStore));
        setTimeout(() => {
            submitForm();
            setLoading(false);
        }, 3000);
    };

    const paymentMethodImages = {
        qris: qris,
        dana: dana,
        ovo: ovo,
        shopeepay: shopeepay,
        linkaja: linkaja
    };

    const activePaymentImage = paymentMethodImages[activeSubMethod] || qris;

    return (
        <div className="fixed bottom-0 bg-[#3E3E3E] w-full shadow-md">
            <div className="flex justify-between md:wrapper px-[120px] wrapper-mobile">
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-3'>
                        <Image src={selectedItem.iconUrl} width={40} height={40} alt="icon diamond" className='hidden md:block' />
                        <div>
                            <h1 className="font-bold text-base font-plus-jakarta-sans text-white">{selectedItem.name}</h1>
                            <h2 className="font-semibold text-xs text-white"><span className='text-[#949494] font-normal'>
                                Harga: </span>Rp {
                                    selectedItem.priceDiscount > 0 ?
                                        selectedItem.priceDiscount.toLocaleString() :
                                        selectedItem.price.toLocaleString()},-
                            </h2>
                        </div>
                    </div>

                    <div className='md:flex items-center gap-3 hidden'>
                        <Image src={activePaymentImage} width={40} height={40} alt="icon total bayar" />
                        <div>
                            <h1 className="font-bold text-base font-plus-jakarta-sans text-white">{activeSubMethod.toUpperCase()}</h1>
                            <h2 className="font-semibold text-xs text-white"><span className='text-[#949494] font-normal'>Biaya Layanan: </span>{serviceFee}</h2>
                        </div>
                    </div>
                </div>

                <div className='relative overflow-visible h-full px-4 py-4'>
                    <div className='absolute top-[11px] right-[-103px] w-full'>
                        <>
                            {selectedItem.priceDiscount > 0 && (
                                <>
                                    <Image
                                        src={bannerDiskon}
                                        alt='bannerDiskon'
                                        width={40}
                                        height={14}
                                        className='rounded-lg'
                                    />
                                    <span className='font-noto-sans absolute top-[11px] right-[116px] text-white text-[6px] font-semibold rounded-lg rotate-45'>
                                        {Math.round((selectedItem.priceDiscount / selectedItem.price) * 100)}% OFF
                                    </span>
                                </>
                            )}
                        </>
                    </div>
                    <button
                        onClick={handleBuyNow}
                        className="bg-white text-[#282828] px-4 py-3 rounded-lg font-manrope font-semibold text-sm"
                    >
                        Beli Sekarang
                    </button>
                </div>
            </div>
            {isLoading && <Loading />}
        </div>
    );
}

export default TotalBayar;
