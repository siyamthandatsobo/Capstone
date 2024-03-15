<template>
  <div>

   
  <div class="viewport">
<div class="container">

  <div class="row"  >
    <div class="col  viewpimage">
        <p class="text">Royal Footwear New 415 Air MAX NONTENDO </p>

        <button class=" btn text-white bg-dark">Check Out More</button>
      
      </div>
      <div class="col  viewpimage ">
        <img class="viewSneaker img-fluid d-flex" src="https://i.ibb.co/rQKJmYc/usama-akram-s-g-YAb-QTo-Xk-unsplash-removebg-preview.png" height="400px">
      </div>

    </div>
  </div>

  </div>
  <div class="container-fluid">
    <div class="row sweat">

<div class="secondDiv col-6 ">
  
</div>
<div class="col-6">
  
  <h4 class="display-5 dedication">You dont sweat by chance You sweat through Dedication !!!</h4>
  <button class="lead">More footwear</button>
</div>
</div>
  </div>
  
  <div class="Shop-for">
    <h1 class="pt-5 text-dark text-center display-4">SHOP FOR</h1>
    <div class="container">
      <div class="row ">
        <div class="col-4 pt-5 category">
          <h4>MEN</h4>
          <img class="img-fluid " src="https://i.ibb.co/LR8m3Yy/alonso-reyes-0-Hl-I76m4jx-U-unsplash-removebg-preview.png" width="600px" height="600px">

        </div>
        <div class="col-4 category">
          <h4 class="pt-5">Women</h4>
          <img class="img-fluid" src="https://i.ibb.co/Hqdybdk/jennifer-marquez-NYMDlpfum1-Q-unsplash-removebg-preview.png" width="350px" height="400px">

        </div>
        <div class="col-4 category">
          <h4 class="pt-5">Kids</h4>
          <img class="img-fluid" src="https://i.ibb.co/gDXzd2R/kiana-bosman-vl-Hq-SYYb-JQw-unsplash-removebg-preview.png" width="350px" height="400px">

        </div>
      </div>
    </div>
  </div>
  <div class="special display-6 pt-5">SIGN UP NOW AND GET 60% OFF YOUR FIRST PURCHASE!</div>
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
.category:hover{
  transform: scale(1.2);
}
.viewport{
  height:600px;
  background-color:rgb(230, 230, 230);
}
.viewpimage{
  border:2px solid  red;
  margin-top:5%;
}
.viewSneaker{
  margin-left:50%;
  width:250px;
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
.text{
  padding-top:150px;
  font-family: monospace;
  font-size:50px;
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

/* Add more styles as needed */
</style>


<script>
export default {
};
</script>
