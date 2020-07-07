<template>
  <div class="box">
    <h1>{{title}}</h1>
    <ul>
      <li v-for = "(list,index) in lists" v-bind:class = "{'checked':list.done}">
        <label>
          {{index + 1}}.{{list.value}}
          <time>{{list.created}}</time>  
        </label>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
    data(){
      return{
        title: 'vue_demo',
        lists:[
          {
            value:'阅读一本关于前端的书',
            done: false
          },
          {
            value:'补充规范代码',
            done: true
          },
          {
            value:'写心得',
            done: false,
          }
        ]
      }
    }
    
  }
</script>>
<style>
  .box{
    margin: 0 auto;
    width: 500px;
    height: 300px;

  }
  ul,li{ 
    padding:0;
    margin:0;
    list-style:none
  }
  

</style>