// pages/class/class.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classData:{},
    studentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log('options=',options);
    const {classid} = options

    // 获取班级信息
    const {data:classData} = await app.request('/class/'+classid);

    // 获取当前班级学生信息
    const {data:studentList} = await app.request('/user',{
      //class_id:classid
    });


    console.log('classData=',classData);
    console.log('studentList=',studentList);
    this.setData({
      classData,
      studentList:studentList.result
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