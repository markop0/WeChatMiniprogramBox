// pages/recorder/recorder.js
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
// const audioCtx = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay: false,
    recorder: '',
    currentTime: '00:00',
    duration: '',
    isShowAudio: false,
    voice: null,
    wsUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getWebVoiceTalkUrl: function () {
    wx.request({
      url: 'http://api2.jxfc0791.com/manange/fnscamerainfo/getWebVoiceTalkUrl?channelId=1',
      x: '',
      y: ''
    },
      header: {
      'content-type': 'application/json'
    },
      success(res) {
      console.log(res.data)
         this.data.wsUrl = data['url']
          this.data.wsUrl = data.webVoiceTalkUrl
    }
    })
  },
useWebSocket: function () {
  let SocketTask = wx.connectSocket({
    url: this.data.wsUrl,
    success: function (res) {
      console.log(res)

    },
    fail: function (err) {
    }
  })
  var that = this;
  SocketTask.onOpen((res) => {
    console.log(res)
    SocketTask.send({
      //向服务器发送消息
      data: that.tempFilePath,
      success: function (res) {
        console.log(res, '发送成功了')
      },
      fail: function (err) {
        console.log(err, '发送失败了')
      }
    })
  })
},
// 开始录音
startRec: function () {
  const options = {
    duration: 10000, //指定录音的时长，单位 ms
    sampleRate: 16000, //采样率
    numberOfChannels: 1, //录音通道数
    encodeBitRate: 96000, //编码码率
    format: 'mp3', //音频格式，有效值 aac/mp3
    frameSize: 50, //指定帧大小，单位 KB
  }
  wx.showToast({
    title: '正在录音',
    image: '/img/micr.png',
    duration: 60000
  })

  //开始录音
  recorderManager.start(options);
  recorderManager.onStart(() => {
    console.log('recorder start')
    useWebSocket()
  });
  //错误回调
  recorderManager.onError((res) => {
    console.log(res);
  })
},
// 停止录音
stopRec: function () {
  wx.hideToast({

  })
  recorderManager.stop();
  recorderManager.onStop((res) => {
    this.tempFilePath = res.tempFilePath;
    console.log('停止录音', res.tempFilePath)
    const {
      tempFilePath
    } = res;
    let that = this;
    wx.saveFile({ // 下载到本地
      tempFilePath: res.tempFilePath,
      success(res2) {
        that.setData({
          voice: res2.savedFilePath
        })
      }
    })
  })
  innerAudioContext.src = this.tempFilePath,
    console.log(this.tempFilePath);
  this.setData({
    isShowAudio: true,
    src: this.tempFilePath,
    duration: this.secondToMin(innerAudioContext.duration),
    timeVal: 0,
    maxVal: Math.ceil(innerAudioContext.duration)
  })
},

// 播放录音
play: function () {
  this.setData({
    isplay: !this.data.isplay,
  })
  innerAudioContext.autoplay = true
  innerAudioContext.src = this.tempFilePath,
    console.log(innerAudioContext.src)
  innerAudioContext.play(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
  var that = this;
  this.onTime(that)
  this.updateTime(that) //触发updataTime事件，
  this.endTime(that)
},
// 暂停播放录音
stop: function () {
  this.setData({
    isplay: !this.data.isplay,
  })
  innerAudioContext.pause(() => {
    console.log('开始播放')
  })

},
// 播放进度开始事件
onTime: function (that) {
  innerAudioContext.onPlay(() => {
    this.setData({
      currentTime: this.secondToMin(innerAudioContext.currentTime)
    })
  })
},
// 播放进度跳转事件
seekTime: function (that) {
  innerAudioContext.onSeeked((res) => {
    this.updateTime(that) //触发updataTime事件，
    this.setData({
      currentTime: this.secondToMin(innerAudioContext.currentTime)
    })
  })
},
// 播放进度更新事件
updateTime: function (that) {
  innerAudioContext.onTimeUpdate(() => {
    const currentTime = innerAudioContext.currentTime
    this.setData({
      currentTime: this.secondToMin(innerAudioContext.currentTime),
      duration: this.secondToMin(innerAudioContext.duration),
      timeVal: Math.ceil(innerAudioContext.currentTime),
      maxVal: Math.ceil(innerAudioContext.duration)
    })
  })
},
// 播放结束事件
endTime: function (that) {
  innerAudioContext.onEnded(() => {
    this.setData({
      isplay: !this.data.isplay,
      currentTime: this.secondToMin(0),
      timeVal: 0,
    })
  })
},
// 进度条点击 跳转 && 滑动跳转
slideBar: function (aa) {
  innerAudioContext.src = this.data.src
  var that = this;
  var curval = aa.detail.value; //滑块拖动的当前值
  innerAudioContext.seek(curval); //让滑块跳转至指定位置
  this.seekTime(that)
},
//时间换算
secondToMin: function (s) {
  var MM = Math.floor(s / 60);
  var SS = s % 60;
  if (MM < 10)
    MM = "0" + MM;
  if (SS < 10)
    SS = "0" + SS;
  var min = MM + ":" + SS;
  return min.split('.')[0];
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