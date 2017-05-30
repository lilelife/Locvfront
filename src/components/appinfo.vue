<template>
  <div class="hello">
    
    <div style="padding-left:150px;padding-right:150px;padding-top:10px">
     <!--<Collapse accordion v-model="value1" style="background:#f5f7f9">
        <Panel name="1">
            客户端
            <p slot="content">使用Android studio开发，软件当前版本1.0</p>
        </Panel>
        <Panel name="2">
            服务器
            <p slot="content">使用Bmob云</p>
        </Panel>
        <Panel name="3">
            前端
            <p slot="content">使用VUE框架</p>
        </Panel>
    </Collapse>-->
    <Card>
        <p slot="title">开发信息</p>
        <p>软件版本：version:1.0</p><br>
        <p></p><br>
        <p>软件特征：简单、易于接受使用</p><br>
        <img width="50px" height="50px" src="../assets/lele.png" @click="to"/>
    </Card>
    </div>
    <div style="padding-left:20px;padding-top:50px;padding-right:20px">
      <Font size="3px" color="">软件图片展示</Font>
      <Row type="flex" style="padding-top:10px">
        <i-col span="8">
          <Row>
            <i-col>
          <Font size="2px">登录界面</Font></i-col>
          <i-col style="padding-top:10px">
          <img width="200px" height="300px" src="../assets/load.jpg"/></i-col>
          </Row>
        </i-col>
        <i-col span="8">
          <Row>
           <i-col>
             <Font size="2px">搜索界面</Font></i-col>
          <i-col style="padding-top:10px">
             <img width="200px" height="300px" src="../assets/search.jpg"/></i-col>
          </Row>
        </i-col>
        <i-col span="8">
          <Row>
           <i-col>
             <Font size="2px">主界面</Font></i-col>
          <i-col style="padding-top:10px">
             <img width="200px" height="300px" src="../assets/main.jpg"/></i-col>
          </Row>
        </i-col>
      </Row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  created: function () {
    this.checklog()
  },
  data () {
    return {
      msg: 'Welcome to Your LocVisual App',
      value1: '1'
    }
  },
  methods: {
    to () {
      this.$router.push({'name': 'loc'})
    },
    checklog () {
      console.log(document.cookie)
      if (document.cookie === '') {
        // 如果没有登录状态则跳转到登录页
        this.$router.push('/loc')
      } else {
        // 否则跳转到登录后的页面
        this.$router.push('/appinfo')
      }
    },
    getCookie (name) {
      var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
      return v ? v[2] : null
    }
  }
}
</script>

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
