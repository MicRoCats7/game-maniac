import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    games: [],
    isLoading: false,
    error: null,
    activeCategory: 'Rekomendasi',
    activeGame: null,
    activeItemId: null,
    selectedItem: null,
    loadingGameId: null,

    activePaymentMethod: null,
    activeSubMethod: null,
    serviceFee: 0,

    userId: '',
    zoneId: '',
    whatsapp: '',
    errors: {
        userId: '',
        zoneId: '',
    },
    paymentData: null,
    purchaseDate: 'N/A',

    searchQuery: '',
    searchResult: null,

    setUserId: (value) => set({ userId: value }),
    setZoneId: (value) => set({ zoneId: value }),
    setWhatsapp: (value) => set({ whatsapp: value }),
    setErrors: (errors) => set({ errors }),
    setLoading: (loading) => set({ isLoading: loading }),
    setPaymentData: (data) => set({ paymentData: data }),
    setPurchaseDate: (date) => set({ purchaseDate: date }),

    setSearchQuery: (query) => set({ searchQuery: query }),

    searchOrder: () => set((state) => {
        const storedPaymentData = JSON.parse(localStorage.getItem('paymentData'));

        if (storedPaymentData && (
            storedPaymentData.gameName?.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            storedPaymentData.selectedItem?.name?.toLowerCase().includes(state.searchQuery.toLowerCase())
        )) {
            return { searchResult: storedPaymentData };
        } else {
            return { searchResult: null };
        }
    }),


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
        set({ loadingGameId: id, isLoading: true, error: null });
        try {
            const response = await axios.get(`https://6708f839af1a3998ba9fdc6e.mockapi.io/api/v1/products/${id}`);
            set({ activeGame: response.data, loadingGameId: null, isLoading: false });
            return response.data;
        } catch (error) {
            set({ error: 'Failed to fetch game details', isLoading: false });
        }
    },

    setActiveCategory: (category) => set({ activeCategory: category }),

    validateForm: () => set((state) => {
        const newErrors = { userId: '', zoneId: '' };

        if (!state.userId) {
            newErrors.userId = 'User ID is required';
        }
        if (!state.zoneId) {
            newErrors.zoneId = 'Zone ID is required';
        }

        return { errors: newErrors };
    }),

    submitForm: () => set((state) => {
        const newErrors = { userId: '', zoneId: '' };

        if (!state.userId) {
            newErrors.userId = 'User ID is required';
        }
        if (!state.zoneId) {
            newErrors.zoneId = 'Zone ID is required';
        }
        if (!state.userId || !state.zoneId) {
            alert('Please fill in the required fields');
        }
        if (!newErrors.userId && !newErrors.zoneId) {
            window.location.href = '/payment';
        }

        return { errors: newErrors };
    }),

    setActiveCategory: (category) => set({ activeCategory: category }),
    setActiveGame: (gameId) => set((state) => ({
        activeGame: state.games.find((game) => game.id === gameId)
    })),

    setActiveItemId: (itemId) => set({ activeItemId: itemId }),
    setSelectedItem: (item) => set({ selectedItem: item }),
    setActivePaymentMethod: (key) => set((state) => ({
        activePaymentMethod: state.activePaymentMethod === key ? null : key,
    })),
    setActiveSubMethod: (key) => set((state) => ({
        activeSubMethod: state.activeSubMethod === key ? null : key,
    })),
    setServiceFee: (fee) => set({ serviceFee: fee }),

    showDetailPayment: true,
    showDetailPaymentSuccess: true,

    setShowDetailPayment: (value) => set({ showDetailPayment: value }),
    setShowDetailPaymentSuccess: (value) => set({ showDetailPaymentSuccess: value }),
}));

export default useStore;
