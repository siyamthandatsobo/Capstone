<template>
    <div>
        <div class="modals text-white">
      <a href="#">Free delivery</a>
      <router-link v-if="!$store.state.loggedIn" to="/login">Login</router-link>
      <a href="#">Manage cookies</a>
    </div>
 
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
          <img src="https://i.ibb.co/9rR4Bjj/Royal.png" alt="Royal Footwear" width="50" height="50">
        </router-link>
        
        <!-- Toggler/collapsible Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Men</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Women</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Kids</router-link>
            </li>
          </ul>
  
          <!-- Search form -->
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M10.832 9.105a5.5 5.5 0 1 0-1.727 1.727l3.692 3.692a.5.5 0 0 0 .853-.354V12.5a.5.5 0 0 0-.5-.5h-.793a.5.5 0 0 0-.354.853l-3.692 3.692a5.5 5.5 0 1 0 1.727-1.727l-.07-.07 3.692-3.692.07.07zM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
              </svg>
            </button>
          </form>
  
          <!-- Cart icon -->
          <router-link class="nav-link" to="/cart">
            <i class="bi bi-cart"><img src="https://i.ibb.co/SsH8Sbs/icons8-shopping-bag.gif" alt="Royal Footwear" width="50" height="50"></i>
          </router-link>
        </div>
      </div>
    </nav>
    <button v-if="$store.state.loggedIn" @click="logout">Logout</button> 

  
  <RouterView></RouterView>
</div>
  </template>
  
  <script>
  export default {
    methods: {
    logout() {
      // Logout from
      this.$store.dispatch('logout');
    }
  }
  };
  </script>
  
  <style scoped>
  .navbar-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .navbar-nav .nav-item {
    flex: 1; /* Each nav item takes equal space */
    text-align: center; /* Center aligns the text */
  }
  
  /* Add more styles as needed */
  
  .modals {
    display: flex;
    justify-content: space-around;
    background: #070707;
    padding: 3px;
  }
  
  .modals a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
  
  .modals a:hover {
    text-decoration: underline;
  }
  </style>
  