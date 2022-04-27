<template>
    <div>
        父组件传过来的值 = {{msg}}
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref,computed} from 'vue'

export default defineComponent({
    props: ['msg'],
    setup(props){
        
        return {
            
        }
    }
})
</script>

<style lang="scss" scoped>
</style>