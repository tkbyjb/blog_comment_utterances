<template>
    <div>
        <button @click="showLogin=true">登录</button>
        <button @click="showLogin=false">注册</button>
        <div v-if="showLogin">
            <div>登录页面</div>
            <label>username</label><input type="text" />
            <label>password</label><input type="password" />
        </div>

        <div v-else>
            <div>注册页面</div>
            <label>username</label><input type="text" v-color="'red'"/>
            <label>password</label><input type="password" v-color="'green'"/>
            <label>age</label><input type="number" v-color="'yellow'" />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref,computed} from 'vue'

export default defineComponent({
    directives:{
        color: (el, binding)=>{
            el.style.backgroundColor = binding.value;
        },
        color2: (el, binding)=>{
            let colors = ['pink', 'green', 'cyan']
            el.style.backgroundColor = colors[binding.value%(colors.length+1)]
        }
    },
    setup(){
        let showLogin = ref(true)
        return {
            showLogin,
        }
    }
})
</script>

<style lang="scss" scoped>
.box{
    border: 1px solid black;
}
.line{
    text-align: left;
}
</style>