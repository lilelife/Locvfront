<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button type="text">位置</Button>
    <test2></test2>
    <!--<test2  :height="40px"></test2>-->
  </div>
</template>

<script>
import test2 from '@/components/test2.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your LocVisual App'
    }
  },
  components: {
    test2
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
