<template>
  <router-link exact :to="{name:'viewnote', params:{id: note.id}}" class='note'>
    <h2 class='note-title'>{{note.title}}</h2>
    <p>{{note.textBody}}</p>
  </router-link>
</template>

<script>
export default {
  name: "Note",
  props: ["note"]
};
</script>

<style>
.note {

  align-self: center;
  justify-self: center;
  width: 21%;
  height: 150px;
  border: 2px solid #979797;
  background-color: white;
  text-decoration: none;
  padding: 20px;
  margin: 20px;
  color: #4a4a4a;
@media(max-width: 500px) {
  .cards {
    width: 90%
  }
}
}

.note-title {
  padding: 5%;
  border-bottom: 2px solid gray;
  font-weight: 900;
}
</style>