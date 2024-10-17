import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    // Game Store
    games: [],
    isLoading: false,
    error: null,
    activeCategory: 'Rekomendasi',
    activeGame: null,
    activeItemId: null,

    fetchGames: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get('https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products');
            set({ games: response.data, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch games', isLoading: false });
        }
    },

    fetchGamesById: async (id) => {
        set({ isLoading: true, error: null });
        try {
            const response = await axios.get(`https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products/${id}`);
            set({ activeGame: response.data, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch game details', isLoading: false });
        }
    },

    setActiveCategory: (category) => set({ activeCategory: category }),

    setActiveGame: (gameId) => set((state) => ({
        activeGame: state.games.find((game) => game.id === gameId)
    })),

    setActiveItemId: (itemId) => set({ activeItemId: itemId }),

    // Payment Store
    activePaymentMethod: null,
    activeSubMethod: null,
    setActivePaymentMethod: (key) => set((state) => ({
        activePaymentMethod: state.activePaymentMethod === key ? null : key,
    })),
    setActiveSubMethod: (key) => set((state) => ({
        activeSubMethod: state.activeSubMethod === key ? null : key,
    })),
}));

export default useStore;
