<template>
  <div class="page">
    <span v-for="(v,i) in goodsList" :key="i" class="goods-item">
      <img :src="v.img_url" alt="">
      <h4>{{v.title}}</h4>
      <span class="info">
        <p class="price">
          <span class="nowPrice">￥{{v.sell_price}}</span>
            <span><del>￥{{v.market_price}}</del></span>
        </p>
        <p class="sale">
          <span>热卖中</span> 
          <span>剩{{v.stock_quantity}}件</span>
        </p>
      </span>
    </span>
    <mt-button type="primary" size="large" plain @click="lookMoreGoods" v-if="isShow">查看更多</mt-button>
  </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
  data(){
    return {
      goodsList:[],
      pageindex:1,
      isShow:true
    }
  },
  created(){
    this.getData();
  },
  methods:{
    getData(){
      axios({
        url:'http://www.escook.cn:3000/api/getgoods?pageindex='+this.pageindex
      }).then(res=>{
        if(res.data.status==0){
          console.log(res.data.message.length)
          if(res.data.message.length>0){
            this.goodsList.push(...res.data.message);
          }else{
            Toast("没有更多数据了");
            this.isShow = false;
          }
        }
      })
    },
    lookMoreGoods(){
      this.pageindex++;
      this.getData();
    }
  }
};
</script>

<style scoped>
.goods-item {
    width: 48%;
    border: 1px solid #ccc;
    margin: 1%;
    box-shadow: 0 0 7px #aaa;
    padding: 2px;
    display: -ms-flexbox;
    display: inline-block;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.goods-item h4{
    font-size: 14px;
    height: 42px;
}
.goods-item img {
    width: 100%;
}
.goods-item .info {
    background-color: #eee;

}
.goods-item .info p {
    margin: 0;
    margin-top: 10px;
    font-size: 13px;
}
.goods-item .info p:first-child .nowPrice {
    color: red;
    font-size: 15px;
    margin-right: 8px;
}
</style>
