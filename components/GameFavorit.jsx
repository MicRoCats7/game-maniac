import React, { useEffect } from 'react';
import CardGame from './CardGame';
import useGameStore from '@/store/useGameStore';
import SkeletonCard from './SkeletonCard';

function GameFavorit() {
    const { games, fetchGames, isLoading, error, activeCategory, setActiveCategory } = useGameStore();

    const tabCategories = ['Rekomendasi', 'Mobile Game', 'PC Game'];

    useEffect(() => {
        fetchGames();
    }, [fetchGames]);

    const filteredGames = games.filter((game) => {
        if (activeCategory === 'Rekomendasi') return true;
        return game.category === (activeCategory === 'Mobile Game' ? 'MOBILE' : 'PC');
    });

    return (
        <section className='bg-[#1A1A1A]'>
            <div className='md:wrapper md:px-[120px] wrapper-mobile md:pt-20 pt-6 pb-[53px]'>
                <h1 className='text-white font-space-grotesk md:text-[32px] text-base font-bold md:mb-10 mb-4 overflow-hidden'>Temukan Game Favorit</h1>
                <div className='flex items-start md:flex-row flex-col md:gap-10 gap-4'>
                    <ul className='flex md:flex-col flex-row gap-3 w-full md:w-auto'>
                        {tabCategories.map((category) => (
                            <li
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`md:w-auto text-center w-full md:py-3 py-4 md:px-5 px-3 rounded-lg md:text-sm text-xs cursor-pointer font-manrope font-bold ${activeCategory === category
                                    ? 'bg-white text-[#282828]'
                                    : 'bg-transparent hover:bg-white hover:text-[#282828] hover:font-bold font-normal text-[#949494]'
                                    }`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                    <div className='grid md:grid-cols-5 grid-cols-2 gap-[27px]'>
                        {isLoading && Array(5).fill().map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                        {error && <p className='text-red-500'>{error}</p>}

                        {!isLoading && !error && filteredGames.map((game) => (
                            <CardGame key={game.id} game={game} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameFavorit;
