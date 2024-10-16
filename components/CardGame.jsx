import Image from 'next/image';

function CardGame({ game }) {
    return (
        <div className='pt-14'>
            <div className="relative w-[180px] h-[100px] overflow-visible cursor-pointer">
                <div className="absolute -top-12 md:left-1/2 left-[45%] transform -translate-x-1/2 z-[999]">
                    <Image
                        src={game.image}
                        alt={game.name}
                        width={80}
                        height={80}
                        className="rounded-lg border border-white object-cover"
                    />
                </div>

                <div className="bg-[#282828] px-4 pb-2 pt-[40px] md:w-full w-[90%] h-full flex flex-col justify-center items-center md:rounded-bl-[30px] md:rounded-tr-[30px] md:rounded-tl-xl md:rounded-br-xl rounded-lg">
                    <h1 className="text-white text-center font-semibold text-xs overflow-hidden">{game.name}</h1>
                    <span className="text-gray-400 block text-center font-plus-jakarta-sans text-[10px] overflow-hidden">{game.publisher}</span>
                </div>
            </div>
        </div>
    );
}

export default CardGame;
