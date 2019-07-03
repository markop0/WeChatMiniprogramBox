var app = getApp();
Page({
  data: {
    leadMask:true,
    isShowTips:true,
    // dateValue: '请完成选择时间',
    dayvalue: 0,
    dayvalue1: 0,
    monthvalue: 0,
    canlender: {
      'month': new Date().getMonth() + 1,
      'date': new Date().getDate(),
      "day": new Date().getDay(),
      'year': new Date().getFullYear(),
      "weeks": []
    },
    canlender2: {
      'month': new Date().getMonth() + 2,
      'date': new Date().getDate(),
      'year': new Date().getFullYear(),
      "weeks": []
    },
    dateEvent: [],
  },
  datePickerBindchange: function(e) {
    this.setData({
      dateValue: e.detail.value,
      // EndDateValue: e.detail.value
    })
  },
  onLoad: function() {
    try {
      const value = wx.getStorageSync('shoucang')
      if (value) {
        this.setData({
          leadMask: false
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    var that = this
    if (new Date().getMonth() + 2 == 13) {
      that.setData({
        canlender2: {
          'month': 1,
        },
      })
    }
    var ip = getApp().globalData.ip
    var Id = wx.getStorageSync('UserId').toString()

    wx.request({
      url: "https://" + ip + "/webapi/Users/ListRestrictKeep",
      method: "post",
      data: {
        Uid: Id
      },
      success: function(obj) {
        for (var i in obj.data) {
          // obj.data[i].push("Day")
          var dateList = obj.data[i].SHS_3.split("T")
          var MD = dateList[0].split("-")
          if (MD[2] < 10) {
            var aday = MD[2].split("")
            MD[2] = aday[1]
          }
          obj.data[i].SHS_3 = MD[1]
          obj.data[i].numb = MD[2]

        }
        that.setData({
          dateEvent: obj.data
        })
      }
    })


    var canlender = [];
    var _date = new Date()
    var year = _date.getFullYear() //年
    var month = _date.getMonth() + 1 //月
    var date = _date.getDate() //日

    // console.info(year + "-" + month + "-" + date)
    var day = _date.getDay()

    var firstDay = new Date(year, month - 1, 1).getDay();
    // console.warn('first day of this month :' + firstDay)

    var lastMonthDays = [];
    for (var i = firstDay - 1; i >= 1; i--) {
      // console.warn(new Date(year, month - 1, -i).getDate())
      lastMonthDays.push({
        'date': new Date(year, month - 1, -i + 1).getDate() + '',
        'month': month - 1
      })
    }
    var currentMonthDys = [];
    for (var i = 1; i <= new Date(year, month, 0).getDate(); i++) {
      currentMonthDys.push({
        'date': i + "",
        'month': month
      })


    }
    var nextMonthDays = []
    var endDay = new Date(year, month, -1).getDay();
    // console.log('end day:' + endDay)
    for (var i = 1; i < 7 - endDay; i++) {
      nextMonthDays.push({
        'date': i + '',
        'month': month + 1
      })
    }

    canlender = canlender.concat(lastMonthDays, currentMonthDys, nextMonthDays)
    var weeks = []

    for (var i = 0; i < canlender.length; i++) {
      if (i % 7 == 0) {
        weeks[parseInt(i / 7)] = new Array(7);
      }
      weeks[parseInt(i / 7)][i % 7] = canlender[i]
    }

    // console.info(weeks)
    this.setData({
      "canlender.weeks": weeks
    })
    // -------------------------------------------------------------------------------------
    var canlender2 = [];
    var month2 = _date.getMonth() + 2 //月

    // console.info(year + "-" + month2 + "-" + date)
    var day = _date.getDay()

    var firstDay = new Date(year, month2 - 1, 1).getDay();
    // console.warn('first day of this month :' + firstDay)

    var lastMonthDays = [];
    for (var i = firstDay - 1; i >= 1; i--) {

      lastMonthDays.push({
        'date': new Date(year, month2 - 1, -i + 1).getDate() + '',
        'month': month2 - 1
      })
    }
    var currentMonthDys = [];

    for (var i = 1; i <= new Date(year, month2, 0).getDate(); i++) {
      if (month2 == 13) {
        currentMonthDys.push({
          'date': i + "",
          'month': 1
        })
        that.setData({
          canlender2: {
            'year': new Date().getFullYear()+1,
            'month': 1
          },
        })
      } else {
        currentMonthDys.push({
          'date': i + "",
          'month': month2
        })
      }

    }
    var nextMonthDays = []
    var endDay = new Date(year, month2, -1).getDay();
    // console.log('end day:' + endDay)
    for (var i = 1; i < 7 - endDay; i++) {
      if (month2>12){
        nextMonthDays.push({
          'date': i + '',
          'month': month2 + 1 - 12
        })
      }else {
        nextMonthDays.push({
          'date': i + '',
          'month': month2 + 1
        })
      }
    }

    canlender2 = canlender2.concat(lastMonthDays, currentMonthDys, nextMonthDays)
    var weeks = []

    for (var i = 0; i < canlender2.length; i++) {
      if (i % 7 == 0) {
        weeks[parseInt(i / 7)] = new Array(7);
      }
      weeks[parseInt(i / 7)][i % 7] = canlender2[i]
    }

    that.setData({
      "canlender2.weeks": weeks
    })
  },
  bindTap1: function(e) {
    wx: wx.vibrateShort({});//设备震动
    var yuefeng = e.currentTarget.dataset.month
    if (this.data.canlender.month !== yuefeng) {
      return;
    }
    var day = e.currentTarget.dataset.day;
    var month = e.currentTarget.dataset.month;
    var _date = new Date()
    var year = _date.getFullYear() //年
    var month1 = _date.getMonth() + 1
    if (month < month1) {
      return;
    }
    var timeout = year + "-" + month + "-" + day
    var pages = getCurrentPages();
    app.aldstat.sendEvent('日历事件查看', {'月份': '本月'}); //阿拉丁统计埋点
    wx.navigateTo({
      url: '../now/now?' + '&Ttimeout=' + timeout + '&Dday=' + day + '&Mmonth=' + month,
    })

  },
  bindTap2: function(e) {
    wx: wx.vibrateShort({});//设备震动
    var yuefeng = e.currentTarget.dataset.month
    if (this.data.canlender2.month !== yuefeng) {
      return;
    }
    var day = e.currentTarget.dataset.day;
    var month = e.currentTarget.dataset.month;
    var _date = new Date()
    var year = _date.getFullYear() //年
    var month1 = _date.getMonth() + 2
    if (month1==13){
      month1 = 1,
      ++year
    }
    if (month < month1) {
      return;
    }
    var timeout = year + "-" + month + "-" + day
    var pages = getCurrentPages();
    app.aldstat.sendEvent('日历事件查看', {'月份': '次月'}); //阿拉丁统计埋点
    wx.navigateTo({
      url: '../now/now?' + '&Ttimeout=' + timeout + '&Dday=' + day + '&Mmonth=' + month,
    })
  },
  toTomorrow: function(e) {
    
    // var yuefeng = e.currentTarget.dataset.month
    // if (this.data.canlender.month !== yuefeng) {
    //   return;
    // }
    var day = e.currentTarget.dataset.day;
    var month = e.currentTarget.dataset.month;
    var _date = new Date()
    var year = _date.getFullYear() //年
    var month1 = _date.getMonth()+1
    if (month == 1 && month < month1) {
      month = 1,
        ++year
    }
    var timeout = year + "-" + month + "-" + day
    var pages = getCurrentPages();
    app.aldstat.sendEvent('日历长按查看列表', { '事件列表': '1' });//阿拉丁统计埋点
    wx.navigateTo({
      url: '../tomorrow/tomorrow?' + '&Ttimeout=' + timeout + '&Dday=' + day + '&Mmonth=' + month,
    })
  },
  closeTips:function(){
    this.setData({
      isShowTips: false
    })
  },
  // 关闭教学引导
  closeLead: function () {
    wx.setStorage({
      key: 'shoucang',
      data: '1'
    })
    // var Id = wx.getStorageSync('UserId').toString()
    // var that = this
    // var ip = getApp().globalData.ip
    // wx.request({
    //   url: "https://" + ip + "/webapi/Users/Update_Value1",
    //   method: 'post',
    //   data: {
    //     Uid: Id,
    //   },
    //   success: function (res) {
    //     that.setData({
    //       leadMask: false,
    //     });
    //   }
    // })
    this.setData({
      leadMask: false,
    });
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    this.onLoad();
    // 页面显示
  },
  onHide: function() {
    this.setData({
      dayvalue1: '',
    })
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  tap: function(e) {
    // console.info(e)
  }
})