// pages/orders/orders.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    states_on: "all",
    states: {
      "all": "全部",
      "unpay": "待支付",
      "completed": "已完成",
      "cancel": "已取消"
    },
    msg: "",
    list: [{
      id: 1212121212,
      time: "2019年9月3日20:51:41",
      states: '已完成',
      old_price: '160.5',
      new_price: '160.5',
      img: ["/images/cook.jpg", "/images/cook.jpg"],
      totalnum: 20
    }, {
      id: 1212121212,
      time: "2019年9月3日20:51:41",
      states: '已完成',
      old_price: '160.5',
      new_price: '160.5',
      img: ["/images/cook.jpg"],
      totalnum: 20
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeList: function(event) {
      let states_on = event.currentTarget.dataset.states;
      let that = this;
      let msg = that.data.states[states_on];
      let list =[]
      if (states_on === 'all') {
        msg = ''
        list = [{
          id: 1212121212,
          time: "2019年9月3日20:51:41",
          states: '已完成',
          old_price: '160.5',
          new_price: '160.5',
          img: ["/images/cook.jpg", "/images/cook.jpg"],
          totalnum: 20
        }, {
          id: 1212121212,
          time: "2019年9月3日20:51:41",
          states: '已完成',
          old_price: '160.5',
          new_price: '160.5',
          img: ["/images/cook.jpg"],
          totalnum: 20
        }]
      }
      that.setData({
        states_on,
        msg,
        list
      });
    }
  }
})