// miniprogram/pages/map/map.js
import Toast from '../../components/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomList: [
    ],
    latitude: 39.997761,
    longitude: 116.478935,
    markers: [],
    polyline: [{
      points: [],
      color: '#FF00DD',
      width: 5,

    }],
    points: [
      {latitude: 39.997761, longitude: 116.478935},
      {latitude: 39.997825,longitude: 116.478939},{latitude:39.998549,longitude: 116.478912},
      {latitude: 39.998549,longitude: 116.478912},{latitude: 39.998555,longitude: 116.478998},
      {latitude: 39.998555,longitude: 116.478998},{latitude: 39.99856,longitude: 116.479282},
      {latitude: 39.998528,longitude: 116.479658},{latitude: 39.998453,longitude: 116.480151},
      {latitude: 39.998302,longitude: 116.480784},{latitude: 39.998302,longitude: 116.480784},
      {latitude: 39.998184,longitude: 116.481149},{latitude: 39.997997,longitude: 116.481573},
      {latitude: 39.997846,longitude: 116.481863},{latitude: 39.997718,longitude: 116.482072},
      {latitude: 39.997718,longitude: 116.482362},{latitude: 39.998935,longitude: 116.483633},
      {latitude: 39.998968,longitude: 116.48367},{latitude: 39.999861,longitude: 116.484648}
    ],
    isPlay: false,
    playAll: false,
    carIndex: 1,
    timer: null,
    timerValue: 100,
    showPopup: false,
    speedList: [
      {value: 1000, text: 'X1'},
      {value: 500, text: 'X2'},
      {value: 250, text: 'X4'},
      {value: 100, text: 'X10'},
      {value: 10, text: 'X100'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      markers: [{
        iconPath: "begin_icon.png",
        id: 0,
        latitude: 39.997761,
        longitude: 116.478935,
        width: 30,
        height: 30
      }]
    })
  },
  /**
   * 播放or暂停
   */
  play: function(){
    this.setData({
      isPlay: !this.data.isPlay
    })
    if(this.data.isPlay){
      this.start()
    }else{
      this.stop()
    }
  },
  /**
   * 开始播放
   */
  start: function(event) {
    // 播放
    if(this.data.playAll){
      this.setData({
        playAll: false,
        carIndex: 1,
        latitude: this.data.points[0].latitude,
        longitude: this.data.points[0].longitude,
        ['markers[0].latitude']: this.data.points[0].latitude,
        ['markers[0].longitude']: this.data.points[0].longitude,
        ['polyline[0].points']: [],
      })
    }
    let index = this.data.carIndex
    index++
    if(this.data.carIndex<this.data.points.length){
      this.setData({
        carIndex: index,
        latitude: this.data.points[this.data.carIndex].latitude,
        longitude: this.data.points[this.data.carIndex].longitude,
        ['markers[0].latitude']: this.data.points[this.data.carIndex].latitude,
        ['markers[0].longitude']: this.data.points[this.data.carIndex].longitude,
        ['polyline[0].points']: this.data.points.slice(0,index),
        timer: setTimeout(this.start, 1 * 300)
      })
    }else{
      // 播放完毕
      this.setData({
        playAll: true,
        isPlay: false
      })
      clearTimeout(this.data.timer);
      Toast.success('播放完毕')
    }
  },
  /**
   * 暂停播放
   */
  stop: function(){
    this.data.timer && clearTimeout(this.data.timer)
  },
  /**
   * 选择速度
   */
  speed:function(){
    this.setData({
      showPopup: true
    })
  },
  /**
   * 取消选择速度
   */
  onClose: function(){
    this.setData({
      showPopup: false
    })
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