<template>
  <div class="panel">
    <h2>{{ basefig.name }}</h2>
    <MyECharts
      class="chart"
      :loading="basefig.loading"
      :options="basefig.options"
      :dataEmptyFlag="basefig.dataEmptyFlag"
    ></MyECharts>
    <div class="panel-footer"></div>
  </div>
</template>

<script setup>
  const props = defineProps({
    basefig: ''
  })
</script>

<style lang="scss" scoped>
  .panel {
    position: relative;
    height: 20rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    box-sizing: border-box;
    padding: 0.625rem;
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      width: 10px;
      height: 10px;
      border-top: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
    .chart {
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .panel-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      &:before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-left: 2px solid #02a6b5;
      }
      &:after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: '';
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #02a6b5;
        border-right: 2px solid #02a6b5;
      }
    }

    h2 {
      height: 1.625rem;
      line-height: 1.625rem;
      text-align: center;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0;
    }
  }
</style>
