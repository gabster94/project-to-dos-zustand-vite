import { create } from "zustand";

export const appContentStore = create(() => ({
    appContent: {
        heading: "State Management - Zustand"
    }
}))