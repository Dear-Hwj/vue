<template>
  <div class = "main">
    <div class="content">
      <router-view/>
    </div>
    <div class = "navs">
      <ul>
        <li>
          <router-link to="/"></router-link>
          <div>首页</div>
        </li>
        <li>
          <router-link to="/Category">分类</router-link>
        </li>
        <li>
          <router-link to="/Cart">购物车</router-link>
        </li>
        <li>
          <router-link to="/Me">我的</router-link>
      
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'App'
  }
</script>
<style>

</style>