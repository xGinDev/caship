import { create } from 'zustand';

interface AppState {
    showLogin?: boolean;
    setShowLogin: (showLogin: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    showLogin: false,
    setShowLogin: (showLogin: boolean) => set({ showLogin })
}));