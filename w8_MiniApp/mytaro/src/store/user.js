import { observable } from 'mobx'

const userStore = observable({
  userinfo: {},
  login(user) {
    this.userinfo = user;
  },
  logout(){
    this.userinfo = {}
  }
})

export default userStore