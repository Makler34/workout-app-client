import { create } from 'zustand'

const useStore = create((set) => ({
    isAuth: false,
    user: null,
    login: (user) => set({ user, isAuth: true }),
    logoff: () => set({ user: null, isAuth: false })
}))

export default useStore;