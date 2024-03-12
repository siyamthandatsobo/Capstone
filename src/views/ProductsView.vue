<template>
  <div>
    <h2 class="display-1">Products</h2>
    <div class="card-deck">
      <div v-for="product in products" :key="product.prodID" class="card">
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
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.Products;
     
    },
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
/* Add your custom styles for the cards here if needed */
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.card {
  width: 18rem;
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
