<template>
<div>
    <q-card 
    inline style="width: 400px" 
    class="my-card 
    fixed-center">
    <div
    class="text-center
    text-weight-bolder
    q-pt-md"
    >CAlculatoR</div>
    <q-card-section>
       <q-input 
       type="number" 
       filled 
       v-model="num1" 
       :dense="dense"
       class="q-pa-md" />
       <q-select 
       v-model="model" 
       :options="options"
       class="q-pa-md"  />
       <q-input 
       type="number" 
       filled 
       v-model="num2" 
       :dense="dense"
       class="q-pa-md" />
    </q-card-section>
    <div>
        <div class="row flex justify-around q-pb-sm">
            <div><q-btn 
            style="width: 100px; height: 30px"
            color="primary" 
            label="Calculate" 
            @click="calcu(this.model)"
             /></div>
            <div class="text-h6 text-center text-weight-bold">Result= {{res}}</div>
        </div>   
    </div>
    </q-card>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'mul-ti',
    data(){
        return{
            num1:'',
            num2:'',
            options:[
                'Additon',
                'Subsraction',
                'Multiplication',
                'Division'
            ],
            model:'',
            res:'',
        }
    },
    methods:{
        calcu(fun){
            if(this.num1 && this.num2 && fun){
                if(fun=="Additon"){
                this.res=parseInt(this.num1)+parseInt(this.num2)
                }else if(fun=="Subsraction"){
                    this.res=this.num1-this.num2
                }else if(fun=="Multiplication"){
                    this.res=this.num1*this.num2
                }else if(fun=="Division" && this.num2>0){
                    this.res=this.num1/this.num2
                }else{
                    alert("Something by zero is undefined ")
                }
            }else{
                alert("Plz select, entries should not be empty")
            }
        }
    }
   
})
</script>
<style scoped>

</style>
