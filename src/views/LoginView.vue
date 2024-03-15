<template>
  <div class="login">
    <div class="container">
      <input type="checkbox" id="register_toggle">
      <div class="slider">
        <div class="form">
          <span class="title">Login</span>
          <div class="form_control">
            <input type="text" class="input" placeholder="Username" required v-model="emailAdd">
            <label class="label">Username</label>
          </div>
          <div class="form_control">
            <input type="password" class="input" placeholder="Password" required v-model="userPass">
            <label class="label">Password</label>
          </div>
          <button class=" btn bg-dark text-white" @click="login()">Login</button>
          <span class="bottom_text">Don't have an account? <label for="register_toggle" class="swtich">Sign Up</label></span>
        </div>
        <div class="form">
          <span class="title">Sign Up</span>
          <div class="form_control">
            <input type="text" class="input" placeholder="Username" required>
            <label class="label">Username</label>
          </div>
          <div class="form_control">
            <input type="email" class="input" placeholder="Email" required>
            <label class="label">Email</label>
          </div>
          <div class="form_control">
            <input type="password" class="input" placeholder="Password" required>
            <label class="label">Password</label>
          </div>
          <button class="btn bg-dark text-white" @click="Signup()">Sign Up</button>
          <span class="bottom_text">Already have an account? <label for="register_toggle" class="swtich">Sign In</label></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailAdd: '',
      userPass: ''
    }
  },
  methods: {
    Signup() {
      console.log(this.emailAdd);
      this.$store.dispatch('signup', this.$data);
    },
    login() {
      console.log(this.emailAdd);
      this.$store.dispatch('login', this.$data);
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
  box-shadow: 1.5px 1.5px 3px #e1dcdc, -1.5px -1.5px 3px rgba(68, 68, 68, 0.25), inset 0px 0px 0px #9c4242, inset 0px -0px 0px #5f5e5e;
  /* height:50vh; */
}

.container .slider {
  width: 200%;
  position: relative;
  transition: transform ease-out 0.3s;
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
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 1.5em 3em;
  width: 50%;
}

.title {
  text-align: center;
  font-weight: 700;
  font-size: 2em;
}

.form_control {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.form_control .label {
  position: absolute;
  top: 50%;
  left: 10px;
  transition: transform ease 0.2s;
  transform: translate(0%, -50%);
  font-size: 0.75em;
  user-select: none;
  pointer-events: none;
  color: transparent;
}

.form_control .input {
  width: 100%;
  background-color: black;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: box-shadow ease 0.2s;
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;
}

.form_control .input:focus,
.form_control .input:valid {
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
}

.form_control .input:focus + .label,
.form_control .input:valid + .label {
  transform: translate(-150%, -50%);
}

form button {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: box-shadow ease 0.1s;
  box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
  background-color: #0e0e0e;
}

form button:active {
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
}

.bottom_text {
  font-size: 0.65em;
}

.bottom_text .swtich {
  font-weight: 700;
  cursor: pointer;
}
.login{
  background-color: #0e0e0e;
  padding-top:3%;
  padding-bottom:3%;
}
</style>
