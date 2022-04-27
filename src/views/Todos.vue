<template>
    <div v-for="(item,index) in todoData" :key="item" :index="index">
        <span>{{item}}</span>
        <button @click="done(index)" v-if="type==1">完成</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    emits: ['done-todo'],
    props: ['todoData', 'type'],
    setup(props, context) {
        let input = ref('')
        function done(index: number): void {
            context.emit('done-todo', index)
        }
        return {
            input,
            done,
        }
    }
})
</script>

<style lang="scss">

</style>