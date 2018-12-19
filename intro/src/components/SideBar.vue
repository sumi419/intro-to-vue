<template>
  <div class='container'>
    <h2>Lambda Notes</h2>
    <button>View Your Notes</button>
    <button>Create a New Note</button>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
  }
</script>

<style scoped>
.container {
   width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8d8d8;
   @media (max-width: 500px) {
    width: 100%
  }

  button {
  width: 100%;
  height: 60px;
  margin-bottom: 10%;
  background-color: #dea6af;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
  };
  }
}

</style>