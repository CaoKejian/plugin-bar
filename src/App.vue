<template>
  <div class="wrapper">
    <colinBar :isShowY="true" :isShowX="true" :isShowValue="true" bgColor="#666666"></colinBar>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      data:[
        { id: 1, xName: '周一', value: 120 },
        { id: 2, xName: '周二', value: 60 },
        { id: 3, xName: '周三', value: 20 },
        { id: 4, xName: '周四', value: 70 },
        { id: 5, xName: '周五', value: 10 },
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
