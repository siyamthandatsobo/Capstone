<template>
    <div class="background">

   
    <div class="container">
      <h1>Royal Footwear Store FAQ</h1>
  
      <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
        <div class="question">{{ item.question }}</div>
        <div class="answer">{{ item.answer }}</div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqItems: [
          {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers."
          },
          {
            question: "What is your shipping policy?",
            answer: "We offer standard and expedited shipping options. Standard shipping typically takes 3-5 business days, while expedited shipping delivers within 1-2 business days. Shipping costs and delivery times may vary based on your location."
          },
          {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary depending on the destination country's customs regulations and shipping carriers."
          },
          {
            question: "What is your return/exchange policy?",
            answer: "We offer a hassle-free return and exchange policy within 30 days of purchase. Items must be unused and in their original condition with tags attached. Customers are responsible for return shipping costs unless the return is due to a defect or error on our part."
          },
          {
            question: "How do I track my order?",
            answer: "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status of your delivery online."
          },
          {
            question: "Are your products authentic?",
            answer: "Yes, all products sold on our website are guaranteed to be authentic. We source our merchandise directly from authorized distributors and manufacturers."
          },
          {
            question: "Do you offer gift cards?",
            answer: "Yes, we offer electronic gift cards that can be purchased and redeemed online. Gift cards are available in various denominations and make the perfect gift for any occasion."
          },
          {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team via email at support@royalfootwear.com or through our website's contact form. Our team is available to assist you with any questions or concerns you may have."
          },
         
          {
            question: "How can I contact customer support?",
            answer: "You can contact us on siyamthandatsobo@gmail.com/0672265196"
          }
          // Add more FAQ items here
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    /* background-color: #fff; */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Courier New', Courier, monospace;
  }
  .background{
    width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}
  
  h1 {
    text-align: center;
    color: blueviolet;
  }
  
  .faq-item {
    margin-bottom: 20px;
  }
  
  .question {
    font-weight: bold;
    color: greenyellow;
  }
  
  .answer {
    color: white;
  }
  </style>
  