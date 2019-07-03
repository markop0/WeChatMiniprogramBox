// pages/xxx/xxx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xxx: 0,
    backIcon: "/../img/back.png",
    homeIcon: "/../img/home.png",
    background: '#90c7ff',
    color: 'rgba(0, 0, 0, 1)',
    titleText:'导航栏',
    titleImg: '',
    fontSize: 16,
    iconHeight: 19,
    iconWidth: 58,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var arr = [1, 2, 3, 5, 6, 8, 11, 12, 13] //[[1,2,3],[5,6],[8],[11]]
    var b = ''
    var a = ''
    var add = 0
    for (let i in arr) {
      var min = arr[0]
      if (i == 0) {
        b += '[' + arr[i]
        add = arr[i]
      } else if (arr[i] == add) {
        b += ',' + arr[i]
      } else {
        a += b + ']'
        b = ''
        var newA = ''
        newA += arr[i]
        add = arr[i]
        a += ',[' + newA
      }
      if (i == arr.length - 1) {
        a += b + ']]'
      }
      ++add
    }
    console.log(a)
    // ******************************************

    this.attached()
  },
  tap: function() {

  },
  open: function() {
    wx: wx.showToast({
      title: 'aaaaaaaaaaaaaaaaaa',
      icon: 'none',
      duration: 4000,
    })
  },
  attached: function() {
    var that = this;
    that.setNavSize();
    that.setStyle();
  },
  // 通过获取系统信息计算导航栏高度        
  setNavSize: function() {
    var that = this,
      sysinfo = wx.getSystemInfoSync(),
      statusHeight = sysinfo.statusBarHeight,
      isiOS = sysinfo.system.indexOf('iOS') > -1,
      navHeight;
    if (!isiOS) {
      navHeight = 48;
    } else {
      navHeight = 44;
    }
    that.setData({
      status: statusHeight,
      navHeight: navHeight
    })
  },
  setStyle: function() {
    var that = this,
      containerStyle, textStyle, iconStyle;
    containerStyle = [
      'background:' + that.data.background
    ].join(';');
    textStyle = [
      'color:' + that.data.color,
      'font-size:' + that.data.fontSize + 'px'
    ].join(';');
    iconStyle = [
      'width: ' + that.data.iconWidth + 'px',
      'height: ' + that.data.iconHeight + 'px'
    ].join(';');
    that.setData({
      containerStyle: containerStyle,
      textStyle: textStyle,
      iconStyle: iconStyle
    })
  },
  // 返回事件        
  back: function() {
    wx.navigateBack({
      delta: 1
    })
    this.triggerEvent('back', {
      back: 1
    })
  },
  home: function() {
    this.triggerEvent('home', {});
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