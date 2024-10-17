import Image from 'next/image';
import bannerDiskon from '@/public/assets/banner-diskon.svg';
import { Divider } from 'antd';
import useGameStore from '@/store/useGameStore';

function CardPilihProduk({ items, isLoading }) {
  const { activeItemId, setActiveItemId } = useGameStore();

  const handleItemClick = (id) => {
    setActiveItemId(id);
  };

  console.log('items', items);

  return (
    <div className='bg-[#282828] p-6 rounded-xl w-[82%]'>
      <h1 className='text-white text-2xl font-bold overflow-hidden font-space-grotesk'>Pilih Produk</h1>
      <div className='mt-6 flex items-center gap-2 py-3 px-4 border border-white w-[30%] rounded-xl'>
        <Image
          // src={items[0]?.iconUrl}
          alt='diamond'
          width={40}
          height={40}
        />
        <span className='font-semibold text-sm text-white'>
          {/* {items[0]?.name.includes(' ') ? items[0]?.name.split(' ').slice(1).join(' ') : items[0]?.name} */}
        </span>
      </div>
      <Divider className='border-[1px] border-[#3E3E3E] my-6' />
      <div className='grid grid-cols-3 gap-4 mt-6 py-4'>
        {isLoading ? (
          <p className='text-white'>Loading items...</p>
        ) : (
          items?.map(item => (
            <div
              key={item.id}
              className={`relative overflow-visible h-full flex flex-col ${activeItemId === item.id ? 'border border-white rounded-xl' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <div className='absolute -top-3 -right-3'>
                {item.priceDiscount > 0 && (
                  <>
                    <Image
                      src={bannerDiskon}
                      alt='bannerDiskon'
                      width={90}
                      height={23}
                      className='rounded-lg'
                    />
                    <span className='font-noto-sans absolute top-5 right-2 bg-white text-[#282828] text-[10px] font-semibold px-2 py-1 rounded-lg rotate-45'>
                      {Math.round((item.priceDiscount / item.price) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <div className='bg-[#3E3E3E] p-4 rounded-xl flex items-center justify-between w-full flex-grow'>
                <div className='flex flex-col gap-2'>
                  <span className='text-white text-sm font-semibold font-manrope'>{item.name}</span>
                  <span className='text-[#23CD36] text-sm font-semibold font-manrope'>Rp {item.price.toLocaleString()},-</span>
                  {item.priceDiscount > 0 && (
                    <span className='text-[#949494] text-sm font-normal font-manrope line-through'>Rp {item.priceDiscount.toLocaleString()},-</span>
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
