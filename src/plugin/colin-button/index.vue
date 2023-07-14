<template>
  <div class='x'>
    <div v-if="!isOk" class="loading">
      <div class="loading-spinner"></div>
      <div class="loading-text">Loading...</div>
    </div>
    <div class='overWrapper'>

      <div class='innerWrapper'>
        <div class='box1' :style="{ visibility: isOk ? 'visible' : 'hidden' }">
          <div class="yItem" v-for="item in data" :key="item">
            <div>{{ item.yName }}</div>
            <div style="margin-left: 4px;">-</div>
          </div>
        </div>
        <div class='box2' ref="box2">
          <div class='fake'>
            <div class='value' v-for="item in data" :key="item">
              <div class="vItem" :class="{ 'vItem-animate': item.animate }" :style="{
                'height': isOk ? `${item.value}%` : '0%',
              }">
                <span class="span">{{isOk? item.value : ''}}</span>
              </div>
            </div>
          </div>
          <div class='bar' :style="{width:`${box2Width}px`}">
            <div class='xItem' v-for="item in data" :key="item">
              {{ item.xName }}
            </div>
          </div>
        </div>
        <div class='box3'></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'colinButton',
    props: ['data'],
    data() {
      return {
        box2Width: null,
        isOk: false
      }
    },
    methods: {
    },
    mounted() {
      this.box2Width = this.$refs.box2.scrollWidth;
      // 在页面加载后添加动画类，通过 setTimeout 模拟延迟效果
      setTimeout(() => {
        console.log(this.data);
        this.data.forEach((item, index) => {
          setTimeout(() => {
            item.animate = true;
          }, index * 100); // 逐个元素延迟添加动画类
        });
      }, 500); // 延迟 500 毫秒后开始添加动画类
      setTimeout(() => {
        this.isOk = true
      }, 500)
    }
  }
</script>
<style scoped>

 
  .vItem-animate {
    max-height: 100%;
  }

  .x {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: #f1f2f7;
    box-shadow: 0 0 8px #f1f2f7;
    font-size: 32px;
    background: red;
    position: relative;
  }

  .overWrapper {
    width: 100%;
    height: 100%;
  }

  .innerWrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    background: #fff;
  }

  .box1,
  .box3 {
    height: 100%;
    width: 10%;
    box-sizing: border-box;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .box3 {
    width: 2%;
  }

  .yItem {
    height: 20%;
    width: 100%;
    font-size: 0.6rem;
    display: flex;
    justify-content: flex-end;
  }

  .xItem {
    width: 20%;
    text-align: center;
    font-size: 0.5rem;

  }

  .box2 {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .fake {
    flex: 1;
    display: flex;
    overflow-x: scroll;
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  .value {
    width: 100%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 0 0.5rem;
    background-clip: content-box;
    align-items: flex-end;
    display: flex;
  }

  .vItem {
    width: 100%;
    font-size: 0.5rem;
    background: #5871c0;
    border-top-left-radius: 0.6em;
    border-top-right-radius: 0.6em;
    transition: background .3s ease;
    transition: height 0.5s ease;
    cursor: pointer;
  }

  .vItem:hover {
    background: #617cd3;
  }

  .span {
    position: relative;
    top: -1rem;
  }

  .bar {
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }
</style>

<style>

.loading {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: #5c72ba;
    animation: spin 1s infinite linear;
    margin-bottom: 10px;
  }

  .loading-text {
    font-size: 18px;
    color: #555;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

</style>