<template>
    <div class="container">
      <h1>Royal Footwear Store FAQ</h1>
  
      <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
        <div class="question">{{ item.question }}</div>
        <div class="answer">{{ item.answer }}</div>
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
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Courier New', Courier, monospace;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .faq-item {
    margin-bottom: 20px;
  }
  
  .question {
    font-weight: bold;
    color: #333;
  }
  
  .answer {
    color: #666;
  }
  </style>
  