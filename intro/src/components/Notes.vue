<template>
  <div>
  {{notes.title}}
  </div>
</template>



<script>
export default {
  name: 'Notes',
  data() {
    return {
      note: '',
      notes: [
        { "title": "learn Vue"},
      ]
    }
  },
}
</script>