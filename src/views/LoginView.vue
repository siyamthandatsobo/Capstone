<template>
  <div class="login background">
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
        <input type="email" class="input" placeholder="Email" required v-model="userPayload.emailAdd">
        <label class="label">Email</label>
      </div>
      <div class="form_control">
        <input type="text" class="input" placeholder="FirstName" required v-model="userPayload.firstName">
        <label class="label">FirstName</label>
      </div>
      <div class="form_control">
        <input type="text" class="input" placeholder="LastName" required v-model="userPayload.lastName">
        <label class="label">LastName</label>
      </div>
      <div class="form_control">
        <input type="text" class="input" placeholder="Gender" required v-model="userPayload.gender">
        <label class="label">Gender</label>
      </div>
      <div class="form_control">
        <input type="number" class="input" placeholder="Age" required v-model="userPayload.userAge">
        <label class="label">Age</label>
      </div>
      <div class="form_control">
        <input type="password" class="input" placeholder="Password" required v-model="userPayload.userPass">
        <label class="label">Password</label>
      </div>
      <!-- You can add more input fields for other properties if needed -->

      <button class="btn bg-dark text-white" @click="addUser()">Sign Up</button>
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
      userPayload: {
        firstName: null,
        lastName: null,
        userAge: null,
        gender: null,
        emailAdd: null,
        userRole: null,
        userPass: null,
      },
      emailAdd: '',
      userPass: ''
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("addUser", this.userPayload);
      // Reset form fields after user is added
      this.resetForm();
    },
    login() {
      // Check if email and password are provided
      if (this.emailAdd && this.userPass) {
        // Perform login action with provided credentials
        this.$store.dispatch('login', { emailAdd: this.emailAdd, userPass: this.userPass });
      } else {
        // Handle case when email or password is missing
        console.log("Please provide email and password");
      }
    },
    signup() {
      // Perform signup action with userPayload
      this.addUser();
    },
    resetForm() {
      // Resetting each property to null
      Object.keys(this.userPayload).forEach(key => {
        this.userPayload[key] = null;
      });
      // Reset email and password fields
      this.emailAdd = '';
      this.userPass = '';
    }
  },
};
</script>

<style scoped>
.container {
  width: 300px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  color: white;
  box-shadow: 1.5px 1.5px 3px #e1dcdc, -1.5px -1.5px 3px rgba(68, 68, 68, 0.25), inset 0px 0px 0px #9c4242, inset 0px -0px 0px #5f5e5e;
  background-color: #0e0e0e;
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

.login {
  background-color: rgb(230, 230, 230);
  padding-top: 3%;
  padding-bottom: 3%;
  position: relative;
}

.left-image,
.right-image {
  width:300px;
  height:300px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease;
}

.left-image {
  left: 20px;
}

.right-image {
  right: 20px;
}

.left-image:hover,
.right-image:hover {
  transform: translateY(-50%) rotate(360deg);
}
.background{
    width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}
</style>
