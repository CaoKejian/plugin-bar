# 一款自定义的柱状图插件

## vue3 插件

## 使用方法

安装依赖 `npm install`   
启动服务 `npm run dev/npm dev`   

## 数据格式

`xName`:横坐标  
`value`: 值  
data: [  
  { id: 1, xName: '周一', value: 120 },  
  { id: 2, xName: '周二', value: 60 }  
...  
]  

## 使用方式

### 在`main.js`文件中  

`import colinUI from './plugin/index'`  
`reateApp(App).use(colinUI).mount('#app')`  

### 在组件中使用  

`<colinBar :data="data"></colinBar>`

| 配置项        | 类型    | 描述                           | 注意                            |
| ------------- | ------- | --------------------------- | ---------------------------|
| `data`        | Array   | 数据 格式参考 👆🏻 方数据格式 |   |
| `isShowY`     | boolean | 是否显示纵坐标值            |   |
| `isShowX`     | boolean | 是否显示横坐标值            |   |
| `isShowValue` | boolean | 是否显示每一项的值          |   |
| `bgColor`     | String/16进制 | 是否显示每一项的值          | 若使用16进制，不使用v-bind，直接采用 `bgColor='#000'`的形式  |

## 注意

(1)后续还会有新功能的加入 -> 敬请期待...
