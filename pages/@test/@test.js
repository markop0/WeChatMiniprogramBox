Page({
  data: {
    animationData: {},
    currentSelectTripType: '',
    scrollTop: 0,
    list: ["我的"],
    currentTab: 0,
    fixTop: '',//区域离顶部的高度
    upx:0,
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050
  },
  //绘制
  onReady: function () {
    this.meimg = wx.createAnimation()
    this.meid = wx.createAnimation()
  },
  changeDateTime1(e) {
    this.setData({ dateTime1: e.detail.value });
  },
  // onShow: function () {
  //   let self = this;
  //   wx.createSelectorQuery().select('.static-news').boundingClientRect(function (rect) {
  //     self.setData({
  //       fixTop: rect.top,
  //     })
  //   }).exec()
  // },
  // onPageScroll: function (e) {
  //   var that = this
  //   that.setData({
  //     scrollTop: e.scrollTop
  //   })
  // },
//头像变换
  //监听屏幕滚动 判断上下滚动
  onPageScroll: function (ev) {
    var v = 60;
    var _this = this;
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    var a = ev.scrollTop;//存储滚动高度
    if (a > v) {
      // title.style.position = 'fixed';
      // title.style.top = 0;
      _this.setData({
        upx: 1
      })
    } else {
      // title.style.position = 'static';
      _this.setData({
        upx: 0
      })
    }

    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      //向下滚动
      //console.log("ok500")
      this.meimg.scale(0.6).step()
      this.meimg.translate(-250,-85).step()
      this.meid.translate(-100, -100).step()
      this.setData({ 
        meimg: this.meimg.export() ,
        meid: this.meid.export()
      })
      
    } else {
      //向上滚动
      console.log("ok500")
      this.meimg.scale(1).step()
      this.meimg.translate(0, 0).step()
      this.meid.translate(0, 0).step()
      this.setData({ 
        meimg: this.meimg.export() ,
        meid: this.meid.export()
      })

    }
    //给scrollTop重新赋值
    setTimeout(function () {
      _this.setData({
        scrollTop: ev.scrollTop
      })
    }, 0)
  },
  reset: function () {
    this.meimg.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({ duration: 0 })
    this.setData({ meimg: this.meimg.export() })
  },
  //提交自评分数
  subMytest: function (e) {
    wx.navigateTo({
      url: '../share/share?id='
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
onLoad: function (options) {
    var that = this
    // var Id = wx.getStorageSync('UserId').toString()
    // var ip = getApp().globalData.ip

    // wx.request({
    //   url: "https://" + ip + "/webapi/Users/Keep_Plan_Value",
    //   method: "post",
    //   data: {
    //     Uid: Id
    //   },
    //   success: function (obj) {

    //       that.setData({
    //         userName: obj.data.NickName,
    //         imgurl: obj.data.SHS_5,
    //       })

    //   }
    // })


  },
})


