<template>
    <div class="product">
      <div class="container container-fluid">
        <!-- Category Selection -->
        <!-- <div class="category-selection">
          <button @click="selectCategory('Men')" class="btn btn-primary">Men</button>
          <button @click="selectCategory('women')" class="btn btn-primary">Women</button>
          <button @click="selectCategory('kids')" class="btn btn-primary">Kids</button>
        </div>
   -->
        <!-- Search Bar -->
        <form class="d-flex pt-5">
        <input class="form-control" v-model="searchQuery" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M10.832 9.105a5.5 5.5 0 1 0-1.727 1.727l3.692 3.692a.5.5 0 0 0 .853-.354V12.5a.5.5 0 0 0-.5-.5h-.793a.5.5 0 0 0-.354.853l-3.692 3.692a5.5 5.5 0 1 0 1.727-1.727l-.07-.07 3.692-3.692.07.07zM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"/>
          </svg>
        </button>
      </form>
      <div class="col">
        <button @click="sortProducts()" class="btn btn-dark">Sort by price</button>
      </div>
  
        <!-- Product Display -->
        <h2 class="display-5">Products</h2>
        <div class="scrollable-container horizontal-scroll">
        <div class="product-grid">
            <div v-for="product in filteredProducts" :key="product.prodID" class="product-card">
              <!-- Your product content here -->
              <img :src="product.prodUrl" class="product-img" alt="Product Image">
              <div class="product-info">
                <h5 class="product-title">{{ product.prodName }}</h5>
                <p class="product-price">Price: R{{ product.amount }}</p>
                <p class="product-category">{{ product.category }}</p>
                <input v-model="product.quantity" type="number" min="1" max="10" class="form-control product-quantity" />
                <button @click.prevent="addToCart(product)" class="btn btn-primary product-btn">Add to Cart</button>
                <router-link v-if="isLoggedIn" :to="{ name: 'ProductDetails', params: { prodID: product.prodID }}" class="btn btn-secondary product-btn">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        selectedCategory: 'Men', // Default category selection
      };
    },
    computed: {
      products() {
        return this.$store.state.Products || [];
      },
      filteredProducts() {
  const selectedCategory = this.$store.state.selectedCategory;
  const query = this.searchQuery.trim().toLowerCase(); // Convert search query to lowercase

  // If Products state is null or undefined, return an empty array
  if (!this.$store.state.Products) {
    return [];
  }

  // Filter products based on selected category and search query
  return this.$store.state.Products.filter(product => {
    const categoryMatch = !selectedCategory || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const queryMatch = !query || product.prodName.toLowerCase().includes(query);

    return categoryMatch && queryMatch;
  });
    },
    isLoggedIn() {
      return this.$store.state.loggedIn; // Assuming isLoggedIn is a boolean in your Vuex store
    },
  
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
      selectCategory(category) {
        this.selectedCategory = category;
      },
      getSingleProd(prodID) {
      this.$store.dispatch('getProductById', prodID);
    },
    sortProducts() {
        if (this.products) {
          this.products.sort((a, b) => a.amount - b.amount);
        }
      }
    },
    mounted() {
      this.$store.dispatch('getProducts'); // Fetch products from the store
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
    grid-gap: 20px; 
    padding-bottom: 40px;/* Adjust gap between products */
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
  