<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div v-for="product in $store.state.product" :key="product.prodID" class="card">
          <img :src="product.prodUrl" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">Price: R{{ product.amount }}</p>
            <div class="form-group">
              <label for="quantity">Quantity:</label>
              <input v-model="product.quantity" id="quantity" type="number" min="1" max="10" class="form-control">
            </div>
          </div>
          <div class="card-footer">
            <button @click="addToCart(product)" class="btn btn-primary btn-block">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
computed: {
  getSingleProd(){
       console.log(this.$route.params.prodID)
    this.$store.dispatch('getProductById',this.$route.params.prodID);
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
  }
},
mounted() {
  // Get the prodID from the route params or any other source
 this.getSingleProd
}
}

</script>

<style scoped>
/* Custom styles for single product view */
.single-product-card {
  margin-bottom: 50px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.single-product-card:hover {
  transform: translateY(-5px);
}

.single-product-card .card-img-top {
  height: 200px;
  object-fit: cover;
}

.single-product-card .card-title {
  font-size: 1.5rem;
}

.single-product-card .card-text {
  font-size: 1.2rem;
}

.single-product-card .form-group {
  margin-bottom: 20px;
}

.single-product-card .form-control {
  font-size: 1.2rem;
}

.single-product-card .btn-primary {
  font-size: 1.2rem;
}

</style>