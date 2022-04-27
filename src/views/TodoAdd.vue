<template>
    <input v-model="input" />
    <button @click="addTodo">添加</button> 
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default defineComponent({
    emits: ['add-todo'],
    setup(props, context) {
        let input = ref('')
        function addTodo(): void{
            context.emit('add-todo', input.value)
            input.value = ''
        }
        onMounted(() => {
            // 
            axios({
                method: 'get',
                url: '/api/user/get',
            })
            .then((response: any)=>{
                console.log(response)
            })
            .catch((error: any)=>{
                console.log(error)
            })
            axios({
                method: 'post',
                url: '/api/login',
                data:{
                    username: 'aaa',
                    pwd: '111'
                }
            })
            axios({
                method: 'post',
                url: '/api/login2',
                params:{
                    username: 'aaa',
                    pwd: '111'
                }
            })
        })
        return {
            input,
            addTodo,
            axios,
        }
    }
})
</script>

<style lang="scss">

</style>