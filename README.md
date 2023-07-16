# 一款自定义的柱状图插件

## vue3插件

## 使用方法
   安装依赖 `npm install` <br /> 
   启动服务 `npm run dev/npm dev` <br />

## 数据格式
   `xName`:横坐标 <br />
   `value`: 值 <br />
   data: [<br />
        { id: 1, xName: '周一',  value: 120 },<br />
        { id: 2, xName: '周二',  value: 60 }<br />
        ...<br />
   ]<br />

## 使用方式
   ### 在`main.js`文件中 <br />
   `import colinUI from './plugin/index'` <br />
   `reateApp(App).use(colinUI).mount('#app')` <br />
   ### 在组件中使用 <br />
   `<colinBar :data="data"></colinBar>`

   ### 配置项
   `data`         Array    数据 格式参考 👆🏻方数据格式  
   `isShowY`      boolean  是否显示纵坐标值  
   `isShowX`      boolean  是否显示横坐标值  
   `isShowValue`  boolean  是否显示每一项的值  

## 注意
   (1)后续还会有新功能的加入  -> 敬请期待...


