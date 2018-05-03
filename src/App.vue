<template>
  <div id="app" class="page">
    <mt-header fixed title="小龟宝的cms">
        <mt-button v-if="$route.path!='/home'" icon="back" slot="left" @click= $router.go(-1)>返回</mt-button>
    </mt-header>
    <router-view/>
    <div>
      <nav class="mui-bar mui-bar-tab">
        <router-link to ='/home' class="mui-tab-item" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to ='/member' class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link to ='/cart' class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link to ='/search' class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-gear"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
		</nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #fff;
}
 .page {
   padding:40px 8px 50px;
 }

</style>
