// pages/huakuai/huakuai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    FnumHeight: 66,
    FnumWidth: 66
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handletouchstart: function (event) {
    console.log(event)
    this.setData({
      startX: event.touches[0].pageX,
      startY: event.touches[0].pageY
    })
    console.log("开始", event.touches[0].pageX, event.touches[0].pageY)
  },
  handletouchmove: function (event) {

    let currentX = event.touches[0].pageX;
    let currentY = event.touches[0].pageY;
    let tx = currentX - this.data.startX;
    let ty = currentY - this.data.startY;
    let text = "";
    //左右方向滑动
    if (Math.abs(tx) <= Math.abs(ty)) {
      if (ty < 0) {
        text = "向上滑动";
      } else if (ty > 0) {
        text = "向下滑动";
      }
    }
    //将当前坐标进行保存以进行下一次计算
    this.setData({
      endX: event.changedTouches[0].pageX,
      endY: event.changedTouches[0].pageY
    });
    var difference = (this.data.endY - this.data.startY) * -1
    var afterHeight = difference + this.data.FnumHeight
    afterHeight > 200 && (afterHeight = 200)
    afterHeight < 0 && (afterHeight = 0)


    this.setData({
      text: text,
      FnumHeight: parseInt(afterHeight),
      startY: event.changedTouches[0].pageY
    });
  },
  handletouchend: function (event) {
    // this.data.endX = event.changedTouches[0].pageX;
    // this.data.endY = event.changedTouches[0].pageY;
    // console.log("end", event.changedTouches[0].pageX, event.changedTouches[0].pageY)

    // var difference = (this.data.endY - this.data.startY) * -1
    // this.setData({
    //   // text: "没有滑动",
    //   FnumHeight: difference + this.data.FnumHeight
    // });
  },
  handletouchstart_x: function (event) {
    console.log(event)
    this.data.startX = event.touches[0].pageX;
    this.data.startY = event.touches[0].pageY;
    console.log("开始", event.touches[0].pageX, event.touches[0].pageY)
  },
  handletouchmove_x: function (event) {
    var setId = event.currentTarget.dataset.setId

    let currentX = event.touches[0].pageX;
    let currentY = event.touches[0].pageY;
    let tx = currentX - this.data.startX;
    let ty = currentY - this.data.startY;
    let text = "";
    //左右方向滑动
    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0) {
        text = "向左滑动";
      } else if (tx > 0) {
        text = "向右滑动";
      }
    }
    this.data.endX = event.changedTouches[0].pageX;
    this.data.endY = event.changedTouches[0].pageY;
    var difference = (this.data.endX - this.data.startX)
    var afterWidth = difference + this.data.FnumWidth
    if (afterWidth > 200) {
      afterWidth = 200
    }
    if (afterWidth < 0) {
      afterWidth = 0
    }

    this.setData({
      text: text,
      FnumWidth: parseInt(afterWidth),
      startX: event.changedTouches[0].pageX
    });
  },

  handletouchend_x: function (event) {
    // this.data.endX = event.changedTouches[0].pageX;
    // this.data.endY = event.changedTouches[0].pageY;
    // console.log("end", event.changedTouches[0].pageX, event.changedTouches[0].pageY)

    // var difference = (this.data.endY - this.data.startY) * -1

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