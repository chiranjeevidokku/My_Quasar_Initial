<template>
<q-page-sticky expand position="top">
  <q-card class="full-width shadow-7">
    <div class="q-pa-md row flex justify-around">
    
        <q-card class="qsize bg-blue">
          <div class="text-h6 text-center">HOME</div>
        </q-card> 
        <q-card class="qsize bg-pink">
          <div class="text-h6 text-center">CONTENT</div>
        </q-card> 
        <q-card class="qsize bg-orange">
          <div class="text-h6 text-center">DETAILS</div>        </q-card>
      
        <q-card class="qsize bg-red">
          <div class="text-h6 text-center">PLANS</div>        </q-card> 
    </div>
       
  </q-card>
  </q-page-sticky>  
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'k-pi'
})
</script>
<style scoped>
  .qsize{
    width: 24%;
  }
</style>
