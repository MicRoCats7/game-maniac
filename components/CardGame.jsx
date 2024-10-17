import Link from "next/link";

function CardGame({ game }) {
    return (
        <Link href={`/detail/${game.id}`}>
            <div className='pt-14 cursor-pointer'>
                <div className="relative w-[180px] h-[100px] overflow-visible">
                    <div className="absolute -top-12 md:left-1/2 left-[45%] transform -translate-x-1/2 z-[999]">
                        <img
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
        </Link>
    );
}

export default CardGame;
