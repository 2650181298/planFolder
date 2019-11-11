<template>
    <div class="home">
        <form @submit.prevent="insertData">
            <input type="text" v-model="name">
            <button>添加学生</button>
        </form>
        <ul>
            <li v-for = "item in studentList">姓名:{{item.name}} 班级:{{item.clazz.name}} <button @click="del(item.id)">删除</button> </li>
            <!-- <span v-for = "items in list">姓名:{{list.name}}<span @click="del(index)">删除</span><br></span> -->
        </ul>
        <ul>
            
            <!-- <span v-for = "item,i in studentList">班级:{{item.clazz.name}}<br></span> -->
            
            <!-- <span v-for = "items in list">姓名:{{list.name}}<span @click="del(index)">删除</span><br></span> -->
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { constants } from 'fs';
export default {
    name: "home",
    data() {
        return {
            studentList:[],
            // listll:[],
            name:''
        };
    },
    methods:{


        //查找
        getList(){
            axios.get("http://127.0.0.1:7001/messagest")
            .then(res => {
                console.log(res);
                this.studentList = res.data;
            })
            .catch(err => {
                console.log(err);
            });
            // axios.get("http://127.0.0.1:7001/messagelests")
            // .then(res => {
            //     console.log(res);
            //     this.listll = res.data;
            //     console.log(listll)
            //     // this.listlest = res.data;
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            
        },




        //删除
        del(id){
            
            axios.delete(`http://127.0.0.1:7001/messagestudents/`+id)
            // .then(res => {
            //     this.list = res.data;
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            this.$router.go(0);

        },



        //联查
        // jointsearch(){
        //     axios.get("http://127.0.0.1:7001/messagelest")
        //     .then(res => {
        //         console.log(res);
        //         this.list = res.data;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // },



        //添加
        insertData(){
            axios.post("http://127.0.0.1:7001/messagelests",{
                name:this.name
            })
            .then(res => {
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        }
},
    created() {
        this.getList();
    }
};

</script>
