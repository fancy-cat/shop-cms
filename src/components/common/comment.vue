<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
    <mt-button size="large" type="primary" @click = "addComment">发表评论</mt-button>
    <ul class="mui-table-view">
					<li v-for="(item,index) in commentList" :key="index" class="mui-table-view-cell mui-media">
						<a href="javascript:;">
              <div class=" mui-pull-right text-center user">
                <p>{{item.user_name}}</p>
							<img class="mui-media-object" :src='  "../../assets/images/menu"+ Math.round(Math.random()*4+1)+".png"'>
                
              </div>
							<div class="mui-media-body">
							  <p>第{{index+1}}楼 发表时间： {{item.add_time | formdate("YYYY年MM月DD日 HH:mm:ss")}}</p>
								<p class="mui-ellipsis">{{item.content}}</p>
							</div>
						</a>
					</li>
      </ul>
      <mt-button v-if="isShow" size="large" plain type="primary" @click = "moreComment">更多评论</mt-button>
  </div>
</template>

<script>
import axios from 'axios';

import formdate from '@/filter/formdat';

import { Toast } from 'mint-ui';

export default {
  data(){
    return {
      pageindex:1,
      commentList:[],
      isShow:true,
      content:""
    }
  },
  props:['artid'],
  created(){
    this.getData();
  },
  methods:{
    getData(){
      axios({
        url:'http://www.escook.cn:3000/api/getcomments/'+this.artid+'?pageindex='+this.pageindex,
      }).then(res=>{
        // console.log(res);
        if(res.data.status == 0){
          if(res.data.message.length){
            this.commentList.push(...res.data.message);
            // this.commentList = this.commentList.concat(res.data.message);
            // console.log(this.commentList)
          }else{
            this.isShow = false;
            Toast('没有更多数据了');
          }
        }
      })
    },
    moreComment(){
      this.pageindex++;
      this.getData();
      
    },
    addComment(){
      axios({
        url:'http://www.escook.cn:3000/api/postcomment/'+this.artid,
        method:'post',
        data:"content="+this.content
      }).then(res=>{
        if(res.data.status == 0){
          if(this.content.trim()){
                this.commentList.unshift({
                user_name:'匿名用户',
                add_time:new Date(),
                content:this.content
              });
                this.content = "";
            }else{
              Toast("请输入评价~")
            }
          }
        })   
    }
  },
  filters:{
    formdate
  }
}
</script>


<style scoped>
  textarea {
    margin: 5px 0 0px;
  }
  .user img {
    margin-left: 5px;
  }
</style>
