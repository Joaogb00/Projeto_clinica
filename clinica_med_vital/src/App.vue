<template>
  <div>
  
    <RouterView/>
  <Footer/>
  </div>
</template>
<script>

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main1 from './components/Main1.vue';
import Main2 from './components/Main2.vue';

export default{
  name: 'App',
  components:{
    Header,
    Main1,
    Main2,
    Footer
  }
}
</script>
<style>
  *{
    font-family: sans-serif;
  }
</style>