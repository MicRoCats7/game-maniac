import { create } from 'zustand';
import axios from 'axios';

const useGameStore = create((set) => ({
    games: [],
    isLoading: false,
    error: null,
    activeCategory: 'Rekomendasi',

    fetchGames: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products');
            set({ games: response.data, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch games', isLoading: false });
        }
    },

    setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useGameStore;
