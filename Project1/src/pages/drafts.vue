<template>
  <div class="parent bg-red q-pa-sm flex justify-start ">
    <comptName />
    
    <!-- <comptName /> -->

  </div>    
</template>
<script>
import { defineComponent } from 'vue'
import  comptName from '../components/ComptName.vue'

export default defineComponent({
    name: 'draftsPage',
    components: { comptName },
    
    data(){
        return {
            
        }
    },
})
</script>
<style scoped>
.parent{
    /* background: #5889d3; */
    /* padding: 2px; */
    /* border: 2px solid black; */
    /* display: flex; */
    /* justify-content: space-around; */
}
</style>
