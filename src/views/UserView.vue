<template>
  <div>
    <h4 class="display-5 text-center text-white py-2">Welcome Back</h4>
    <div v-if="isLoggedIn && user">
      <button @click="deleteUser()" class="button">Delete Account</button>
      <div class="card">
        <div class="profileimage">
          <!-- Your SVG code here -->
        </div>
        <div class="Name">
          {{ user.firstName }}, {{ user.lastName }}
        </div>
      </div>
      <br><br>
      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Age: {{ user.userAge }}</li>
          <li class="list-group-item">Gender: {{ user.gender }}</li>
          <li class="list-group-item">Email: {{ user.emailAdd }}</li>
          <li class="list-group-item">UserID: {{ user.userID }}</li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p v-if="!isLoggedIn">Please log in to view user information.</p>
      <p v-else>Loading user information...</p>
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies';

export default {
  computed: {
    isLoggedIn() {
      // Check if user is logged in
      return this.$store.getters.isLoggedIn;
    }
  },
  data() {
    return {
      user: null,
      loading: true // Add loading state
    };
  },
  mounted() {
    // Retrieve user information on component mount
    const userCookie = VueCookies.get('setUserCookie');
    if (userCookie) {
      try {
        this.user = JSON.parse(userCookie);
        this.loading = false; // Set loading to false after user data is retrieved
      } catch (error) {
        console.error('Error parsing user cookie:', error);
        this.user = null;
        this.loading = false; // Set loading to false even if parsing fails
      }
    } else {
      this.user = null;
      this.loading = false; // Set loading to false if user cookie doesn't exist
    }
  },
  methods: {
    deleteUser() {
      // Implement delete user method
    }
  }
}
</script>




<style scoped>
.card {
  width: 230px;
  height: 280px;
  border-radius: 2em;
  padding: 10px;
  background-color: #191919;
  box-shadow: 5px 5px 30px rgb(4, 4, 4),
              -5px -5px 30px rgb(57, 57, 57);
  margin-left: 40%;
}

.list-group, .list-group-item {
  justify-content: center;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 200;
  color: red;
  width: max-content;
  margin-left: 37%;
}

.background {
  width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
  background-size: 55px 55px;
}

.profileimage {
  background-color: transparent;
  border: none;
  margin-top: 20px;
  border-radius: 5em;
  width: 150px;
  height: 150px;
}

.pfp {
  border-radius: 35em;
  fill: white;
}

.Name {
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 15px;
  font-size: 20px;
  margin-top: 10px;
}

.list-group,
.list-group-item {
  justify-content: center;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 200;
  color: red;
  width: max-content;
  margin-left: 37%;
}

.background {
  width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
  background-size: 55px 55px;
}

.button {
  --color: #000000;
  --color2: #ffffff;
  padding: 0.8em 1.75em;
  background-color: #ffffff;
  border-radius: 6px;
  border: 0.3px solid var(--color);
  transition: 4s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  font-weight: 300;
  font-size: 17px;
  font-family: cursive;
  text-transform: uppercase;
  color: var(--color);
}

.btn::after,
.btn::before {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  transform: skew(90deg) translate(-50%, -50%);
  position: absolute;
  inset: 50%;
  left: 25%;
  z-index: -1;
  transition: 0.5s ease-out;
  background-color: var(--color);
}

.btn::before {
  top: -50%;
  left: -25%;
  transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::before {
  transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::after {
  transform: skew(45deg) translate(-50%, -50%);
}

.btn:hover {
  color: var(--color2);
}

.btn:active {
  filter: brightness(0.7);
  transform: scale(0.98);
}
</style>
