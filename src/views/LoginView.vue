<template>
    <div>
    <h1>Login/Signup</h1>
    <!-- <input type ='name' placeholder="name" required v-model="namedetails">
    <br><br>
      <input type ='number' placeholder="age" required v-model="agenumber">
      <br><br> -->
       <input type ='email' placeholder="email" required v-model="emailAdd">
       <br><br>
       <input type ='password' placeholder="password" required v-model="userPass">
       <br><br>
       <!-- <br><br>
      <input type ='textarea' placeholder="message" required v-model="message">
      <br><br>  -->
      <button @click="Signup()">SignUp</button>
         {{ $store.state.loggedIn }}
      <button @click="login()">login</button>
    </div>
  </template>
  <style scoped>
 
</style>
<script>

export default{
  data() {
return {
      emailAdd: '',
      userPass: ''
    }
  },
  methods:{
    Signup(){
console.log(this.$data.emailAdd)
this.$store.dispatch('signup',this.$data)

    },
    login(){
console.log(this.$data.emailAdd)
this.$store.dispatch('login',this.$data)

    }
    }
  }



</script>