
const commonBehavior = require('../../behaviors/commons')

Component({
  /**
   * 组件的属性列表
   */
  properties: {// 类似于vue中的props
    current:{
      type:String,
      value:'laoxie'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {// 与Vue一致（但Vue中是一个函数）
    name:'list',
    datalist:['laoxie','linejie','bobo']
  },

  /**
   * 组件的方法列表
   */
  methods: { // 与Vue一致，用于定义方法/事件处理函数

  },

  observers:{ // 与Vue的watch一致

  },

  behaviors:[commonBehavior], // 与Vue的mixin一致

  lifetimes:{ // 生命周期函数对象，内部编写各种生命周期函数
    created(){
      console.log('list.created',this.data)
    },
    attached: function () {console.log('list.attached',this) },
    moved: function () { console.log('list.moved')},
    detached: function () {console.log('list.detached') },
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      console.log('page.show')
    },
    hide: function () {console.log('page.hide') },
    resize: function () { console.log('page.resize')},
  },
})
