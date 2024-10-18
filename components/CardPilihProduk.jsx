import Image from 'next/image';
import bannerDiskon from '@/public/assets/banner-diskon.svg';
import { Divider } from 'antd';
import useGameStore from '@/zustand/useGameStore';
import diamond from '@/public/assets/iconDiamond.svg'

function CardPilihProduk({ items, isLoading }) {
  const { activeItemId, setActiveItemId, setSelectedItem } = useGameStore();

  const handleItemClick = (item) => {
    setActiveItemId(item.id);
    setSelectedItem(item);
  };

  console.log(items)

  return (
    <div className='bg-[#282828] p-6 rounded-xl md:w-[82%] w-full'>
      <h1 className='text-white text-2xl font-bold overflow-hidden font-space-grotesk'>Pilih Produk</h1>
      {items?.length > 0 && (
        <div className='mt-6 md:flex items-center gap-2 py-3 px-4 border border-white w-[30%] rounded-xl hidden'>
          <Image
            src={items[0]?.iconUrl || diamond}
            alt='diamond'
            width={40}
            height={40}
          />
          <span className='font-semibold text-sm text-white'>
            {items[0]?.name.includes(' ')
              ? items[0]?.name.split(' ').slice(1).join(' ')
              : items[0]?.name
            }
          </span>
        </div>
      )}
      <Divider className='border-[1px] border-[#3E3E3E] my-6 hidden md:block' />
      <div className='mt-6 flex items-start flex-col gap-2 bg-[#1A1A1A] w-full rounded-xl md:hidden'>
        {items?.length > 0 && (
          <div className='flex items-center gap-2 pt-4 pb-2 px-4'>
            <Image
              src={items[0]?.iconUrl || diamond}
              alt='diamond'
              width={16}
              height={16}
            />
            <span className='font-bold text-xs text-white font-manrope'>
              {items[0]?.name.includes(' ')
                ? items[0]?.name.split(' ').slice(1).join(' ')
                : items[0]?.name
              }
            </span>
          </div>
        )}
        <div className='w-[40%] bg-white h-[2px]' />
      </div>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-4 mt-6 py-4 pr-4'>
        {isLoading ? (
          <p className='text-white'>Loading items...</p>
        ) : (
          items?.map(item => (
            <div
              key={item.id}
              className={`relative overflow-visible h-full flex flex-col ${activeItemId === item.id ? 'border border-white rounded-xl' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              <div className='absolute md:-top-3 -top-[8px] md:-right-3 -right-6'>
                {item.priceDiscount > 0 && (
                  <>
                    <Image
                      src={bannerDiskon}
                      alt='bannerDiskon'
                      width={90}
                      height={23}
                      className='rounded-lg w-[90px] md:h-[90px] h-[60px]'
                    />
                    <span className='font-noto-sans absolute md:top-5 top-3 right-2 text-[#282828] text-[10px] font-semibold px-2 py-1 rounded-lg rotate-45'>
                      {Math.round((item.priceDiscount / item.price) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <div className='bg-[#3E3E3E] p-4 rounded-xl flex items-center justify-between w-full flex-grow'>
                <div className='flex flex-col gap-2'>
                  <span className='text-white text-sm font-semibold font-manrope'>{item.name}</span>
                  <span className='text-[#23CD36] text-sm font-semibold font-manrope'>
                    Rp {item.priceDiscount > 0 ? item.priceDiscount.toLocaleString() : item.price.toLocaleString()},-
                  </span>
                  {item.priceDiscount > 0 && (
                    <span className='text-[#949494] text-sm font-normal font-manrope line-through'>Rp {item.price.toLocaleString()},-</span>
                  )}
                </div>
                <Image
                  src={item.iconUrl}
                  alt='diamond'
                  width={40}
                  height={40}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CardPilihProduk;
