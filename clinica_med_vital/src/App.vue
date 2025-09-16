<template>
<Header/>
<Main1/>
</template>
<script>
import Header from './components/Header.vue';
import Main1 from './components/Main1.vue';

export default{
  name: 'App',
  components:{
    Header,
    Main1
  }
}
</script>
<style>
body{
  background-color: whitesmoke;
  font-family: 'Roboto', sans-serif;
}
</style>