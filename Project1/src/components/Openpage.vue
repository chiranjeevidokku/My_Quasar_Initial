<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      separator="cell"
    />
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'open-page',
  data(){
    return {
      columns : [
        {name: 'name',required: true,label: 'Name',align: 'left',field: "name",sortable: true},
        {name: 'address',required: true,label: 'Address',align: 'left',field: row => row.address.city, sortable: true},
        {name: 'company',required: true,label: 'Company',align: 'left',field: row => row.company.name,sortable: true},
        {name: 'website',required: true,label: 'Website',align: 'left',field: "website",sortable: true}
        ],
      rows:[]
    }
  },
  methods:{
    
  },
  mounted(){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data)
        this.rows=response.data
      }
        
        )
      .catch((error) => console.log(error));
     
  },
})
</script>
