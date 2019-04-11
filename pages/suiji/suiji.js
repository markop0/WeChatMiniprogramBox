// pages/suiji/suiji.js
var humanArr = []
//计数器
var interval = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    humanArr: [],
    nowNum: '999'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  start: function() {
    var sumNum = humanArr.length - 1
    var xxx = Math.random() * sumNum
    var randomNUm = Math.round(Math.random() * sumNum + 1)
    console.log(randomNUm)
    var that = this
    clearInterval(interval);
    var index = 0;
    let cycle = 1;
    //循环每一项
    interval = setInterval(function() {
      if (index <= sumNum && cycle<=2) {
        that.setData({
          nowNum: index
        })
        console.log('预备转' + index)
      } else if (index > sumNum && cycle <= 2){
        index = -1
        ++cycle
      }
      index++;
    }, 50);
    setTimeout(function() {
      that.stop(randomNUm); //最后选中位置
    }, 100 * 2 * sumNum)
  },
  stop: function(event) {
    var that = this
    var index = 0;
    // setTimeout(function () {
    interval = setInterval(function() {
      if (index <= event) {
        that.setData({
          nowNum: index
        })
        console.log('结束转' + index)
      }
      index++;
    }, 50);
  },
  touchstartFn: function(event) {
    // console.log(event);
    var CX = event.changedTouches[0].clientX - 40
    var CY = event.changedTouches[0].clientY - 40
    var yy = [{
      clientX: CY,
      clientY: CX
    }]

    humanArr = humanArr.concat(yy)
    // console.log(humanArr)
    this.setData({
      humanArr: humanArr
    })

  },
  touchmoveFn: function(event) {
    // console.log(event);
    // // console.log(this);
    // var CX = event.changedTouches[0].clientX - 40
    // var CY = event.changedTouches[0].clientY - 40
    // var yy = [{ clientX: CY, clientY: CX }]

    // humanArr = yy
    // this.setData({
    //   humanArr: humanArr
    // })
    // console.log("move: PageX:"+ event.changedTouches[0].pageX);
  },
  touchendFn: function(event) {
    // console.log(event);
    // var that = this
    // var CX = event.changedTouches[0].clientX - 40
    // var CY = event.changedTouches[0].clientY - 40
    // var yy = [{ clientX: CY, clientY: CX }]
    // var humanArr =this.data.humanArr
    // for (var i in humanArr){
    //   // console.log(yy[0]);
    //   // console.log(humanArr[i]);
    //   if (yy[0] == humanArr[i]){
    //     humanArr = humanArr.splice(i,1)
    //     console.log('******');
    //     this.setData({
    //       humanArr: humanArr
    //     })
    //   }
    // }

    // console.log("move: PageX:"+ event.changedTouches[0].pageX);
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
    humanArr = [];
    this.setData({
      nowNum: '999'
    })
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