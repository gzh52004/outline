//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classList:[]
   
  },
  
  onLoad: function () {
    console.log('onLoad');
    
    // 请求班级数据
    wx.request({
      url:'http://120.76.247.5:2020/api/class',
      success:(res)=>{
        const {data:{data}} = res;
        console.log('res=',data.result);

        this.setData({
          classList:data.result
        })
      }
    })
  },
  onReady(){
    console.log('onReady')
  },
  onShow(){
    console.log('onShow')
  },
  onHide(){
    console.log('onHide')
  },
  gotoClass(e){
    const {classid} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/class/class?classid='+classid,
    })
  }
})
