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
    }, {
      id: 1212121212,
      time: "2019年9月3日20:51:41",
      states: '已完成',
      old_price: '160.5',
      new_price: '16.5',
      img: ["/images/cook.jpg"],
      totalnum: 2
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeList: function(event) {
      let _states = event.currentTarget.dataset.states;
      let that = this;
      let _msg = that.data.states[_states]
      if (_states === 'all') {
        _msg = ''
      }
      that.setData({
        states_on: _states,
        msg: _msg
      });
    }
  }
})