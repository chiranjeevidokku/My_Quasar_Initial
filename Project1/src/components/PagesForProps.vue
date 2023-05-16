<template>
<div>
    <div class="width=500px length=500px border 1px solid black">
    <!-- <h6>{{ data }}</h6>
    <h6>{{ date }}</h6> -->
    <button @click="emitData">Click</button>
  </div>
</div>
  
</template>

<script>
import { defineComponent } from 'vue'
// import {home} from '../pages/home.vue'


export default defineComponent({
  name: 'PageForProps',
//   components:{
//     home
//   },
  data(){
    return{
        obj:{
            emitArr:[1,2,3,4,5]
        },
    }
  },
  methods:{
    emitData(){
        this.$emit('emitArr',this.obj)
    }
  },
  props:{
    data:Array,
    date:Array
  }
})
</script>
<style scoped>
</style>
