// pages/banner/banner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',  
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',        
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    swiperList: [{//除了1，2之外，其它的swpClass都是swp-rightNo
      aurl: "../start/start",
      swpClass: "swp-center",
      // time: "2018年3月下11",
      // bname: "2018全球十大突破技术11",
      imgsrc: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
    }, {
      aurl: "#",
      swpClass: "swp-right",
      // time: "2018年3月下22",
      // bname: "2018全球十大突破技术22",
        imgsrc: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    }, {
        aurl: "#",
        swpClass: "swp-right",
        // time: "2018年3月下22",
        // bname: "2018全球十大突破技术22",
        imgsrc: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    }, {
      aurl: "#",
      swpClass: "swp-rightNo",
      // time: "2018年3月下33",
      // bname: "2018全球十大突破技术33",
        imgsrc: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
    }],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  swpBtn: function (e) {
    var swp = this.data.swiperList;
    var max = swp.length;
    var idx = e.currentTarget.dataset.index;
    var prev = swp[idx - 1];//前一个
    var next = swp[idx + 1];//后一个
    var curView = swp[idx];//当前
    if (curView.swpClass === 'swp-center') {//如果当前是在中间的，即可跳转
      wx.navigateTo({
        url: curView.aurl,
      })
    }

    if (prev) {//如果当前的前面有
      if (next) {//当前的后面有
        next.swpClass = "swp-right";
      }
      prev.swpClass = "swp-left";
      curView.swpClass = "swp-center";
      for (var i = 0; i < idx; i++) { //当前前一个的前面所有
        swp[i].swpClass = 'swp-leftNo'
      }
    }
    if (next) {//如果当前的后面有
      if (prev) {//当前的前面有
        prev.swpClass = "swp-left";
      }
      curView.swpClass = "swp-center";
      next.swpClass = "swp-right";
      for (var i = (idx + 2); i < max; i++) {//当前后一个的后面所有
        swp[i].swpClass = 'swp-rightNo'
      }
    } else {
      prev.swpClass = "swp-left";
      curView.swpClass = "swp-center";
    }

    this.setData({
      swiperList: swp
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