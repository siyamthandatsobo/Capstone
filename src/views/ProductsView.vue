<template>
  <div>
    <h2 class="display-1">Products</h2>

    <!-- Sneakers Section -->
    <div v-if="sneakers && sneakers.length > 0">
      <h3>Sneakers</h3>
      <div class="scrollable-container">
        <div v-for="product in sneakers" :key="product.prodID" class="card">
          <!-- Your card content here -->
          <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">Price: R{{ product.amount }}</p>
            <input v-model="product.quantity" type="number" min="1" max="10" class="form-control" />
          </div>
          <div class="card-footer">
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            <router-link :to="{ name: 'ProductDetails', params: { prodID: product.prodID }}" class="btn btn-secondary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Boots Section -->
    <div v-if="boots && boots.length > 0">
      <h3>Boots</h3>
      <div class="scrollable-container">
        <div v-for="product in boots" :key="product.prodID" class="card">
          <!-- Your card content here -->
          <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">Price: R{{ product.amount }}</p>
            <input v-model="product.quantity" type="number" min="1" max="10" class="form-control" />
          </div>
          <div class="card-footer" v-if="isLoggedIn">
      <router-link to="/view-more" class="btn btn-primary">View More</router-link>
    </div>
        </div>
      </div>
    </div>

    <!-- Trainers Section -->
    <div v-if="trainers && trainers.length > 0">
      <h3>Trainers</h3>
      <div class="scrollable-container">
        <div v-for="product in trainers" :key="product.prodID" class="card">
          <!-- Your card content here -->
          <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">Price: R{{ product.amount }}</p>
            <input v-model="product.quantity" type="number" min="1" max="10" class="form-control" />
          </div>
          <div class="card-footer">
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            <router-link :to="{ name: 'ProductDetails', params: { prodID: product.prodID }}" class="btn btn-secondary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.Products;
     
    },
    sneakers() {
      return this.products.filter(product => product.category === 'sneakers');
    },
    boots() {
      return this.products.filter(product => product.category === 'boots');
    },
    trainers() {
      return this.products.filter(product => product.category === 'trainers');
    },
    products() {
      return this.$store.state.Products || []; // Add fallback to empty array if Products is null
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn; // Assuming isLoggedIn is a boolean in your Vuex store
    }
  },
  methods: {
    addToCart(product) {
      if (product.quantity && product.quantity > 0) {
        this.$store.dispatch('addProductToCart', {
          prodID: product.prodID,
          quantity: product.quantity,
        });
      } else {
        console.error('Invalid quantity');
      }
    },
    getSingleProd(prodID){
      
      this.$store.dispatch('getProductById', prodID);
    }
  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
};
</script>

<style scoped>
/* Add your custom styles for the scrollable container here */
.scrollable-container {
  max-height: 300px; /* Adjust height as needed */
  overflow-y: auto;
}

/* Remove fixed height from the cards */
.card {
  /* Remove height property */
  margin-bottom: 20px;
  background-color: rgb(243, 243, 243);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  max-height: max-content;
}
</style>
