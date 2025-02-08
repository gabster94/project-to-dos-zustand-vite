import { create } from "zustand";

export const useThemeStore = create(set => ({
    themeColor: "dark",
    updateThemeColor: color => {
        console.log(color)
        set({ themeColor: color })
    }
}))