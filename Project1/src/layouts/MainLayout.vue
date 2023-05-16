<template>
  <q-layout view="hHh Lpr lff" style="height: 300px" class="shadow-2">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Newee
        </q-toolbar-title>
        <q-separator dark vertical />
        <q-btn 
        stretch 
        flat 
        label="Login"
        to="/loginpage" />
        <q-separator dark vertical />
        <q-btn stretch flat label="Sign up" />
      </q-toolbar>
    </q-header>
    <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <q-item
        active clickable v-ripple
        to="/home">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>

        </q-item>
        <q-item 
        active clickable v-ripple
        to="/content">
          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <q-item-section>
            Content
          </q-item-section>
        </q-item>

        <q-item 
        active clickable v-ripple
        to="/details"
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section>
            Details
          </q-item-section>
        </q-item>

        <q-item 
        clickable v-ripple
        to="/plans"
        >
          <q-item-section avatar>
            <q-icon name="send" />
          </q-item-section>

          <q-item-section>
            Plans
          </q-item-section>
        </q-item>

        <q-separator />

        <q-item 
        clickable v-ripple
        to="/computed">
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section>
            Drafts
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>

    <q-page-container>
      <br>
      <br>
      <br>
      <br>
      <q-separator />
      <br>
        <router-view /> 
        <kpi /> 
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import kpi from '../components/kpi.vue';




export default defineComponent({
  name: 'MainLayout',
  components:{
    kpi
  },
  data(){
    return{
      miniState:true,
    }
  }
})
</script>
