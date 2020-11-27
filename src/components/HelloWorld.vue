<template>
  <div>
    <h3>HelloWorld component</h3>
    <p>Counter: <strong class="counter">{{ appCounter }} : {{ appName }}</strong></p>
    <div>
      <button type="button" @click="increaseAppCounter()">Increase by 1</button> 
      <button type="button" @click="decreaseAppCounter()">Decrease by 1</button> 
    </div>
    <input type="text" placeholder="typing..." v-model="name" v-on:input="namechange($event)"/>
  </div>
</template>

<script>
import { ACTION_APP_INCREMENT, ACTION_APP_DECREMENT, ACTION_APP_NAME } from './../store/app.store'

export default {
  name: 'HelloWorld',
  data: function(){
    return{name:''}
  },
  computed: {
    appCounter: function() {
      return this.$store.getters.getCounter
    },
    appName: function() {
      return this.$store.getters.getName
    }
  },
  methods: {
    namechange: function(event){
      this.$store.dispatch(ACTION_APP_NAME,event.target.value)
    },
    increaseAppCounter: function() {
      this.$store.dispatch(ACTION_APP_INCREMENT)
    },
    decreaseAppCounter: function() {
      this.$store.dispatch(ACTION_APP_DECREMENT)
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {
  color: #42b983;
}
</style>
