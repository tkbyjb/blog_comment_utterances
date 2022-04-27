<template>
    <div>
        <button @click="boxColor='red'">红</button>
        <button @click="boxColor='yellow'">黄</button>
        <button @click="boxColor='blue'">蓝</button>
        <div style="width: 200px;height: 200px;" v-color="boxColor"></div>
    </div>

    <div style="width: 200px;height: 200px;" @click="count++" v-color2="count"></div>
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
        let boxColor = ref('white');
        let count = ref(0)
        return {
            boxColor,
            count,
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