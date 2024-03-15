<template>
  <div>
    <h1>Login/Signup</h1>
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
<style scoped>
.container {
  width: 300px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  color: white;
}

.container .slider {
  width: 200%;
  position: relative;
  display: flex;
}

#register_toggle {
  display: none;
}

.container #register_toggle:checked + .slider {
  transform: translateX(-50%);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
}

.form-control {
  position: relative;
}

.input-field {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  border: none;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.bottom-text {
  font-size: 0.8em;
  text-align: center;
}

.switch {
  color: #007bff;
  cursor: pointer;
}
</style>