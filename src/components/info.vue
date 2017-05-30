<template>
  <div class="hello">
    <div style="padding-top:10px">
      <Font  size="5px">个人信息</Font>
    </div>
    <div style="padding:200px">
    <i-form>
      <Form-item>
        <Row type="flex">
            <i-col>
              <p style="color:#3399ff;font-size:20px">用户名:</p>
            </i-col>
            <i-col style="padding-left:60px">
              <i-input v-model="userName" v-bind:readonly="readonly" type="text"></i-input>
            </i-col>
            <i-col style="padding-left:10px">
              <Button type="text" @click="edit">
                <Icon type="edit"></Icon>
              </Button>
            </i-col>
        </Row>
        <Row type="flex" style="padding-top:10px">
            <i-col>
              <p style="color:#3399ff;font-size:20px">个性签名:</p>
            </i-col>
            <i-col style="padding-left:40px">
              <i-input v-model="signature" type="text" :readonly="readonly"></i-input>
            </i-col>
            <i-col style="padding-left:10px">
              <Button type="text" @click="edit">
                <Icon type="edit"></Icon>
              </Button>
            </i-col>
        </Row>
        <Row type="flex" style="padding-top:30px">
            <i-col>
              <Button type="text" @click="cancle">取消</Button> </i-col>
            <i-col style="padding-left:170px">
              <Button type="primary" @click="on">确定</Button>
            </i-col>
        </Row>
      </Form-item>
     
    </i-form>
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
      userName: 'happy',
      signature: 'die for me',
      readonly: true
    }
  },
  methods: {
    on () {
      this.readonly = true
      this.$Message.info('修改成功')
    },
    edit () {
      this.readonly = false
    },
    cancle () {
      this.userName = 'happy'
      this.signature = 'die for me'
      this.readonly = true
      this.$Message.error('修改失败')
    },
    checklog () {
      console.log(document.cookie)
      if (document.cookie === '') {
        // 如果没有登录状态则跳转到登录页
        this.$router.push('/loc')
      } else {
        // 否则跳转到登录后的页面
        this.$router.push('/info')
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
