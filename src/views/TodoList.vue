<template>
    <div>
        <TodoAdd @add-todo="addTodo"/>
        <Todos :todoData="list" @done-todo="doneTodo" :type="1"/>
        <hr/>
        <Todos :todoData="doneList" :type="2" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TodoAdd from '@/views/TodoAdd.vue'
import Todos from '@/views/Todos.vue'

export default defineComponent({
    components: {
        TodoAdd,
        Todos,
    },
    setup() {
        const list: Array<string> = reactive([])
        const doneList: Array<string> = reactive([])
        function addTodo(input: string): void {
            list.push(input)
        }
        function doneTodo(index: number): void {
            doneList.push(list[index])
            list.splice(index, 1)
        }
        return {
            list,
            addTodo,
            doneTodo,
            doneList,
        }
    }
})
</script>

<style lang="scss">

</style>