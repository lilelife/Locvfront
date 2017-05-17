<template>
  <div class="hello">
    <Row type="flex">
      <i-col span="20">
        <h1>{{ msg }}</h1>
      </i-col>
      <i-col span="4">
        <Button type="primary" @click="refresh">刷新</Button>
      </i-col>
    </Row>
      <div style="padding-top:30px"></div>
     <baidu-map class="bm-view" :center="center" :zoom="15"  :scroll-wheel-zoom="true"  @ready="handle" ak="LgkCMuUCnW4lBdklRGnZskqK94PxQ0HW">
     <bm-marker :position="{lng: 108.83, lat: 34.135}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
     <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
     <bm-label content="您当前所在的位置" :position="{lng: 108.83, lat: 34.135}" :labelStyle="{color: '#3399ff', fontSize : '24px'}" title="Hover me"/>
     </baidu-map> 
  </div>
</template>

<script>
import test2 from './test2.vue'
import { BaiduMap, BmMarker, BmGeolocation, BmLabel } from 'vue-baidu-map'
export default {
  name: 'hello',
  created: function () {
    this.handle()
  },
  data () {
    return {
      html: '<b>地图</b><br><button>click</button>',
      msg: 'Welcome to Your LocVisual App',
      center: {lng: 108.839509, lat: 34.135265}
    }
  },
  methods: {
    handle () {
      this.$http.jsonp('https://cloud.bmob.cn/133c4eae7f80cff1/getLatlng').then(function (response) {
        this.center.lng = response.Latitude
        // this.$Message.error('开关状态：' + JSON.stringify(response))
        // console.log('--s>' + JSON.stringify(response))
        // console.log('-->' + JSON.stringify(response.bodyText).Latitude)
        this.center.lat = response.Longtitude
      })
    },
    refresh () {
      this.$Message.info('刷新成功')
    }
  },
  components: {
    test2: test2,
    BaiduMap,
    BmGeolocation,
    BmMarker,
    BmLabel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.bm-view {
  width: 100%;
  height: 500px;
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
