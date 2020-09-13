<template>
    <div>
    <h1>{{data}}</h1>
    </div>
</template>


<script>
export default {
    data(){
        return{
            data:''
        }
    },
   methods:{
    getData(){
    fetch("https://www.potterapi.com/v1/sortingHat")
    .then(response => response.json())
    .then((data) =>{
    console.log(data)

    }
    )

    },
    getCharachter(){
    fetch("https://www.potterapi.com/v1/characters?key=$2a$10$OnDLrqfLwjvWEAmPcB7qiOrTlge1e1C7jco6E4CTc8z3WaXiaGSbm")
    .then(response => response.json())
    .then((data) =>{
    console.log(data[0].name)})

    },

    }
}
</script>