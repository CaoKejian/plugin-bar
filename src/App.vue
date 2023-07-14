<template>
  <div class="wrapper">
    <colinButton :data="data"></colinButton>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      data: [
        { id: 1, xName: '周一', yName: 0, value: 110 },
        { id: 2, xName: '周二', yName: 80, value: 50 },
        { id: 3, xName: '周三', yName: 60, value: 20 },
        { id: 4, xName: '周四', yName: 40, value: 70 },
        { id: 5, xName: '周五', yName: 20, value: 10 },
        { id: 1, xName: '周一', yName: 110, value: 30 },
        { id: 2, xName: '周二', yName: 80, value: 50 },
        { id: 3, xName: '周三', yName: 160, value: 20 },
        { id: 4, xName: '周四', yName: 40, value: 70 },
        { id: 5, xName: '周五', yName: 20, value: 10 },
        { id: 1, xName: '周一', yName: 10, value: 30 },
        { id: 1, xName: '周一', yName: 0, value: 0 },
        { id: 2, xName: '周二', yName: 80, value: 50 },
        { id: 3, xName: '周三', yName: 60, value: 20 },
        { id: 4, xName: '周四', yName: 40, value: 70 },
        { id: 5, xName: '周五', yName: 20, value: 10 },
        { id: 1, xName: '周一', yName: 110, value: 30 },
        { id: 2, xName: '周二', yName: 80, value: 50 },
        { id: 1, xName: '周一', yName: 0, value: 0 },
        { id: 2, xName: '周二', yName: 80, value: 50 },
        { id: 3, xName: '周三', yName: 60, value: 20 },
        { id: 4, xName: '周四', yName: 40, value: 70 },
        { id: 5, xName: '周五', yName: 20, value: 10 },
        { id: 1, xName: '周一', yName: 110, value: 30 },
        { id: 2, xName: '周二', yName: 80, value: 50 },
      ]
    }
  }
}
</script>

<style>
.wrapper {
  width: 600px;
  height: 600px;
}
</style>
