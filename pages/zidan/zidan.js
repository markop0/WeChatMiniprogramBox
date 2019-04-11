// pages/zidan/zidan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    move_o: 0,
    s_move: true,
    statusArr: [false, false, false]//假设有三个，这个可根据返回的数据个数进行赋值       
  },

  show_move: function() {
    let s_move = this.data.s_move;
    this.setData({
      s_move: !s_move,
      move_o: 1
    })
  },
  //事件处理函数
  bindViewTap: function (e) {
    var that = this;
    var idx = e.target.dataset.index;

    var updateStatusArr = that.data.statusArr.slice(0); //复制新数组

    updateStatusArr[idx] = !that.data.statusArr[idx];

    that.setData({
      'statusArr': updateStatusArr
    });
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