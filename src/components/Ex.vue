<template>
  <div>
    <h3>Hi Ex component</h3>
    <input type="text" placeholder="example typing..." v-model="message" />
    <h3>{{ getMsg }}</h3>
    <Child1 msg="i am in child comp" :forChildObject="forChildObject"/>
    <button v-on:click="submit">submit</button>
  </div>
</template>
<script>
import { ACTION_APP_MESSAGE } from "./../store/example.store";
import Child1 from './childComponent/child1.vue'
export default {
  name: "Ex",
  components: {
    Child1,
  },
  props: {
    msg: String,
  },
  data: function () {
    return { 
      message: "",
      forChildObject:{
          name:'manny',
          active:true
      }
      };
  },
  methods: {
    submit: function () {
      this.$store.dispatch(ACTION_APP_MESSAGE, this.message);
    },
  },
  computed: {
    getMsg: function () {
      return this.$store.getters.getMsg;
    },
  },
};
</script>