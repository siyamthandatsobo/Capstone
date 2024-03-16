<template>
  <div class="product">
  <div class="container container-fluid">
    <h2 class="display-1">Products</h2>

<!-- Sneakers Section -->
<div v-if="sneakers && sneakers.length > 0">
  <h3>Sneakers</h3>
  <div class="scrollable-container horizontal-scroll">
    <div class="product-grid">
      <div v-for="product in sneakers" :key="product.prodID" class="product-card">
        <!-- Your product content here -->
        <img :src="product.prodUrl" class="product-img" alt="Product Image">
        <div class="product-info">
          <h5 class="product-title">{{ product.prodName }}</h5>
          <p class="product-price">Price: R{{ product.amount }}</p>
          <p class="product-category">{{ product.category }}</p>
          <input v-model="product.quantity" type="number" min="1" max="10" class="form-control product-quantity" />
          <button @click="addToCart(product)" class="btn btn-primary product-btn">Add to Cart</button>
          <router-link v-if="isLoggedIn" :to="{ name: 'ProductDetails', params: { prodID: product.prodID }}" class="btn btn-secondary product-btn">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</div>

    <!-- Boots Section -->
    <div v-if="boots && boots.length > 0">
  <h3>Boots</h3>
  <div class="scrollable-container horizontal-scroll">
    <div class="product-grid">
      <div v-for="product in boots" :key="product.prodID" class="product-card">
        <!-- Your product content here -->
        <img :src="product.prodUrl" class="product-img" alt="Product Image">
        <div class="product-info">
          <h5 class="product-title">{{ product.prodName }}</h5>
          <p class="product-price">Price: R{{ product.amount }}</p>
          <p class="product-category">{{ product.category }}</p>
          <input v-model="product.quantity" type="number" min="1" max="10" class="form-control product-quantity" />
          <button @click="addToCart(product)" class="btn btn-primary product-btn">Add to Cart</button>
          <router-link v-if="isLoggedIn" :to="{ name: 'ProductDetails', params: { prodID: product.prodID }}" class="btn btn-secondary product-btn">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Trainers Section -->
<div v-if="trainers && trainers.length > 0">
  <h3>Trainers</h3>
  <div class="scrollable-container horizontal-scroll">
    <div class="product-grid">
      <div v-for="product in trainers" :key="product.prodID" class="product-card">
        <!-- Your product content here -->
        <img :src="product.prodUrl" class="product-img" alt="Product Image">
        <div class="product-info">
          <h5 class="product-title">{{ product.prodName }}</h5>
          <p class="product-price">Price: R{{ product.amount }}</p>
          <p class="product-category">{{ product.category }}</p>
          <input v-model="product.quantity" type="number" min="1" max="10" class="form-control product-quantity" />
          <button @click="addToCart(product)" class="btn btn-primary product-btn">Add to Cart</button>
          <router-link v-if="isLoggedIn" :to="{ name: 'ProductDetails', params: { prodID: product.prodID }}" class="btn btn-secondary product-btn">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
   
    sneakers() {
      return this.products.filter(product => product.category === 'sneaker');
    },
    boots() {
      return this.products.filter(product => product.category === 'Boots');
    },
    trainers() {
      return this.products.filter(product => product.category === 'trainers');
    },
    products() {
      return this.$store.state.Products || [];
    },
    isLoggedIn() {
      return this.$store.state.loggedIn; // Assuming isLoggedIn is a boolean in your Vuex store
    }
  },
  methods: {
    addToCart(product) {
    if (!product.quantity || product.quantity <= 0) {
      console.error('Invalid quantity');
      return;
    }

    this.$store.dispatch('addProductToCart', {
      prodID: product.prodID,
      quantity: product.quantity,
    }).then(() => {
      // Reset quantity after adding to cart
      product.quantity = 1; // Assuming 1 is the default quantity
    }).catch(error => {
      console.error('Error adding product to cart:', error);
    });
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
.scrollable-container.horizontal-scroll {
  overflow-x: auto;
  white-space: nowrap; /* Prevents wrapping to new lines */
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust column width as needed */
  grid-gap: 20px; /* Adjust gap between products */
}
 .product-card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  flex: 0 0 auto; /* Ensure the cards don't shrink */
  margin-right: 20px;
  border: 1px solid blueviolet;
} 
.product-card:hover {
  transform: scale(1.05); /* Scale the card when hovered over */
  border-color: rgb(6, 5, 5); /* Change border color to black */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add box shadow for better visual effect */
}
.product-img {
  width: 100%;
  max-height: 200px; /* Adjust image height as needed */
  object-fit: cover;
  transition: transform 0.3s
}
.product-card:hover img {
  transform: translateY(-50px); /* Move the image up by 10px when hovered over */
}

.product-info {
  flex-grow: 1;
}

.product-title {
  margin-top: 0;
}

.product-price {
  margin-bottom: 5px;
}

.product-category {
  margin-bottom: 10px;
}

.product-quantity {
  margin-bottom: 10px;
}

.product-btn {
  margin-top: auto;
}
.product{
  background-color: rgb(230, 230, 230);
}

</style>
