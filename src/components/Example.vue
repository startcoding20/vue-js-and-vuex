<template>
<div>
  <h3>Example component</h3>
    <div>{{appName}}</div>
    <div>{{appCounter}}</div>
    <input type="text" placeholder="example typing..." v-model="message"/>
    <h3>{{getMsg}}</h3>
    <button v-on:click="submit">submit</button>
</div>
</template>
<script>
import { ACTION_APP_MESSAGE } from './../store/example.store'
export default {
  name: 'Example',
  props:{
      msg:String
  },
  data: function(){
    return{message:''}
  },
  methods :{
    submit: function(){
      this.$store.dispatch(ACTION_APP_MESSAGE,this.message)
    }
  }, 
  computed: {
    appCounter: function() {
      return this.$store.getters.getCounter
    },
    appName: function() {
      return this.$store.getters.getName
    },
    getMsg: function() {
      return this.$store.getters.getMsg
    }
  },
}
</script>