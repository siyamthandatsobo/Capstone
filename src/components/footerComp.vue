<template>
  <footer>
    <div class="footer-content container">
      <div class="footer-column">
        <h4>SPORTS</h4>
        <ul>
          <li><a href="#">Sneakers</a></li>
          <li><a href="#">Boots</a></li>
          <li><a href="#">Running</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>COMPANY INFO</h4>
        <ul>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>SUPPORT</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li v-if="isAdmin"><router-link to="/admin">Admin</router-link></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>PRODUCTS</h4>
        <ul>
          <li><a href="#">Outdoors</a></li>
          <li><a href="#">Indoors</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>FOLLOW US</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

  
  <style scoped>
  
  
footer {
  background-color: black;
  color: white;
  padding: 20px 0;
  position: relative;
  width: 100%;
  bottom: 1;
}

.footer-line {
  position: relative;
  top: 0;
  left: 0;
  width: 50%; /* Adjust width as needed */
  border-top: 1px solid white; /* Add white border on top */
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.footer-column {
  width: 20%; /* Adjust width as needed */
}

.footer-column h4 {
  margin-bottom: 10px;
  font-family:'Courier New', Courier, monospace; /* Make links block-level elements to take full width */

}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

/* Style links */
.footer-column ul li a {
  color: white;
  text-decoration: none;
  padding: 5px 0; /* Add space above and below the link */
  display: block;
  font-family:'Courier New', Courier, monospace; 
  font-size:small;/* Make links block-level elements to take full width */
}

/* Remove underline on hover */
.footer-column ul li a:hover {
  text-decoration: none;
}

/* Responsive styles */
@media (max-width: 768px) {
  .footer-column {
    width: 45%;
    margin-bottom: 20px;
  }
}
  </style>
  <script>
  import VueCookies from 'vue-cookies';
  export default {
    computed: {
      isAdmin() {
        // Check if the user is logged in and has admin role
        return VueCookies.get('userRole') === 'Admin';
      }
    }
  }
  </script>
  