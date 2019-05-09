<template>
<div class="conter">
    <div class="head">
        <div style="position: absolute;width:7.5rem;">
            <img src="../assets/head_log.png" alt="" class="head_log">
        </div>
    <img src="../assets/head_logs.png" alt="" class="head_logs">
    </div>
    <div class="footer">
        <h3 class="footer_title">智能保险箱</h3>
        <div class="footer_right">
            <h4 class="footer_right_titles">有安全感，才能稳稳地幸福</h4>
        </div>
    </div> 
</div>    
</template>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    .conter{
        width: 7.5rem;
        height: 13.34rem;
    }
    .head{
        height: 11.24rem;       
    }
    .head_log{
        width: 100%;
        padding-bottom: 0.89rem;
    }   
    .head_logs{
        width: 7.50rem;
        height: 11.24rem;
    }
    .footer{
        width: 7.5rem;
        height: 1.64rem;
    }
    .footer_title{
        font-size: 0.46rem;
        margin-left: 2.37rem;
        color: #000000;
        margin-top: 0.46rem;
        letter-spacing: 0.22rem;
    }
    .footer_right_titles{
        margin-left: 1.83rem;
        letter-spacing: 0.09rem;
        font-size: 0.25rem;
        color: #ababab;
        margin-top: 0.08rem;
    }
</style>
<script>

export default {
    data(){
        return {
            count:"",//倒计时
        }
    },
    created(){
        this.threeGo()
    },
    methods:{
        threeGo(){
            const TIME_COUNT = 3;
            if(!this.timer){
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(()=>{
                if(this.count > 0 && this.count <= TIME_COUNT){
                    this.count--;
                }else{
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    //跳转的页面写在此处
                    // this.$router.push({
                    //     path: '/'
                    // });
                    location.href="/login"
                }
		  },1000)
		}
        }
    }
}

</script>
