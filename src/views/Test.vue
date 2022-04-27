<template>
    <!-- <div>
        <div v-for="(item, index) of 9" :key="item" :index="index" class="line">
            <span v-for="(item2, index2) of item" :key="item2" :index="index2" class="box">
               {{ item2 + '*' + item + '=' + item2*item  }} 
            </span>
        </div>
    </div>
    <div>
        <form>
            <label>姓名</label>
            <input v-model="form.username" /><br/>
            <label>性别</label>
            <input v-model="form.sex" /><br/>
            <label>年龄</label>
            <input v-model="form.age" /><br/>
            <label>电话</label>
            <input v-model="form.tel" /><br/>
            <button @click="add">添加信息</button>
        </form>
    </div>
    <div>
        <table>
            <tr>
                <td>姓名</td>
                <td>性别</td>
                <td>年龄</td>
                <td>电话</td>
            </tr>
            <tr v-for="(item,index) in users" :key="item">
                <td>{{item.username}}</td>
                <td>{{item.sex}}</td>
                <td>{{item.age}}</td>
                <td>{{item.tel}}</td>
                <td><button @click="deleteUser(index)">删除</button></td>
            </tr>
        </table>
    </div> -->
    <div>
        <button v-color="{color:'red', box: box}">红</button>
        <div :style="{'width':'200px','height':'200px'}" ref="box"></div>
    </div>
    <div :style="{'width':'200px','height':'200px'}" v-wrap-color></div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref,computed} from 'vue'

export default defineComponent({
    directives:{
        color: (el, binding)=>{
            console.log(binding.value)
            binding.value.box.style.backgroundColor = binding.value.color;
        },
        warpColor: (el, binding)=>{
            let colors = ['pink', 'green', 'cyan', 'pink']
            el.style.backgroundColor = binding.value
        }
    },
    setup(){
        let box = ref(null)
        // let arr2 = computed(()=>{
        //     return arr[0];
        // })
        // let form = reactive({
        //     username: '',
        //     sex: '',
        //     age: '',
        //     tel: ''
        // })
        // const arr: Array<number> = reactive([1,2,3])
        // const users: Array<any> =  reactive([])
        // function add(): void {
        //     users.splice(users.length,0,form)
        // }
        // function deleteUser(index: number): void {
        //     users.splice(index,1)
        // }
        return {
            // arr,
            // arr2,
            // form,
            // users,
            // add,
            // deleteUser,
            box,
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