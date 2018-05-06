<template>
    <div class="buynum">
        <h4>
            <span>购买数量：</span>
            <div class="btnwrap">
            <button class="reducebtn" @click="reducebtn">-</button>
            <input type="num" v-model="num">
            <button class="addbtn" @click="addbtn">+</button>
            </div>
        </h4>
    </div>  
</template>

<script>
export default {
  data(){
      return {
          num:0
      }
  },
  props:['min','max','step','value'],
  methods:{
      reducebtn(){
          if(this.num >= this.min+ this.step){
            this.num -= +this.step;
            this.$emit('input',this.num);
          }
      },
      addbtn(){
          if( this.num <= this.max- this.step){
            this.num += +this.step;  
            this.$emit('input',this.num);         
          }
      }
  },
  watch:{
    value:{
        handler:function(nv,ov){
            this.num = nv;
        },
        immediate:true
    }
  }
}
</script>

<style>
.btns,.buynum {
  margin: 10px;
}
.btnwrap {
    position: relative;
    display: inline-block;
    overflow: hidden;
    width: 120px;
    height: 35px;
    padding: 0 40px;
    vertical-align: top;
    vertical-align: middle;
    border: 1px solid #bbb;
    border-radius: 3px;
    background-color: #efeff4;
}
.btnwrap input{
    display: inline-block;
    overflow: hidden;
    width: 100%!important;
    height: 100%;
    margin: 0;
    padding: 0 3px!important;
    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;
    border: none!important;
    border-right: 1px solid #ccc!important;
    border-left: 1px solid #ccc!important;
    border-radius: 0!important;
}
.btnwrap button{
    font-size: 18px;
    font-weight: 400;
    line-height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 40px;
    height: 100%;
    padding: 0;
    color: #555;
    border: none;
    border-radius: 0;
    background-color: #f9f9f9;
}
.btnwrap .reducebtn {
    left: 0;    
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.btnwrap .addbtn{
    right: 0;  
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

</style>
