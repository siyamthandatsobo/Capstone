<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link v-if="!$store.state.loggedIn" to="/login">Login</router-link>
  </nav>
  <button v-if="$store.state.loggedIn" @click="logout">Logout</button> -->

  <navComp/>
    <footercomp />
  </template>

<script>
  import navComp from './components/navComp.vue';
  import footercomp from './components/footerComp.vue';
  export default {
  components:{
       navComp,
      footercomp
      
      
    },
  methods: {
    logout() {
      // Logout from
      this.$store.dispatch('logout');
    }
  }
}
</script>
<style>
#app {
  margin: 0;
    padding: 0;
     box-sizing: border-box;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
