<template>
  <div>
    <div class="field">
      <input class="input" type="text" name="email" maxlength="20" v-model="input.email">
      <input class="input" type="text" name="name" maxlength="20" v-model="input.name">
      <input class="input" type="password" name="password" maxlength="20" v-model="input.password">
      <a class="button" @click="update">Confirm</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: {
        email: "",
        name: "",
        password: ""
      }
    }
  },

  methods: {
    update() {
      this.$emit("update", this.input);
    }
  }
};
</script>
