<template>
  <div>
    <h3>Child1 component</h3>
    <h3>{{ msg }}</h3>
    <h4>{{forChildObject.name}}</h4>
    <h4>{{forChildObject.active}}</h4>
  </div>
</template>
<script>
export default {
  name: "Child1",
  props: {
    msg: String,
    forChildObject:Object
  }
};
</script>