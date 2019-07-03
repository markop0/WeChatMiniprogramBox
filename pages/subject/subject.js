// pages/subject/subject.js
var app = getApp();//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectA:[
      { color: '#808080', name: '默认白' },
      { color: '#0f9d58', name: '原谅绿' },
      { color: '#db4437', name: '网易红' },
      { color: '#fb7299', name: '哔哩粉' },
      { color: '#ff9800', name: '伊藤橙' },
      { color: '#009688', name: '水鸭青' },
      { color: '#2196f3', name: '知乎蓝' }, 
      { color: '#673ab7', name: '深邃紫' },

    
    ],
    nowColor:''

  },
  setSubject: function (e) {
    const color = e.currentTarget.dataset.color
    wx.setStorage({
      key: "subject",
      data: color
    })
    app.setSubject();
    this.setData({
      nowColor: e.currentTarget.dataset.color
    })
    console.log('step1')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.setSubject();
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