<template>
  <div class="alldetail">
    <detail :details="goodsdetail"></detail>
  </div>
  
</template>

<script>
import axios from 'axios';
import detail from '../common/detail';

export default {
  data(){
    return {
      goodsdetail:{}
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/goods/getdesc/'+this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        console.log(res.data.message)
        this.goodsdetail = res.data.message[0];
      }
    })
  },
  components:{
      detail
  }
}
</script>

<style scoped>
 

</style>
