// pages/playbox.js
// const audioCtx = wx.createInnerAudioContext()//
const audioCtx = wx.getBackgroundAudioManager()

Page({
  /**
   * 页面的初始数据
   */

  data: {
    playlist: false,
    mask: false,
    playAction: 'audioPlay',
    currentTime: '00:00',
    duration: '',
    nowclass:'',
    songslist: [
      {
        name: '1.Apologize', 
        imgsrc:'http://p1.music.126.net/MzxX8rQNnCxKfVO_yS8_Kg==/909296116199925.jpg?param=130y130',            songsrc:'http://music.163.com/song/media/outer/url?id=24953439.mp3'
      },
      {
        name: '2.浪人琵琶',
        imgsrc: 'http://p1.music.126.net/G5YxAyt9812z9MROfWarkg==/109951163318974870.jpg?param=130y130',         songsrc: 'http://music.163.com/song/media/outer/url?id=566442496.mp3'
      },
      {
        name: '3.遥远的未来',
        imgsrc: 'http://p1.music.126.net/22cli1uP_NuL8TVeSVPkhg==/18762066418191386.jpg?param=130y130',         songsrc: 'http://music.163.com/song/media/outer/url?id=22753511.mp3'
      },
      {
        name: '4.往后余生',
        imgsrc: 'http://p1.music.126.net/VY-LfiQZZNjtDBHGmEu85A==/109951163300149472.jpg?param=130y130', songsrc: 'http://music.163.com/song/media/outer/url?id=557584888.mp3'
      }
      ],
    playIcon: '/img/play.png',
    audioName: '暂无播放音频',
    // audioImg: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    // author: '许巍',
    // src: 'http://music.163.com/song/media/outer/url?id=22753511.mp3',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    audioCtx.src = this.data.src
    // setTimeout(function () { console.log(audioCtx.duration) }, 3000)
    // var duar = audioCtx.duration
    // var that = this;
    // that.setData({
    // })
    
  },
  // 播放列表 开
  onList: function(e) {
    // var animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease',
    // })
    // var AAA = this.data.pingW
    // this.animation = animation
    // setTimeout(function () {
    //   animation.translate(190).step()
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 50)
    this.setData({
      playlist: true,
      mask: true
    })
  },
  // 播放列表 收
  offList: function(e) {
    // var animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease',
    // })

    // this.animation = animation
    // setTimeout(function () {
    //   animation.translate(0).step()
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 50)
    this.setData({
      playlist: false,
      mask: false
    })
  },
  // 选择音频播放
  playthis: function (e){
    var that = this;
    var i = e.currentTarget.dataset.index
    that.setData({
      audioName: this.data.songslist[i].name,
      audioImg: this.data.songslist[i].imgsrc,
      // author: '许巍',
      src: this.data.songslist[i].songsrc,
      playAction: 'audioPause',
      playIcon: '/img/stop.png',
      PlayDataI: i,
      playlist: false,
      mask: false,
      nowclass: 'zhuan'
    })
    audioCtx.src = this.data.src
    audioCtx.title = this.data.audioName;
    audioCtx.coverImgUrl = this.data.audioImg
    audioCtx.play();
    var that = this;
    this.onTime(that)
    this.updateTime(that) //触发updataTime事件，
    this.endTime(that)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(e) {
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
  },

  
  // 开始播放
  audioPlay: function() {
    audioCtx.src = this.data.src
    if (audioCtx.src == ''){
      wx.showToast({
        title: '暂无播放音频',
        icon: 'none',
        duration: 2000
      })
    }else{
      audioCtx.play();
      this.setData({
        playAction: 'audioPause',
        playIcon: '/img/stop.png',
        nowclass: 'zhuan'
      })
      var that = this;
      this.onTime(that)
      this.updateTime(that) //触发updataTime事件，
      this.endTime(that)
    }
    
  },
  // 暂停
  audioPause: function() {
    audioCtx.src = this.data.src
    audioCtx.pause();
    this.setData({
      playAction: 'audioPlay',
      playIcon: '/img/play.png',
      nowclass: ''
    })
  },
  // 播放进度开始事件
  onTime: function (that) {
    audioCtx.onPlay(() => {
      this.setData({
        currentTime: this.secondToMin(audioCtx.currentTime)
      })
    })
  },
  // 播放进度跳转事件
  seekTime: function (that) {
    audioCtx.onSeeked((res) => {
      this.updateTime(that) //触发updataTime事件，
      this.setData({
        currentTime: this.secondToMin(audioCtx.currentTime)
      })
    })
  },
  // 播放进度更新事件
  updateTime: function (that) {
    audioCtx.onTimeUpdate(() => {
      const currentTime = audioCtx.currentTime
      this.setData({
        currentTime: this.secondToMin(audioCtx.currentTime),
        duration: this.secondToMin(audioCtx.duration),
        timeVal: audioCtx.currentTime,
        maxVal: audioCtx.duration
      })
    })
  },
  // 播放进度暂停事件
  endTime: function (that) {
    audioCtx.onEnded(() => {
      this.setData({
        playAction: 'audioPlay',
        playIcon: '/img/play.png',
        currentTime: this.secondToMin(0),
        timeVal: 0,
      })
    })
  },
  // 进度条点击 跳转 && 滑动跳转
  slideBar: function (aa) {
    audioCtx.src = this.data.src
    var that = this;
    var curval = aa.detail.value; //滑块拖动的当前值
    audioCtx.seek(curval); //让滑块跳转至指定位置
    this.seekTime(that)
  },
  // 下一首歌
  NextSong: function(e){
    var that = this;
    var i = this.data.PlayDataI;
    var x = i;
    // var x = i++
    if (audioCtx.src == ''){
      wx.showToast({
        title: '暂无播放音频',
        icon: 'none',
        duration: 2000
      })
    }
    if (i == this.data.songslist.length - 1 ){
      wx:wx.showToast({
        title: '已经是最后一首了',
        icon: 'none',
        duration: 2000,
      })
    }else{
      that.setData({
        audioName: this.data.songslist[x+1].name,
        audioImg: this.data.songslist[x+1].imgsrc,
        // author: '许巍',
        src: this.data.songslist[x+1].songsrc,
        playAction: 'audioPause',
        playIcon: '/img/stop.png',
        PlayDataI: x+1,
        nowclass: 'zhuan'
      })
      audioCtx.src = this.data.src
      audioCtx.title = this.data.audioName;
      audioCtx.coverImgUrl = this.data.audioImg
      audioCtx.play();
      this.onTime(that)
      
    }
    
  },
  // 上一首歌
  PreSong: function () {
    var that = this;
    var i = this.data.PlayDataI;
    var x = i;
    if (audioCtx.src == '') {
      wx.showToast({
        title: '暂无播放音频',
        icon: 'none',
        duration: 2000
      })
    }
    if (i == 0) {
      wx: wx.showToast({
        title: '已经是第一首了',
        icon: 'none',
        duration: 2000,
      })
    } else {
      that.setData({
        audioName: this.data.songslist[x - 1].name,
        audioImg: this.data.songslist[x - 1].imgsrc,
        // author: '许巍',
        src: this.data.songslist[x - 1].songsrc,
        playAction: 'audioPause',
        playIcon: '/img/stop.png',
        PlayDataI: x - 1,
        nowclass: 'zhuan'
      })
      audioCtx.src = this.data.src
      audioCtx.title = this.data.audioName;
      audioCtx.coverImgUrl = this.data.audioImg
      audioCtx.play();
      this.onTime(that)
    }
  },
  //时间换算
  secondToMin: function(s) {
    var MM = Math.floor(s / 60);
    var SS = s % 60;
    if (MM < 10)
      MM = "0" + MM;
    if (SS < 10)
      SS = "0" + SS;
    var min = MM + ":" + SS;
    return min.split('.')[0];
  },
  // 获取播放地址
  _getPlayUrl: function (songmidid) {
    
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
