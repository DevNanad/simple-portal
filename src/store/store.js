import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

export const usersStore = create(
    persist(
        (set) => ({
            userId: '',
            addUserId: (id) => set({userId: id}),
            removeUserId: () => set({userId: ''})
        }),
        {
            name: "users",
            storage: createJSONStorage(() => sessionStorage)
        }
))