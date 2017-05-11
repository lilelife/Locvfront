<template>
  <div id="app">
            <Header >
                <Row style="background: #e3e8ee" >
                    <i-col span="2">
                        <!--<img src="./assets/timg.jpg"  width="40px" height="50px"/>-->
                    </i-col>
                    <i-col span="18" style="padding-top:10px;padding-left:900px" offset="1">
                        <i-button @click="modal2 = true" size="small" type="text" >登录</i-button>
                    </i-col>
                    <i-col span="2" style="padding-top:10px">
                        <i-button @click="modal1 = true" size="small" type="text">注册</i-button>
                    </i-col>
                </Row>
            </Header>
            <!--登录与注册-->
            <Modal v-model="modal2" width="360">
                <p slot="header" style="color:#3091f2;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>登录</span>
                </p>
                <i-form ref="formInline2" :model="formInline2" :rules="ruleInline2">
                    <Form-item prop="email2">
                        <i-input placeholder="邮箱" type="text" v-model="formInline2.emai">
                        </i-input>
                    </Form-item>
                    <Form-item prop="password2">
                        <i-input placeholder="密码" type="password" v-model="formInline2.passwor">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </i-input>
                    </Form-item>
                </i-form>
            </Modal>
            <Modal v-model="modal1" width="360">
                <p slot="header" style="color:#3091f2;text-align:center">
                    <Icon type="information-circled"></Icon>
                    <span>注册</span>
                </p>
                <i-form ref="formInline" :model="formInline" :rules="ruleInline">
                    <Form-item prop="user">
                        <i-input placeholder="用户名" type="text" v-model="formInline.user">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </i-input>
                    </Form-item>
                    <Form-item prop="email">
                        <i-input placeholder="邮箱" type="text" v-model="formInline.email">
                        </i-input>
                    </Form-item>
                    <Form-item prop="password">
                        <i-input placeholder="密码" type="password" v-model="formInline.password">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </i-input>
                    </Form-item>
                </i-form>
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
                    <Menu-item name="history">历史记录</Menu-item>
                    <Menu-item name="info">信息修改</Menu-item>
                </Submenu>
                </Menu>
                
            </i-col>
            <i-col :span="spanRight">
              <router-view></router-view>
            </i-col>
            <!--<i-col :span="spanRight">
                <div class="layout-header">
                    <Button type="text"    @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
                <router-view></router-view>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>-->
            
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
      modal1: false,
      modal2: false,

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
        emai: '',
        passwor: ''
      },
      ruleInline2: {
        emai: [
            {trigger: 'blur', required: 'true', message: 'email不能为空'}
        ],
        passwor: [
            {trigger: 'blur', required: 'true', messge: '密码不能为空'},
            {type: 'string', trigger: 'blur', messge: '密码长度最小为6', min: 6}
        ]
      }

    }
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
    test () {
      this.$router.push({path: '/loc'})
    },
    selectPath (name) {
    //   location.href('/loc')
      this.$Message.error('开关状态：' + name)
      this.$router.push({'name': name})
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
