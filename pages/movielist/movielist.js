//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    message: 'Hello Worlddddd',
    list: {}
  },
  
  onLoad: function (params) {
    
    var that = this
     wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
          that.setData({
            "list":res.data.subjects
          })
        }
     })
    
  }
})
