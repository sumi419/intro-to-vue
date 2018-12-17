<template>
<div class='container'>
  <div class='notes-wrapper' v-for="(note, index) in notes" :key="index">
    {{note.title}}
    {{note.textBody}}
  </div>
</div>
</template>



<script>
import axios from 'axios'
export default {
  
  name: 'Notes',
  data() {
    return {
      note: '',
      notes: []
  }
  },
  created() {
        axios
          .get(`https://suminotes-api.herokuapp.com/`)
          .then(res => {
            this.notes = res.data;
          })
          .catch(err => {
            console.log(err)
          });
      },
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  }

.notes-wrapper {
         display: grid;
         justify-content: center;
         text-decoration: none;
         @media (min-width: 600px) {grid-template-columns: repeat(2, 1fr);}
         @media (min-width: 900px) {grid-template-columns: repeat(3, 1fr);}

}
</style>