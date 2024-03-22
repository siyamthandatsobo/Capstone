<!-- Inside your CartView component template -->
<template>
  <div>
    <h2 class="display-5 text-center pt-5">Your Cart</h2>

    <table class="cart-table container">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product ID</th>
          <th>Quantity</th>
          <th>Name</th>
          <th>Category</th>
          <th>User ID</th>
          <th>Total</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Display cart items using v-for -->
        <tr v-for="cartItem in cart" :key="cartItem.orderID">
          <!-- Display cart item details as needed -->
          <td>{{ cartItem.orderID }}</td>
          <td>{{ cartItem.prodID }}</td>
          <td>{{ cartItem.quantity }}</td>
          <td>{{ cartItem.prodName }}</td>
          <td>{{ cartItem.category }}</td>
          <td>{{ cartItem.userID }}</td>
          <td>{{ cartItem.totalPrice }}</td>
          <td><img :src="cartItem.prodUrl" alt="Product Image" width="100px" height="100px"></td>
          <td>
            <button @click.prevent="remove(cartItem.prodID)">Remove</button>
          </td>
        </tr>
      </tbody>

      </table>
      <div class="total-price">
      Total Price: R{{  totalPrice.toFixed(2)}}
    </div>
  </div>
</template>

<style scoped>
/* Inside your CartView component style block */
.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.cart-table th, .cart-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.cart-table th {
  background-color: #f2f2f2;
}

.cart-table img {
  max-width: 100%;
  height: auto;
}
.total-price {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
<script>
// Inside your CartView component script
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + parseFloat(item.totalPrice), 0);
    },
  },
  methods: {
    remove(prodID) { 
      this.$store.dispatch('deleteProdFromCart', prodID);
    },
  },
  mounted() {
    this.$store.dispatch('getOrderItemsByUser'); // Dispatch the renamed action
  },
};
</script>
