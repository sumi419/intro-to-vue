import Vue from 'vue'
import Router from 'vue-router'
import Notes from '@/components/Notes.vue'
import ViewNote from '@/components/ViewNote.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'notes', component: Notes},
    {path: '/viewnote/:id', name: 'viewnote', component: ViewNote}
  ]
})