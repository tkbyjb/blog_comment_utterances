<template>
    <div>
        <ChildComp :msg="'hello'"/>
    </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref,computed} from 'vue'
import ChildComp from './ChildComp.vue'

export default defineComponent({
    components: {
        ChildComp,
    },
    setup(){
        
        return {
            
        }
    }
})
</script>

<style lang="scss" scoped>
</style>