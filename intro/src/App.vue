<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class='wrapper'>
      <SideBar />
      <Notes class='right-side' />
    </div>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import Notes from './components/Notes.vue'
  import SideBar from './components/SideBar.vue'

  export default {
    name: 'app',
    components: {
      Notes,
      SideBar
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
    width: 100%;
   max-width: 1000px;
   min-height: 100vh;
   margin: 0 auto;
    text-align: center;
  }

  .wrapper {
    width: 100%;
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
    }

    .right-side {
      width: 75%;
      min-height: 100vh;
      background-color: #f3f3f3;
      @media (max-width: 500px) {
        width: 100%
      }
    }
  }
</style>