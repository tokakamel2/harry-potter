<template>
     <div>

     <b-button  v-on:click="SortingHat" type="SortingHat" variant="primary">Sorting Hat</b-button>
     <b-button  v-on:click="Charachters" type="Charachters" variant="primary">Charachters</b-button>
     <b-button  v-on:click="Spells" type="Spells" variant="primary">Spells</b-button>

    <div v-if="sortedhome !== ''"
     style="padding-left: 590px; "
    >
     <b-card
    title='Your house is'
    :img-src= nowImg
    img-alt="Image"
    img-top
    tag="article"
    class="justify-center"
    style="width: 400px;"

  >
    <b-card-text>
        <h1>{{sortedhome}}</h1>
    </b-card-text>

  </b-card>

     </div>

   <b-table   striped hover :items="characters" :fields="fields" v-if="showTable === true" ></b-table>
   <b-table   striped hover :items="spells" :fields="fieldsOfspells" v-if="showSpells === true" ></b-table>

     </div>
</template>

<script>
export default {

    data(){
        return{
            sortedhome:'',
            characters:[],
            fields: ['name', 'role', 'house'],
            spells:[],
            showTable:false,
            showSpells:false,
            fieldsOfspells:['spell', 'effect'],
            gr:"https://i.pinimg.com/564x/b0/42/d1/b042d183b88f9b12dcea1db9f23c7c16.jpg",
            sl:"https://i.pinimg.com/564x/a0/b1/52/a0b152a19c4aabb4a56a1f646d0ed915.jpg",
            raf:"https://i.pinimg.com/564x/c4/16/7e/c4167e08eea2091a2f45fecf1e30c5d3.jpg",
            haf:"https://i.pinimg.com/564x/90/e2/77/90e277c7cfedf285092a3ddab8081cfb.jpg",
            nowImg:""
        }
    }
,
methods:{
  SortingHat(){
       this.showTable=false
       this.showSpells=false

       fetch("https://www.potterapi.com/v1/sortingHat")
    .then(response => response.json())
    .then((data) =>{
    console.log(data)
   this.sortedhome = data
   if(data === 'Ravenclaw'){
   this.nowImg=this.raf
   }else if(data === 'Hufflepuff'){
       this.nowImg = this.haf
   }else if (data === 'Gryffindor'){
       this.nowImg = this.gr
   }else if (data === 'Slytherin'){
       this.nowImg = this.sl
   }
    })
  },
  Charachters(){
      this.showTable=true
      this.sortedhome =''
      this.showSpells=false

       fetch("https://www.potterapi.com/v1/characters?key=$2a$10$OnDLrqfLwjvWEAmPcB7qiOrTlge1e1C7jco6E4CTc8z3WaXiaGSbm")
    .then(response => response.json())
    .then((data) =>{
    this.characters = data
    console.log(this.characters)

    })
  },
  Spells(){
       this.showTable=false
       this.showSpells=true
      this.characters = []
      console.log('ss',this.characters.length)
       fetch("https://www.potterapi.com/v1/spells?key=$2a$10$OnDLrqfLwjvWEAmPcB7qiOrTlge1e1C7jco6E4CTc8z3WaXiaGSbm")
    .then(response => response.json())
    .then((data) =>{
    console.log(data)
    this.spells = data
    })
  },

}
}
</script>