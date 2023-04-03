<template>
  <div>
    <div
      ref="c_mapRef"
      class="cesiumContainer"
    ></div>

    <!-- 弹窗部分 -->
    <div class="pop">
      <div class="line"></div>
      <div class="confirm"></div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import pointImg from '@/assets/point.png'
  import * as Cesium from 'cesium'
  // 高德地图提供源
  const gdMap = `https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}`
  const bol = true
  let c_mapRef = ref(null)
  let viewer = ref(null)
  // 点位信息
  let pointInfo = [
    {
      id: '392f7fbb-ae25-4eef-ac43-58fd91148d1a',
      longitude: 121.48,
      latitude: 31.24069,
      pointName: '公司1'
    },
    {
      id: '392f7fbb-ae25-4eef-ac43-58fd91148d1b',
      longitude: 121.49491,
      latitude: 31.24169,
      pointName: '公司2'
    },
    {
      id: '392f7fbb-ae25-4eef-ac43-58fd91148d1c',
      longitude: 121.50992,
      latitude: 31.24269,
      pointName: '公司3'
    },
    {
      id: '392f7fbb-ae25-4eef-ac43-58fd91148d1d',
      longitude: 121.48,
      latitude: 31.25169,
      pointName: '公司4'
    },
    {
      id: '392f7fbb-ae25-4eef-ac43-58fd91148d1e',
      longitude: 121.49491,
      latitude: 31.28169,
      pointName: '公司5'
    },
    {
      id: '392f7fbb-ae25-4eef-ac43-58fd91148d1f',
      longitude: 121.51982,
      latitude: 31.24969,
      pointName: '公司6'
    }
  ]
  // 初始化
  const initCesium = () => {
    Cesium.Ion.defaultAccessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MjhiOTdhYS0yZmVlLTQ2ODgtOTYxYS0yZDI0YmEzZGJjMGIiLCJpZCI6MTMxNjQyLCJpYXQiOjE2ODAzMzA1MTF9.rELwhuS7TcPt68BeIXzVr0RGE-u0GUn7CmWvmcqIsLs`
    viewer.value = new Cesium.Viewer(c_mapRef.value, {
      baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮。
      geocoder: false, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
      navigationHelpButton: false, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
      homeButton: false, // 如果设置为false，将不会创建右上角主页(房子)按钮。
      sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
      animation: false, // 如果设置为false，将不会创建左下角动画小部件。
      timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件。
      fullscreenButton: false, // 如果设置为false，将不会创建右下角全屏按钮。
      scene3DOnly: false, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
      shouldAnimate: true, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel 。
      // ps. Viewer＃clockViewModel 是用于控制当前时间的时钟视图模型。我们这里用不到时钟，就把shouldAnimate设为false
      infoBox: false, // 是否显示点击要素之后显示的信息
      sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  this.Cesium.SceneMode
      requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源吧
      // 地图影像这里选择的是gdMap--高德影像地形地图
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: gdMap,
        maximumLevel: 18
      }),
      selectionIndicator: false // 关闭绿色选择框
    })

    viewer.value._cesiumWidget._creditContainer.style.display = `none` //去除cesium按钮  隐藏版权

    viewer.value.scene.globe.depthTestAgainstTerrain = false
    // 再加上高德影像注记地图  imageryLayers获取将在地球上渲染的图像图层的集合。
    viewer.value.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider({
        url: 'http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
      })
    )

    // 设置初始位置  Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result)
    // BoundingSphere 具有中心和半径的包围球。
    const boundingSphere = new Cesium.BoundingSphere(
      Cesium.Cartesian3.fromDegrees(121.49491, 31.24169, 150),
      15000
    )
    // 定位到初始位置 flyToBoundingSphere将相机移到当前视图包含所提供的包围球的位置。
    viewer.value.camera.flyToBoundingSphere(boundingSphere, {
      // 定位到初始位置的过渡时间，设置成0，就没有过渡，类似一个过场的动画时长
      duration: 0
    })
  }

  // 加载点位信息
  const loadPoint = () => {
    clearPoint() // 清除上一次加载的点位
    pointInfo.map(pointObj => {
      viewer.value.entities.add({
        name: pointObj.pointName,
        code: pointObj.id,
        id: pointObj.id,
        position: Cesium.Cartesian3.fromDegrees(
          pointObj.longitude * 1,
          pointObj.latitude * 1
        ),
        // 点
        // point: {
        //   pixelSize: 5,
        //   color: Cesium.Color.RED,
        //   outlineColor: Cesium.Color.WHITE,
        //   outlineWidth: 2,
        // },

        // 文字标签
        label: {
          // show: false,
          text: pointObj.pointName,
          font: '18px monospace',
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,
          fillColor: Cesium.Color.fromCssColorString('rgb(250,191,19)'),
          outlineWidth: 4,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM, // 垂直方向以底部来计算标签的位置
          pixelOffset: new Cesium.Cartesian2(0, -20) // 偏移量
        },
        // 图标
        billboard: {
          image: pointImg,
          width: 32,
          height: 32
        }
      })
    })
  }
  // 清除点位
  const clearPoint = () => {
    viewer.value.entities.removeAll()
  }

  // 监听点击事件
  const handleListen = () => {
    const handler = new Cesium.ScreenSpaceEventHandler(
      viewer.value.scene.canvas
    )

    handler.setInputAction(click => {
      console.log('单击事件', click.position)

      // 二维坐标转世界坐标
      const cartesian = viewer.value.camera.pickEllipsoid(
        click.position,
        viewer.value.scene.globe.ellipsoid
      )
      // 笛卡尔坐标转换为地理坐标
      const cartographic = Cesium.Cartographic.fromCartesian(cartesian)

      // 将弧度转为经纬度的十进制表示，保留5位小数
      const lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(5)
      const lat = Cesium.Math.toDegrees(cartographic.latitude).toFixed(5)

      console.log(lon, lat)

      // 获取地图上的点位实体entity坐标
      const pick = viewer.scene.pick(click.position)
      // 如果pick不是undefined，那么就是点到点位了
      if (pick && pick.id) {
        // 定位到地图中心
        console.log(pick.id)
        const data = {
          layerId: 'layer1', // 英文，且唯一,内部entity会用得到
          lon: lon,
          lat: lat,
          element: '#one', // 弹框的唯一id
          boxHeightMax: 0 // 中间立方体的最大高度
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }
  onMounted(() => {
    initCesium()
    loadPoint()
    // handleListen()
  })
</script>

<style lang="scss" scoped>
  .cesiumContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
  .pop {
    display: none;
    user-select: none;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 534px;
    // width: 100%; // 这里设置成100%，打算在组件内根据内容设置具体的宽度实践 发现无效
    z-index: 99990;
    .line {
      position: absolute;
      left: 0;
      width: 0;
      /* height: 100px; */
      bottom: 0;
    }
    .confirm {
      display: none;
      position: absolute;
      top: 0;
      left: 30px;
      right: 0;
      /* bottom: 100px; */
      transform: translateY(-100%);
      /* background: url(~@/assets/map/layer_border.png) no-repeat; */
      background-size: 100% 100%;
      color: white;
      padding: 20px 20px 20px 20px;
      font-size: 14px;
      user-select: text;
      pointer-events: auto;
      background-color: rgba(3, 22, 37, 0.85);
    }
  }
</style>
