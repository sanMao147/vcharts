// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import * as echarts from 'echarts/core'
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'

// 注册必须的组件
echarts.use([
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LabelLayout,
  UniversalTransition,
  LegendComponent,
  BarChart,
  CanvasRenderer
])
export const useCharts = () => {
  const canvasEl = shallowRef()
  const myChart = shallowRef()
  const resizeFn = () => {
    myChart.value?.resize()
  }

  onMounted(() => {
    myChart.value = echarts.init(canvasEl.value)
    window.addEventListener('resize', resizeFn, false)
  })

  onBeforeUnmount(() => {
    window.addEventListener('resize', resizeFn, false)
    myChart.value?.dispose()
    myChart.value = null
  })
  return {
    myChart,
    canvasEl
  }
}
