<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Notes />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Notes from './components/Notes.vue'

export default {
  name: 'app',
  components: {
    Notes
  }
}
</script>

  <!-- 
  name of the script would be the componet you are exporting
  data is similar to state in react
  reset the state by setting todo to an empty string every time after you add a new todo
  -->

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
