<template>
  <div>
    <div class="field">
      E-mail: {{request.email}}<br>
      Name: {{request.name}}<br>
      <a class="button" @click="register">Register</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    request: {
      type: Object,
      default: {}
    }
  },

  methods: {
    register() {
      this.$emit("register");
    }
  }
};
</script>
