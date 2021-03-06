import request from '../../utils/request';
console.log('request',request);

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    size:10,
    total:-1,
    classList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getData();
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
      current:1
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
    const {page,total,classList} = this.data;
    if(classList.length<total){

      this.setData({
        page:page+1
      },()=>{
        this.getData();
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  async getData(){
    const {page,size,classList} = this.data;
    // const {data} = await app.request('/class',{
    //   page,
    //   size
    // })

    const {data} = await request.get('/class',{
      page,
      size
    })

    this.setData({
      classList:[...classList,...data.result],
      total:data.total
    })
  },
  test(){
    return 'test100';
  }
})