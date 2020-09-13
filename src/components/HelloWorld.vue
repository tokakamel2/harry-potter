<template>
  <div class="hello" >
    <h1 class="msg">{{ msg }}, {{textAsubmit}}</h1>
  <b-form-input v-model="text"  placeholder="Enter your name"  v-if="textAsubmit === ''"  style="background-color:black" ></b-form-input>
  <b-button  v-if="textAsubmit === ''" v-on:click="onSubmit" type="submit" variant="primary">OK</b-button>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  text:'',
  textAsubmit:'',

  props: {
    msg: String,
  },
  data() {

    return {
        text: '',
        textAsubmit:''
    }
  },
  methods:{
    onSubmit(){

        this.textAsubmit = this.text
        console.log(this.textAsubmit)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2c3e50;
}
.msg{
 color: #2c3e50
}
</style>
