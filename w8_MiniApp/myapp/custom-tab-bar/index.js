// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list":[{
      "pagePath":"pages/index/index",
      "text":"首页",
      "iconPath":"/img/home.png",
      "selectedIconPath":"/img/home_active.png"
    },{
      "pagePath":"pages/list/list",
      "text":"列表",
      "iconPath":"/img/list.png",
      "selectedIconPath":"/img/list_active.png"
    },{
      "pagePath":"pages/mine/mine",
      "text":"我的",
      "iconPath":"/img/mine.png",
      "selectedIconPath":"/img/mine_active.png",
      dot:true
    }],
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e){
      console.log(e)
      const {index,item} = e.detail;
      wx.switchTab({
        url: '/'+item.pagePath,
      })

      this.setData({
        current:index
      })
    }
  },
  // pageLifetimes:{
  //   show:function(){
  //     console.log(666,this)
  //     this.setData({
  //       current:2
  //     })
  //   }
  // }
})
