<template>
   <div id="app">
      <title-screen />
      <b-button>Test</b-button>
   </div>
</template>

<script>
import TitleScreen from "./components/TitleScreen.vue";

export default {
   name: "App",
   components: {
      TitleScreen,
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
