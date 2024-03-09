import {defineStore} from 'pinia'

const useMainStore = defineStore("main", {
  state: () => ({
    collapse: false
  }),
  getters: {
  },
  actions: {
    setCollapse () {
      this.collapse = !this.collapse
    }
  }
})

export default useMainStore
