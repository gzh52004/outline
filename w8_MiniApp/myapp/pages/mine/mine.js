// pages/mine/mine.js
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
    password:'abc'
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

  }
})