//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    arr: [
      { id: 'animation', name: '动画'},
      { id: 'guodong', name: '果冻菜单' }, 
      { id: 'login', name: '登入' }, 
      { id: 'Me', name: '个人中心' }, 
      { id: 'infoFlow', name: '信息流' }, 
      { id: 'leftMenu', name: '侧边抽屉菜单' },
      { id: 'article', name: '商品详情页' },
      { id: 'playbox', name: '播放器' },
      { id: 'banner', name: 'banner' },
      { id: 'faweibo', name: '发布动态' },
      { id: 'xifu', name: '贴顶吸附' },
      { id: 'zidan', name: '子弹条' },
      { id: 'huakuai', name: '滑块开关' },
      { id: 'cardSwitch', name: 'cardSwitch' },
      { id: 'xxx', name: '自定义导航栏' },
      { id: 'lucky', name: '九宫格抽奖' },
      { id: 'suiji', name: '谁来喝' },
      { id: 'subject', name: '主题' },
      { id: 'calendar', name: '日历' },
      { id: 'sort', name: '拖拽' },
      { id: 'recorder', name: '录音' },
    ],
    testMode:[
      { id: 'text', name: '测试' },
      { id: 'livePlayer', name: '直播' },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    app.setSubject();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  ccc: function (e) {
    var that =this;
    wx: wx.navigateTo({
      url: '../' + e.target.id + '/' + e.target.id +'',
    })
  }
})
