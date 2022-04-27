<template>
    <div>
      <input v-model="username" />
      <button @click="setusername">修改</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from 'vuex'

export default defineComponent({

    setup() {
        const store = useStore()
        let username = ref('')

        function setusername(): void {
            store.commit('setUsername', username.value)
            store.dispatch('usernameAsyn', username.value)
            console.log("state.username  "+store.state.username)
            console.log("state.username  "+store.getters.ttt)
        }
        return {
            store,
            username,
            setusername,
        }
    }
})
</script>

<style lang="scss">

</style>