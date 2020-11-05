module.exports = Behavior({
  data: {
    bData: {a:10,b:20},
    user:{username:'laoxie',password:123456}
  },
  lifetimes:{
    attached: function(){
      this.getData();
    },
  },
  methods: {
    getData: function(){}
  }
})