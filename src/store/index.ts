import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartSlice, createCartSlice } from "./cart-slice";

export interface AppState extends CartSlice { }

export const useAppStore = create<AppState>()(
    persist(
        (...a) => ({
            ...createCartSlice(...a),
        }),
        { name: "app-storage", storage: createJSONStorage(() => sessionStorage) }
    )
)