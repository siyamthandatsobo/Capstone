<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div v-for="product in $store.state.product" :key="product.prodID" class="container">
          <div class="container">
            <div class="imgBx">
              <img :src="product.prodUrl" alt="Product Image">
            </div>
            <div class="details">
              <div class="content">
                <h2>{{ product.prodName }} <br><span>{{ product.category }}</span></h2>
                <p>{{product.description }}</p>
                <h3>R{{ product.amount }}</h3><br>
                <button @click="addToCart(product)" class="btn btn-primary btn-block">Buy now</button>
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
    // Change The Picture and Associated Element Color when Color Options Are Clicked.
   
}
}
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap');
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    background: #000;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 900px;
    height: 600px;
    background: #fff;
    margin: 20px;
}

.imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #212121;
}

.imgBx img {
    width: 300px;
    transform: rotate(-30deg);
    left: -50px;
}

.details {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
}

.details h2 {
    margin: 0;
    padding: 0;
    font-size: 2.4em;
    line-height: 1em;
    color: #444;
}

.details h2 span {
    font-size: 0.4em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
}

.details p {
    max-width: 85%;
    margin-left: 15%;
    color: #333;
    font-size: 15px;
    margin-bottom: 36px;
}

.details h3 {
    margin: 0;
    padding: 0;
    font-size: 2.5em;
    color: #a2a2a2;
    float: left;
}

.details button {
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    padding: 15px 20px;
    margin-top: 5px;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 40px;
    float: right;
}

@media (max-width: 1080px) {
    .container {
        height: auto;
    }
    .imgBx {
        padding: 40px;
        box-sizing: border-box;
        width: 100% !important;
        height: auto;
        text-align: center;
        overflow: hidden;
    }
    .imgBx img {
        left: initial;
        max-width: 60%;
        transform: rotate(1deg);
    }
    .details {
        width: 100% !important;
        height: auto;
        padding: 20px;
    }
    .details p {
        margin-left: 0;
        max-width: 100%;
    }
}

footer {
    position: fixed;
    right: 16px;
    bottom: 12px;
}

footer a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}
</style>