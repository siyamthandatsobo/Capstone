<template>
    <div class="card-deck">
        <h1>Singleview</h1>
      <div v-for="prod in $store.state.product" :key="prod.prodID" class="card">
        <img :src="prod.prodUrl" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">{{ prod.prodName}}</h5>
          <p class="card-text">Price: R{{ prod.amount }}</p>
          <input v-model="prod.quantity" type="number" min="1" max="10" class="form-control" />
        </div>
        <div class="card-footer">
          <button @click="addToCart(prod)" class="btn btn-primary">Add to Cart</button>
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
<style>

</style>
