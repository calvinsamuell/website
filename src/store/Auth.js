import { defineStore } from "pinia"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: []
    }),
    actions: {
        addUser(user){
            this.users.push(user)
        }
    },
    getters: {
        getUserByEmail: state => email =>{
            return state.users.find(user => user.email === email)
        }
    }

})