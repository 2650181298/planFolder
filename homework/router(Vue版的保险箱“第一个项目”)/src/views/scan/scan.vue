<template>
    <div id="for">
        <one></one>
        <two></two>
        <tree></tree>
    </div>
</template>
<script>
import {fontsizeset} from '../../fontsizeset.js';
import one from './Header'
import two from './Bodyer'
import tree from './Footer'
export default {
    name:'for',
    components:{one,two,tree},
    data(){
        return{
            count:'',
        }
    },
    created(){
        this.goGrdoupRecor()
    },
    methods:{
        goGrdoupRecor(){
            const TIME_COUNT = 3;
            if(!this.timer){
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(()=>{
                    if(this.count > 0 && this.count<=TIME_COUNT){
                        this.count--;
                    }else{
                        alert('即将跳转到添加保险箱页面')
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                        this.$router.push({
                            path:'/Synthesis'
                        })
                    }
                },500)
            }
        },
        beforeDestroy(){
        clearInterval(this.timer);
}
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
/* 大盒子 */
#for{
    width: 100%;
    height: 11.51rem;
}
</style>
