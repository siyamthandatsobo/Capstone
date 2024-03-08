<!-- Cart.vue -->
<template>
  <div>
    <h2>Your Cart</h2>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>User ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cartItem in cart" :key="cartItem.orderID">
          <td>{{ cartItem.prodID }}</td>
          <td>{{ getProductDetails(cartItem.prodID).prodName }}</td>
          <td>{{ cartItem.quantity }}</td>
          <td>{{ cartItem.userID }}</td>
          <td>
            <button @click="removeFromCart(cartItem.orderID)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    getProductDetails(prodID) {
      return this.$store.state.Products.find((product) => product.prodID === prodID) || {};
    },
    removeFromCart(orderID) {
      this.$store.dispatch('removeProductFromCart', orderID);
    },
  },
};
</script>
