<template>
  <div class='x'>
    <div v-if="!isOk" class="loading">
      <div class="loading-spinner"></div>
      <div class="loading-text">Loading...</div>
    </div>
    <div class='overWrapper'>
      <div class='innerWrapper'>
        <div class='box1' :style="{ visibility: isOk ? 'visible' : 'hidden' }">
          <div class='fake1' v-if="isShowY">
            <div class='yItem' style="height:50%" v-for="item in yData" :key="item">
              <div>{{ item }}</div>
              <div style="margin-left: 4px;">-</div>
            </div>
          </div>
          <div class='bar1'>
            <div class='xItem'>
            </div>
          </div>
        </div>
        <div class='box2' ref="box2">
          <div class='fake'
            :style="{ width: `${box2Width}px`, borderBottom: isOk ? '1px solid #000' : '0px', borderLeft: isOk ? '1px solid #000' : '0px' }">
            <div class='value' v-for="item in tData" :key="item">
              <div class="vItem" :class="{ 'vItem-animate': item.animate }" :style="{
                height: isOk ? `${item.bit * 100}%` : '0%',
                backgroundColor: item.bgColor,
                transition: 'all 0.3s ease'
              }" @mouseover="handleMouseOver(item.id)" @mouseout="handleMouseOut(item.id)">
                <span class="span">{{ isOk && isShowValue ? item.value : '' }}</span>
              </div>
            </div>
          </div>
          <div v-if="isShowX" class='bar' :style="{ width: `${box2Width}px` }">
            <div class='xItem' v-for="item in data" :key="item">
              <span>{{ isOk ? item.xName : '' }}</span>
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
  name: 'colinBar',
  props: {
    data: {
      type: Array,
      default: () => [
        { id: 1, xName: '周一', value: 120 },
        { id: 2, xName: '周二', value: 60 },
        { id: 3, xName: '周三', value: 20 },
        { id: 4, xName: '周四', value: 70 },
        { id: 5, xName: '周五', value: 10 },
        { id: 6, xName: '周一', value: 120 },
        { id: 7, xName: '周二', value: 60 },
        { id: 8, xName: '周三', value: 20 },
        { id: 9, xName: '周四', value: 70 },
        { id: 10, xName: '周五', value: 10 },
        { id: 11, xName: '周一', value: 120 },
        { id: 12, xName: '周二', value: 60 },
        { id: 13, xName: '周三', value: 20 },
        { id: 14, xName: '周四', value: 70 },
        { id: 15, xName: '周五', value: 10 },
      ],
    },
    isShowY: {
      type: Boolean,
      default: true // 设置默认值为false
    },
    isShowX: {
      type: Boolean,
      default: true
    },
    isShowValue: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: '#5871c0'
    }
  },
  data() {
    return {
      box2Width: null,
      yData: [],
      isOk: false,
      tData: []
    }
  },
  methods: {
    handleMouseOver(id) {
      const x = this.tData.find(item => {
        return item.id === id
      })
      const y = this.lightenColor(this.bgColor, 10)
      x.bgColor = y
    },
    handleMouseOut(id) {
      const x = this.tData.find(item => {
        return item.id === id
      })
      x.bgColor = this.bgColor
    },
    handleData(data) {
      const values = Array.from(new Set(data.map(item => item.value))).sort((a, b) => b - a);
      const max = values.shift();
      this.yData = [Math.floor(max / 2), Math.floor(max)].reverse();
    },
    handleX(data) {
      const maxItem = data.reduce((max, item) => (item.value > max.value ? item : max));
      const maxBit = maxItem.value;
      const result = data.map(item => ({
        ...item,
        bit: Number((item.value / maxBit).toFixed(2)) // 计算比例
      }));
      // 设置具有最大值的项的比例为 1
      this.tData = result.map(item => ({
        ...item,
        bit: item === maxItem ? 1 : item.bit
      }));
    },
    handleBgColor(data) {
      data.map(item => {
        item.bgColor = this.bgColor
      })
    },
    lightenColor(color, amount) {
      // 判断颜色值是否为缩写形式，若是则转换为完整的6位颜色值
      if (color.length === 4) {
        color = color.replace(/^#(.)(.)(.)$/, "#$1$1$2$2$3$3");
      }

      // 移除颜色值的井号 #
      color = color.replace("#", "");

      // 将颜色值转换为RGB格式
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);

      // 计算亮度增量
      const increment = Math.round(2.55 * amount);

      // 增加RGB各分量的值
      const newR = Math.min(255, r + increment);
      const newG = Math.min(255, g + increment);
      const newB = Math.min(255, b + increment);

      // 将新的RGB值转换为十六进制颜色表示
      const newColor = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;

      return newColor;
    },
  },
  async mounted() {
    this.handleData(this.data)
    this.handleBgColor(this.data)
    await this.handleX(this.data)
    this.box2Width = this.$refs.box2.scrollWidth;
    // 在页面加载后添加动画类，通过 setTimeout 模拟延迟效果
    setTimeout(() => {
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

.yItem {
  height: 20%;
  width: 100%;
  font-size: 0.6rem;
  display: flex;
  justify-content: flex-end;
}

.yItem:nth-child(2) {
  margin-bottom: 0.5rem;
}

.fake1 {
  position: absolute;
  top: calc(30% - 1.5rem);
  left: 0;
  right: 0;
  bottom: 1rem;
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;
}

.bar1 {
  width: 100%;
  box-sizing: border-box;
  display: flex;
}

.box1 {
  box-sizing: border-box;
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
}

.box3 {
  width: 2%;
}

.xItem {
  width: 20%;
  text-align: center;
  font-size: 0.5rem;
}

.box2 {
  /* flex: 1; */
  width: 90%;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
}

.box2::-webkit-scrollbar {
  width: 0em;
  height: 0;
  background: transparent;
}

.box2::-webkit-scrollbar-track {
  background-color: transparent;
}

.fake {
  flex: 1;
  padding-top: 30%;
  display: flex;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  position: relative;
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
  min-width: 2rem;
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
  user-select: none;
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