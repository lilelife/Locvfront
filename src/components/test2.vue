<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button type="text">被引用</Button>
  </div>
</template>

<script>
// import template from './index.html'
// let list = Vue.extend({
//         template: template
// });
export default {
  name: 'hello',
  // components: {
  //   // 'map': {
  //   //   render (createElement) {
  //   //     return createElement(
  //   //       'script',
  //   //       {
  //   //         attrs: {
  //   //           type: 'text/javascript',
  //   //           src: 'http://api.map.baidu.com/api?v=2.0&ak=LgkCMuUCnW4lBdklRGnZskqK94PxQ0HW'
  //   //         }
  //   //       },
  //   //     )
  //   //   }
  //   // }
  //   // template2: template
  // },
  data () {
    return {
      msg: 'Welcome to Your  App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
