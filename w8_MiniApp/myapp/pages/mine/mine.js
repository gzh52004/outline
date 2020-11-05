// pages/mine/mine.js
const app = getApp();

console.log('app=',app);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommend:[{
      text:'list',
      imgurl:'',
      link:'/pages/list/list'
    },{
      text:'mine',
      imgurl:'',
      link:'/pages/mine/mine'
    },{
      text:'home',
      imgurl:'',
      link:'/pages/index/index'
    }],
    user:{
      username:'laoxie',
      password:123456
    },
    password:'abc',
    photoSrc:''
  },

  changeUsername(e){
    this.setData({
      'user.username':e.detail.value
    })
  },
  changePassword(e){
    this.setData({
      'user.password':e.detail.value
    })
  },

  login(e){
    const {username} = e.currentTarget.dataset;
    console.log('username=',username);
  },
  goto(e){
    const {url} = e.currentTarget.dataset;
    console.log('url=',url);

    // 跳转
    wx.switchTab({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用于授权信息
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log('用户已授权')
            },
            fail(){
              console.log('用户禁止授权')
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const tabBar = this.getTabBar()
    tabBar.setData({
      current:2
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  login(){

  },
  takePhoto(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          photoSrc: res.tempImagePath
        })

        // 存入相册
        wx.saveImageToPhotosAlbum({
          filePath:res.tempImagePath,
          success(){
            wx.showToast({
              title:'保存到相册成功',
              icon:'none'
            })
          }
        })
      }
    })
  }
})