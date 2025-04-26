import { create } from 'zustand';

// Create a Zustand store
export const useStore = create((set) => ({
    isAuth: false, 
    setIsAuth: (value) => set(() => ({ isAuth: value })), 
}));




