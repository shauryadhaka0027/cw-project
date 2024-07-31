
import { create } from 'zustand'

export const useZustand = create((set) => ({
    isAuth:false,
    setIsAuth: (isAuth) => set({ isAuth }),
     
}));

