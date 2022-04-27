<template>
    <div>
        <!-- <el-table :data="goods" border style="width: 100%">
            <el-table-column prop="itemId" label="id" width="180" />
            <el-table-column prop="itemname" label="itemname" width="180" />
            <el-table-column prop="createTime" label="createTime"  width="180"/>
            <el-table-column prop="shelfTime" label="shelfTime"  width="180"/>
            <el-table-column prop="count" label="count"  width="180"/>
            <el-table-column prop="de" label="de"  width="180"/>
            <el-table-column prop="img" label="img"  width="180"/>
            <el-table-column prop="state" label="state"  width="180"/>
        </el-table> -->
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive, onMounted } from "vue";
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({

    setup() {
        const store = useStore()
        const { proxy }: any = getCurrentInstance();

        const goods: Array<any> = reactive([])

        onMounted(() => {
            axios({
                url: '/item/get',
                method: 'get',
                params: {
                    pageIndex: 1,
                    pageSize: 2,
                }
            })
                .then((response: any) => {
                    response.data.array.forEach((item: any) => {
                        goods.push(item)
                    });
                })
        })
        return {
            store,
            proxy,
            goods,
        }
    }
})
</script>

<style lang="scss">
</style>