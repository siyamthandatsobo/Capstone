<template>
    <div>
      <!-- Shape divider -->
      <div class="skew-c"></div>
      <div class="colour-block">
        <h1>About Royal Footwear</h1>
        <p>Royal Footwear is a leading provider of high-quality shoes for every occasion. With a wide range of styles and sizes, we strive to offer the perfect fit for all our customers. Our commitment to excellence and customer satisfaction sets us apart in the footwear industry.</p>
        <p>Royal Footwear is a distinguished brand known for its commitment to quality, style, and comfort in the footwear industry. Established with a vision to provide premium shoes for all occasions, Royal Footwear has become synonymous with elegance, durability, and innovation.</p>
        <img src="https://i.ibb.co/SJ8Dfrt/xavier-teo-Sx-AXph-IPWeg-unsplash-removebg-preview.png" alt="Animated Picture" class="img-fluid mx-auto d-block" style="max-width: 100%; height: auto;">
      </div>
      <div class="skew-cc"></div>
      <div class="white-block">
        <h1>Our Mission</h1>
        <p>Royal Footwear offers a range of stylish and comfortable shoes designed to meet the needs of modern consumers. Our shoes are crafted using premium materials to ensure durability and long-lasting comfort. Whether you're looking for casual sneakers, formal dress shoes, or athletic footwear, Royal Footwear has you covered.</p>
      </div>
      <div class="skew-c"></div>
      <div class="colour-block">
        <h1>Our Vision.</h1>
        <p>Royal Footwear is dedicated to providing exceptional customer service and ensuring that every purchase meets or exceeds our customers' expectations. Our knowledgeable staff are here to assist you in finding the perfect pair of shoes, and our hassle-free return policy ensures that you can shop with confidence.</p>
        <p>Royal Footwear offers a range of stylish and comfortable shoes designed to meet the needs of modern consumers. Our shoes are crafted using premium materials to ensure durability and long-lasting comfort. Whether you're looking for casual sneakers, formal dress shoes, or athletic footwear, Royal Footwear has you covered.</p>
      </div>
      <div class="white-block">
        <h1>Stay connected</h1>
        <p>Stay updated with the latest news, product launches, and promotions from Royal Footwear by following us on social media and subscribing to our newsletter. Join the Royal Footwear community today and step into style, comfort, and elegance with every pair of shoes</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  body {
    margin: 0;
  }
  
  .colour-block {
    background: #dedede;
    width: 100%;
    padding: 7% 20% 10% 20%;
    color: black;
    margin-left: auto;
    margin-right: auto;
  }
  
  .white-block {
    background: #fff;
    width: 100%;
    padding: 7% 20% 10% 20%;
    color: blueviolet;
    margin-left: auto;
    margin-right: auto;
  }
  
  h1 {
    text-align: center;
    font-size: 30px;
    font-family: monospace;
    font-weight: bolder;
  }
  
  p {
    font-size: auto;
    font-family: poppins;
    line-height: 2;
    text-align: justify;
  }
  
  /*------------------*/
  /*  SKEW CLOCKWISE  */
  /*------------------*/
  .skew-cc {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .skew-cc:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right bottom, #823A9C 49%, #faf8fa 50%);
    transform: skewY(-5deg) translateY(50%);
  }
  
  /*-------------------------*/
  /* SKEW COUNTER CLOCKWISE  */
  /*-------------------------*/
  .skew-c {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .skew-c:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to left bottom, #fff 49%, #823A9C 50%);
    transform: skewY(-5deg) translateY(50%);
  }
  </style>
  
  <script>
  export default {
    // Component logic can be added here
  }
  </script>
  