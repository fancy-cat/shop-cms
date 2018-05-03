<template>
  <div class="alldetail">
    <h4>{{details.title}}</h4>
    <p>
      <span>{{details.add_time}}</span>
      <span class="mui-pull-right">点击：{{details.click}}次</span>
    </p>
    <hr>
    <div v-html="details.content"></div>
    <comment :artid="$route.params.id"></comment>
    
  </div>
</template>

<script>
import axios from 'axios';
import comment from '../common/comment';



export default {
  data(){
    return {
      details:{},
    }
  },
 created(){
   axios({
     url:'http://www.escook.cn:3000/api/getnew/'+this.$route.params.id
   }).then(res=>{
     if(res.data.status == 0){
       this.details = res.data.message[0];
     }
   })
 },
  components:{
    comment
  }

}
</script>

<style>
  .alldetail img {
    width: 100%;
  }
</style>
