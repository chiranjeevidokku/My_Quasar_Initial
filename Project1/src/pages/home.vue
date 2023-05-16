<template>
<div class="" style="">
    <!-- <PagesForProps 
    :data="vars"
    :date="variable"/> -->
  <PagesForProps @emitArr="emitFun" />
</div>
</template>

<script>
import { defineComponent } from 'vue'
import PagesForProps from '../components/PagesForProps.vue'


export default defineComponent({
  components: { PagesForProps },
  name: 'homePage',
  data(){
    return{
      vars:[
        {1:"one"},
        {2:"Two"},
        {3:"Three"},
        {4:"Four"}    
      ],
      variable:[
        {6:"Six"},
        {7:"Seven"},
        {8:"Eight"},
        {9:"Nine"}  
      ]
    }
  },
  methods:{
    emitFun(payload){
      console.log(payload.emitArr[0])
    }

  }
})
</script>
<style scoped>
  
</style>
