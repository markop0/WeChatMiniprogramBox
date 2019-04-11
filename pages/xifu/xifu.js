// pages/xifu/xifu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  //监听屏幕滚动 
  onPageScroll: function(ev) {
    var that = this;
    var a = ev.scrollTop; //存储滚动高度
    if ( a < 100) {
      that.setData({
        menuFixed: false,
        menuFixed1: false,
        menuFixed2: false,
      })
    }
    if (a >= 100 && a < 250) {
      that.setData({
        menuFixed: true,
        menuFixed1: false,
        menuFixed2: false,
      })
    }
    if (a >= 250 && a < 400) {
      that.setData({
        menuFixed: false,
        menuFixed1: true,
        menuFixed2: false,
      })
    }
    if (a >= 400) {
      that.setData({
        menuFixed: false,
        menuFixed1: false,
        menuFixed2: true,
      })
    }
    //给scrollTop重新赋值
    setTimeout(function() {
      that.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})