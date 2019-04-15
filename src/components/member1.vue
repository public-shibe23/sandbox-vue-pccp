<template>
  <div>
    <div class="field">
      <input class="input" type="text" name="email" maxlength="20" v-model="req.email">
      <input class="input" type="text" name="name" maxlength="20" v-model="req.name">
      <input class="input" type="password" name="password" maxlength="20" v-model="req.password">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => {}
    }
  },
  data: function () {
    return {
      req: {
        email: "",
        name: "",
        password: ""
      }
    }
  },

  methods: {
    fetch() {
      this.$emit("fetch");
    }
  }
};
</script>
