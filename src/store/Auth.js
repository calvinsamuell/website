import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [],
    currentUser: null
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
    setCurrentUser(user) {
      this.currentUser = user;
    },
    logoutUser() {
      this.currentUser = null;
    }
  },
  getters: {
    getUserByEmail: (state) => (email) => {
      return state.users.find((user) => user.email === email);
    }
  }
});
