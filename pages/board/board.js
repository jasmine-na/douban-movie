//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    imgUrls:[]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
     wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
        data: {},
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
        	  var subjects=res.data.subjects
	          that.setData({
	             imgUrls:[subjects[0].images.large,subjects[1].images.large,subjects[2].images.large]
	          })
        }
     })
    
  }
})
