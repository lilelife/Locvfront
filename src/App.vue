<template>
  <div id="app">
            <Header >
                <Row style="background: #e3e8ee;height:60px" >
                    <i-col span="2">
                    </i-col>
                    <i-col span="20" style="padding-top:10px;padding-left:1100px" offset="1">
                        <i-button @click="modal2 = true"  type="Ghost" >{{loadName}}</i-button>
                    </i-col>
                    <i-col span="2" style="padding-top:5px">
                      <i-button type="text" @click="modal = true" size="small">
                        退出登录
                        <Icon type="power"></Icon>
                      </i-button>
                    </i-col>
                    <!--<i-col span="2" style="padding-top:10px">
                        <i-button @click="modal1 = true" size="small" type="text">注册</i-button>
                    </i-col>-->
                </Row>
            </Header>
            <!--登录与注册-->
            <Modal v-model="modal2" @on-ok="ok" width="360">
                <p slot="header" style="color:#3091f2;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>登录</span>
                </p>
                <i-form ref="formInline2" :model="formInline2" :rules="ruleInline2">
                    <Form-item prop="email2">
                        <i-input placeholder="邮箱" type="text" v-model="formInline2.email">
                        </i-input>
                    </Form-item>
                    <Form-item prop="password2">
                        <i-input placeholder="密码" type="password" v-model="formInline2.password">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </i-input>
                    </Form-item>
                </i-form>
            </Modal>
            <Modal v-model="modal" @on-ok="out" width="360">
                <p slot="header" style="color:#3091f2;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>退出登录</span>
                </p>
               <p> 是否确定退出</p>
            </Modal>
           
            <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu @on-select="selectPath" active-name="1" theme="primary" width="auto">
                    <div class="layout-logo-left"></div>
                    <Button type="text"    @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                    <Menu-item name="loc">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">位置信息</span>
                    </Menu-item>
                    <Menu-item name="appinfo">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">软件相关</span>
                    </Menu-item>
                    <Submenu name="persion">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        个人中心
                    </template>
                    <Menu-item name="info">个人信息</Menu-item>
                </Submenu>
                </Menu>
                
            </i-col>
            <i-col :span="spanRight">
              <router-view></router-view>
            </i-col>
        </Row>
        </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      modal: false,
      modal2: false,
      loadName: '登录',
      formInline: {
        user: '',
        email: '',
        password: ''
      },
      ruleInline: {
        user: [
          {
            trigger: 'blur', required: 'true', message: '用户不能为空'
          }
        ],
        email: [
          {trigger: 'blur', required: 'true', message: 'email不能为空'}
        ],
        password: [
          {trigger: 'blur', required: 'true', messge: '密码不能为空'},
          {type: 'string', trigger: 'blur', messger: '密码长度最小为6', min: 6}
        ]
      },
      formInline2: {
        email: '',
        password: ''
      },
      ruleInline2: {
        email: [
            {trigger: 'blur', required: 'true', message: 'email不能为空'}
        ],
        password: [
            {trigger: 'blur', required: 'true', messge: '密码不能为空'},
            {type: 'string', trigger: 'blur', messge: '密码长度最小为6', min: 6}
        ]
      }

    }
  },
  created: function () {
    this.checkLogin()
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    },
    checkLogin () {
      // 检查是否存在session
      var s = this.getCookie('session')
      console.log('checklog' + s)
      if (!this.getCookie('session')) {
        // 如果没有登录状态则跳转到登录页
        this.modal2 = true
        this.$router.push('/loc')
      } else {
        // 否则跳转到登录后的页面
        this.loadName = '当前用户-：' + s
        this.$router.push('/appinfo')
      }
    },
    selectPath (name) {
    //   location.href('/loc')
      // this.$Message.info('开关状态：' + name)
      this.$router.push({'name': name})
    },
    out () {
      this.loadName = '登录'
      this.$Message.info('退出成功')
      this.delCookie('session')
      console.log('out后' + document.cookie)
      // 删除cookie
    },
    // ok () {
    //   this.$Message.info('OK')
    // }
    ok () {
      this.$http.jsonp('http://cloud.bmob.cn/133c4eae7f80cff1/login', {username: this.formInline2.email, password: this.formInline2.password}).then(function (response) {
        console.log('--登录成功-' + JSON.stringify(response.body.beal))
        var is = JSON.stringify(response.body.beal)
        if (is) {
          this.$Message.info('登录成功')
          this.setCookie('session', this.formInline2.email, 30)
          this.loadName = '当前用户-：' + this.formInline2.email
        } else {
          this.$Message.info('登录失败')
        }
      }, function (response) {
        console.log('--登录失败' + response)
      })
    },
    setCookie (email, value, expiredays) {
      var exdate = new Date()
      exdate.setDate(exdate.getDate() + expiredays)
      document.cookie = email + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
      console.log('setcookie' + document.cookie)
    },
    // getCookie (name) {
    //   var arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    //   var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    //   if (arr === document.cookie.match(reg)) {
    //     console.log('getcookei（）   ' + unescape(arr[2]))
    //     return unescape(arr[2])
    //   } else {
    //     return null
    //   }
    // }
    getCookie (name) {
      // var arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      // var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      // if (arr === document.cookie.match(reg)) {
      //   return unescape(arr[2])
      // } else {
      //   return null
      // }
      var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
      return v ? v[2] : null
    },
    delCookie (name) {
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      var cval = this.getCookie(name)
      if (cval !== null) {
        // document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
        this.setCookie('session', '', -1)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
  .layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  }
  .layout-breadcrumb{
      padding: 10px 15px 0;
  }
  .layout-content{
      min-height: 200px;
      margin: 15px;
      overflow: hidden;
      background: #fff;
      border-radius: 4px;
  }
  .layout-content-main{
      padding: 10px;
  }
  .layout-copy{
      text-align: center;
      padding: 200px 0 20px;
      color: #9ea7b4;
  }
  .layout-menu-left{
      background: #e3e8ee;
      height:440px;
  }
  .layout-header{
      height: 60px;
      background: #fff;
  }
  .layout-logo-left{
      width: 90%;
      height: 30px;
      background: #3091f2;
      border-radius: 3px;
      margin: 15px auto;
  }
  .layout-ceiling-main a{
      color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
      display: none;
  }
  .ivu-col{
      transition: width .2s ease-in-out;
  }

</style>
