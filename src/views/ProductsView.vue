<template>
  <div>
    <h2>Products</h2>
    <div v-for="product in products" :key="product.prodID">
      <p>{{ product.prodName }} - R{{ product.amount }}</p>
      <input v-model="product.quantity" type="number" min="1" max="10" />
      <button @click="addToCart(product)">Add to Cart</button>
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
      // Ensure the product object has the 'quantity' property
      if (product.quantity && product.quantity > 0) {
        console.log(product);

        // Dispatch the action directly to add the product to the cart
        this.$store.dispatch('addProductToCart', {
          prodID: product.prodID,
          quantity: product.quantity,
        });

      } else {
        console.error('Invalid quantity');
      }
    },
  },
  mounted() {
    this.$store.dispatch('getProducts');
  },
};
</script>
