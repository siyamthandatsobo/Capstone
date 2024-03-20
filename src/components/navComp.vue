<template>
  <div>
    <div class="modals text-white">
      <a href="#" data-bs-toggle="modal" data-bs-target="#freedelivery">Free delivery</a>
      <router-link v-if="!$store.state.loggedIn" to="/login">Login</router-link>
      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Manage cookies</a>
    </div>
    <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cookie Policy</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        1. Introduction

The purpose of this policy is to describe what cookies are, what we use them for, and how you can manage them during your visit to, or use of our website. This policy works alongside our privacy policy, which you can find at https://www.adaptit.com/privacy-policy

2. What are cookies?

A ‘cookie’ is small piece of data (usually in the form of a text file) which may be placed on your device when you visit our website. These files do not contain personal data, but they do contain a personal identifier allowing us to associate your personal data with a certain device, i.e. it helps us to “remember” user behaviour. As a user, you are able to accept or decline cookies. Please note that if you decline cookies, you may not be able to fully experience the interactive features of the Adapt IT website.

3. Why do we use cookies?

These files serve a number of useful purposes for you, including:

granting you access to restricted content;
tailoring our website’s functionality to you personally by letting us remember your preferences, location or device type;
ensuring the website functions correctly;
improving how our website performs;
understanding who our audience is, so that we can provide content most relevant to you;
allowing third parties to provide services to our website; and
helping us deliver interest-based advertising where appropriate in compliance with the applicable laws.
4. The types of cookies we use

We use different types of cookies. Some of these cookies are placed by us, while others are placed by our third-party plug-ins, suppliers or advertisers. These cookies may be deleted from your device at different times, such as at the end of your browsing session (when you leave the website) or after a pre-set amount time, or they may persist on your device until you delete them.

We use the following types of cookies:

essential cookies – these are cookies that allow our website to perform its essential functions. Without these cookies, some parts of our websites would stop working.
site analytics cookies – these are cookies that monitor how our website is performing, and how you interact with it. We use them to know how best to improve our website or services.
functional cookies – these are cookies that remember who you are as a user of our website. We use them to remember any preferences you may have selected on our website, like saving your username and password, or settings.
advertising cookies – these are cookies that match your interests or web searches with applicable advertising campaigns on our website. We use them to provide you with advertising that we think you might find useful.
social media cookies – these are cookies that integrate with social media platforms. We use them to help you share content from our website to your chosen social media platform.
flash cookies – these are cookies that help your device read content supported by Adobe Flash. We use them to make sure that any Flash advertisements or videos appear properly on your device.
third party cookies – these are cookies that some of our business partners use on our website. We have no access to or control over them. Information collected by any of these cookies or widgets is governed by the privacy policy of the company that created it, and not by us.
5. Deleting cookies

If you wish to delete the cookies, please refer to your device manual or website manual for instructions.

6. Consent

We only use cookies if you have given us your consent by selecting YES. If you have previously granted consent and you wish to withdraw it, you can do so by selecting NO.

Third parties may also use cookies. You must take care that if you access linked websites, third party plug-ins used on our website, or advertisements appearing on our website, you inspect how they use cookies. We are not responsible for how third parties control the use of cookies.

Cookies placed on your device can always be deleted manually. Follow this link for more information on how you can do this: https://www.digitaltrends.com/computing/how-to-delete-cookies/

7. Enquiries

Enquires about this policy can be directed to our information officer here siyamthandatsobo@gmail.com
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="freedelivery" tabindex="-1" aria-labelledby="freedeliveryModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="freedeliveryModalLabel">Cookie Policy</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        We arent doing any deliveries at this moment ,keep visiting our site for  updates
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand" to="/">
          <img src="https://i.ibb.co/9rR4Bjj/Royal.png" alt="Royal Footwear" width="50" height="50">
        </router-link>
        
        <!-- Toggler/collapsible Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Men</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Women</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Kids</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Profile">Profile</router-link>
            </li>
          </ul>
  
          <!-- Cart icon -->
          <router-link class="nav-link" to="/cart">
            <i class="bi bi-cart"><img src="https://i.ibb.co/SsH8Sbs/icons8-shopping-bag.gif" alt="Royal Footwear" width="50" height="50"></i>
          </router-link>
          
          <!-- Logout button -->
          <button v-if="$store.state.loggedIn" @click="logout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Logout action
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
.navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.navbar-nav .nav-item {
  flex: 1; /* Each nav item takes equal space */
  text-align: center; 
  font-family: monospace;
  font-size: 20px;
  font-weight: 200; /* Center aligns the text */
}

/* Add more styles as needed */

.modals {
  display: flex;
  justify-content: space-around;
  background: #070707;
  padding: 3px;
}

.modals a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.modals a:hover {
  text-decoration: underline;
}
</style>
