<template>
<div class='container'>
 <Note v-for="(note) in notes" :key="note.id" :note="note" class='notes-wrapper'></Note>
</div>
</template>

// v-bind is how you pass props :note is shorthand


<script>
import axios from 'axios'
import Note from './Note.vue'
export default {
  
  name: 'Notes',
  components: {Note}, 
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