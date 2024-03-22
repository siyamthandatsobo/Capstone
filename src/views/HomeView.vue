<template>
  <div>

    <!-- Viewport section -->
    <div class="viewport">
      <div class="container">
        <div class="row flex-lg-row flex-md-row-reverse flex-column-reverse">
          <div class="col-lg-6 col-md-4">
            <div class="viewpimage">
              <p class="text text-flicker-in-glow">Royal Footwear New 415 Air MAX NONTENDO</p>
              <router-link class=" btn btn-lg mt-5 bg-dark text-white" to="/products">More footwear</router-link>
            </div>
          </div>
          <div class="col-lg-6 col-md-8">
            <img class="viewSneaker img-fluid  tilt-in-tl" src="https://i.ibb.co/bRN5sxQ/sneakpeek-removebg-preview.png" alt="Sneaker Image">
          </div>
        </div>
      </div>
    </div>

    <!-- Sweat section -->
    <div class="container-fluid sweat">
      <div class="row flex-lg-row flex-md-row-reverse">
        <div class="secondDiv col-lg-6">
          <!-- Add content as needed -->
        </div>
        <div class="col-lg-6">
          <h4 class="display-5 dedication">You don't sweat by chance. You sweat through Dedication!!!</h4>
          <router-link class=" btn btn-lg mt-5 bg-success text-white" to="/products">More footwear</router-link>
        </div>
      </div>
    </div>

    <!-- Shop For section -->
    <div class="Shop-for pt-5">
      <h1 class="text-dark text-center display-4">SHOP FOR</h1>
      <div class="container">
        <div class="row">
          <div class="col pt-5 category">
            <h4>MEN</h4>
            
            <router-link  to="/products" >
              <img class="img-fluid" src="https://i.ibb.co/LR8m3Yy/alonso-reyes-0-Hl-I76m4jx-U-unsplash-removebg-preview.png" alt="Men's Footwear">

          </router-link>
          </div>
          <div class="col pt-5 category">
            <h4>WOMEN</h4>
            <router-link class="nav-link" to="/products">

            <img class="img-fluid" src="https://i.ibb.co/Hqdybdk/jennifer-marquez-NYMDlpfum1-Q-unsplash-removebg-preview.png" alt="Women's Footwear">
          </router-link>
          </div>
          <div class="col pt-5 category">

            <h4>KIDS</h4>
            <router-link class="nav-link" to="/products">

            <img class="img-fluid" src="https://i.ibb.co/gDXzd2R/kiana-bosman-vl-Hq-SYYb-JQw-unsplash-removebg-preview.png" alt="Kids' Footwear">
          </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Special Offer section -->
    <div class="special display-4 pt-3 text-center">SIGN UP NOW AND GET 60% OFF YOUR FIRST PURCHASE!</div>
  </div>
</template>

<style scoped>
.modals {
  display: flex;
  justify-content: space-around;
  background: #070707;
  /* width: 100vw; */
  padding:3px;
  /* Adjust padding and other styles as needed */
}
@keyframes shoeBackgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


.category:hover{
  transform: scale(1.2);
}
.viewport{
  height:600px;
  background-color:rgb(230, 230, 230);
}
.viewpimage{
  margin-top:5%;
}
.viewSneaker{
  padding-top:40px;
  width:100%;
}
.custom-button {
  background-color:white;
  color:black;
  border: 1px solid #f3ebeb;
  padding: 0;
  
  border-radius: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.text {
  padding-top: 150px;
  font-family: monospace;
  font-size: 50px;
  text-shadow: 10px 10px 10px green; /* Add text-shadow property */
}

.custom-button:hover {
  background-color: #ddd;
}
.dedication{
  font-family: 'Courier New', Courier, monospace;
  padding-top:150px;
  color:white

}
.sweat{
  background-color: #000;
}
.Shop-for{
  color:rgb(246, 65, 96);
  font-family: poppins;
  background-color: rgb(230, 230, 230);
}
.secondDiv {
  height: 600px; /* Adjust height as needed */
  color: white;
  padding: 20px;
  animation: slideBackground 12s infinite alternate;
  background-color: rgb(192, 192, 197);
  background-repeat: no-repeat; 
  background-position:center;
  background-size: cover;/* Adjust animation duration as needed */
}
.special{
  background-color: rgb(250, 166, 11);
  height: 100px;
  color:white;
}

@keyframes slideBackground {
  0% {
    background-image: url('https://i.ibb.co/S00RGDq/jeff-tumale-SD9-Jyl1x-NQ4-unsplash.jpg');
    /* background-image: url('https://i.ibb.co/jvBp8B6/usama-akram-s-g-YAb-QTo-Xk-unsplash.jpg'); */
  }
  50% {
    background-image: url('https://i.ibb.co/z83wmWr/imani-bahati-Lx-Vx-PA1-LOVM-unsplash.jpg" alt="ox-street-Na5-Zud-YCQAs-unsplash-removebg-preview');
    /* background-image: url('https://i.ibb.co/k9Ncv8L/ox-street-Na5-Zud-YCQAs-unsplash-removebg-preview.png" alt="ox-street-Na5-Zud-YCQAs-unsplash-removebg-preview'); */
  }
  100% {
    /* background-image: url('https://i.ibb.co/rQKJmYc/usama-akram-s-g-YAb-QTo-Xk-unsplash-removebg-preview.png'); */
    background-image: url('https://i.ibb.co/pyMSxv7/ryan-plomp-PGTO-A0e-Lt4-unsplash.jpg');
  }
}
.navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 100%; /* Ensures full width */
}
.navbar-nav .nav-item {
  flex: 1; /* Each nav item takes equal space */
  text-align: center; /* Center aligns the text */
}
.nav-item a {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  font-size:25px;
}

 @media (max-width: 992px) {
  .viewSneaker {
    width: 80%;
    margin-right:10%;
    margin-top:30%;
  }
  .text {
    font-size: 40px;
    padding-top:80px;
  }
}

@media (max-width: 768px) {
  .text {
    font-size: 35px;
    padding-top:10px;
  }
  .viewSneaker {
    width: 75%;
    margin-right:10%;
    margin-top:0;
  }
} 

 @media (max-width: 576px) {
  .text {
    font-size: 35px;
    padding-top:60px;
  }
  .viewSneaker {
    width: 75%;
    margin-right:10%;
    margin-top:0;
  }
} 

.text-flicker-in-glow {
	-webkit-animation: text-flicker-in-glow 4s linear both;
	        animation: text-flicker-in-glow 4s linear both;
}
@-webkit-keyframes text-flicker-in-glow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
}
@keyframes text-flicker-in-glow {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
    text-shadow: none;
  }
  10.1% {
    opacity: 1;
    text-shadow: none;
  }
  10.2% {
    opacity: 0;
    text-shadow: none;
  }
  20% {
    opacity: 0;
    text-shadow: none;
  }
  20.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
  }
  20.6% {
    opacity: 0;
    text-shadow: none;
  }
  30% {
    opacity: 0;
    text-shadow: none;
  }
  30.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.5% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  30.6% {
    opacity: 0;
    text-shadow: none;
  }
  45% {
    opacity: 0;
    text-shadow: none;
  }
  45.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
  }
  55.1% {
    opacity: 0;
    text-shadow: none;
  }
  57% {
    opacity: 0;
    text-shadow: none;
  }
  57.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
  }
  60.1% {
    opacity: 0;
    text-shadow: none;
  }
  65% {
    opacity: 0;
    text-shadow: none;
  }
  65.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  75.1% {
    opacity: 0;
    text-shadow: none;
  }
  77% {
    opacity: 0;
    text-shadow: none;
  }
  77.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  85.1% {
    opacity: 0;
    text-shadow: none;
  }
  86% {
    opacity: 0;
    text-shadow: none;
  }
  86.1% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
  }
}

.tilt-in-tl {
	-webkit-animation: tilt-in-tl 0.65s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: tilt-in-tl 0.65s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes tilt-in-tl {
  0% {
    -webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
            transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes tilt-in-tl {
  0% {
    -webkit-transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
            transform: rotateY(35deg) rotateX(20deg) translate(-250px, -250px) skew(12deg, 15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}


/* Add more styles as needed */
</style>


<script>
export default {
};
</script>
