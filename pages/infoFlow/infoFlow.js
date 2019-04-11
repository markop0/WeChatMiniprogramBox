// pages/infoFlow/infoFlow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendList: [{
        name: '编辑推荐',
        text: 'Facebook 上一位大佬发表的代码看法，以下为原文： 我常用《天龙八部》来向客户说明一件事。 如果金庸写了40回，让別人来续写最后10回，先不论文笔工夫，续写的人必须把前40回先读一遍，甚至多遍，否则根本无法把故事接上去。重温前40回的时间是免不了的成本。  ',
        imgurl: '/img/launch_diamond.png'
      },
      {
        name: '编辑推荐',
        text: 'Facebook 上一位大佬发表的代码看法，以下为原文： 我常用《天龙八部》来向客户说明一件事。 如果金庸写了40回，让別人来续写最后10回，先不论文笔工夫，续写的人必须把前40回先读一遍，甚至多遍，否则根本无法把故事接上去。重温前40回的时间是免不了的成本。  ',
        imgurl: '/img/launch_diamond.png'
      },
      {
        name: '编辑推荐',
        text: 'Facebook 上一位大佬发表的代码看法，以下为原文： 我常用《天龙八部》来向客户说明一件事。 如果金庸写了40回，让別人来续写最后10回，先不论文笔工夫，续写的人必须把前40回先读一遍，甚至多遍，否则根本无法把故事接上去。重温前40回的时间是免不了的成本。  ',
        imgurl: '/img/launch_diamond.png'
      },
      {
        name: '编辑推荐',
        text: 'Facebook 上一位大佬发表的代码看法，以下为原文： 我常用《天龙八部》来向客户说明一件事。 如果金庸写了40回，让別人来续写最后10回，先不论文笔工夫，续写的人必须把前40回先读一遍，甚至多遍，否则根本无法把故事接上去。重温前40回的时间是免不了的成本。  ',
        imgurl: '/img/launch_diamond.png'
      },

    ],
    pinList: [{
        username: '前端技术研究员',
        text: '又有新技术、新特性出来了',
        imgurl: 'https://user-gold-cdn.xitu.io/2018/7/12/1648d9b3490f0930?w=800&h=600&f=jpeg&s=169932',
        UPtime: '2018-09-25T00:14:39.765Z',
        content: 'SelectPage：简洁优雅而功能强大的选择器，使用简单，适应各种UI环境，功能强大，丰富的参数和回调函数 。它包含了 autocomplete、ajax 数据源、多选择 Tag、i18n 国际化，结果列表分页展示，键盘快捷操作等',
      likedCount:'3',
      commentCount:'10'
      },
      {
        username: 'reporternotreport',
        text: '',
        imgurl: 'https://user-gold-cdn.xitu.io/2018/2/2/1615531401135ea8?w=325&h=260&f=png&s=15295',
        UPtime: '',
        content: '当Facebook无法访问之后，互联网用户会做什么呢？最新统计结果在这段时间内人们更喜欢阅读新闻',
        pictures: [
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
        ],
      },
      {
        username: 'github',
        text: '',
        imgurl: 'https://user-gold-cdn.xitu.io/2017/11/2/c343876c31989967d9c4c0554356f195',
        UPtime: '',
        content: '俄罗斯Yandex公司开源了大数据存储组件ClickHouse，是个真正的面向列的DBMS，支持分布式，多核运行和SQL语法，官方100M数据集压测，查询比hive快279倍，比MySQL快801倍',
        pictures: [
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd549ae10c8?w=656&h=466&f=png&s=66108',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd549ae10c8?w=656&h=466&f=png&s=66108',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd549ae10c8?w=656&h=466&f=png&s=66108',
          'https://user-gold-cdn.xitu.io/2018/9/24/16609bd317dc6750?w=636&h=780&f=png&s=373344',
          
        ],
      },
    ]
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