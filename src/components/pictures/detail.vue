<template>
  <div class="alldetail">
    <detail :details="imgInfo">
      <div slot="pics">
        <vue-preview :slides="slide1"></vue-preview>
      </div>
    </detail>
  </div>
</template>

<script>
import detail from '../common/detail.vue'
import axios from 'axios'


export default {
  data(){
    return {
      imgInfo:{},
      slide1: [],
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getimageInfo/'+this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        this.imgInfo = res.data.message[0];
      }
    }),
    axios({
      url:'http://www.escook.cn:3000/api/getthumimages/'+this.$route.params.id
      }).then(res=>{
        if(res.data.status==0){
          res.data.message.forEach((v,i)=>{
            this.slide1.push({
              src : v.src,
              msrc : v.src,
              alt : i,
              title :'pic',
              w:600,
              h:400
            })
          })
        }
    })
  },
  components:{
    detail
  }
}
</script>

<style>
.my-gallery {
  width: 100%;
} 
.my-gallery img {
  width: 24%;
} 
article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary{
  display: inline;
} 
figure{
  margin:1em 2px;
} 
</style>
