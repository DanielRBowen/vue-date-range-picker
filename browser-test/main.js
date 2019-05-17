//import moment = require("moment");

Vue.use(DateRangePicker);

var app = new Vue({
  el: '#app',
  data: {
    fromDate: moment.utc().startOf('month'),
    toDate: moment.utc().endOf('month').startOf('day')

  },
  methods: {
    submitted: function (range) {
      this.fromDate = range.startDate;
      this.toDate = range.endDate;
      console.log(range)
    }
  }
})