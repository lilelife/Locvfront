<template>
  <div class="hello">
    <Button type="text">被引用</Button>
    <!--<p v-html="html"></p>-->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      html: '<button v-on:click="test()">删除</button>'
    }
  },
  components: {
  },
  methods: {
    test () {
      console.log('点击')
      alert('alagjd')
    }
  }
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
  // }
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
