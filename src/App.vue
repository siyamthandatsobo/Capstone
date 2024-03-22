<template>
  <Spinner v-if="loading" />
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  <footercomp />
</template>

<script>
  import Navbar from './components/navComp.vue';
  import Spinner from './components/SpinnerComp.vue';
  import footercomp from './components/footerComp.vue';
  export default {
  components:{
       Navbar,
       Spinner,
       footercomp
      
      
    },
    data() {
          return{
              loading:true,
          };
         },
         mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },

  methods: {
    logout() {
      // Logout from
      this.$store.dispatch('logout');
    }
  }
}
</script>
<style>

</style>
