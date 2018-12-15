<template>
<div>
  <div v-for="(note, index) in notes" :key="index">
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