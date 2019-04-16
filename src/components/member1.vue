<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">E-mail</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" type="email" name="email" maxlength="20" v-model="input.email">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Name</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input class="input" type="text" name="name" maxlength="20" v-model="input.name">
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Password</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input"
              type="password"
              name="password"
              maxlength="20"
              v-model="input.password"
            >
          </p>
        </div>
      </div>
    </div>

    <a class="button is-primary is-outlined" @click="update">Confirm</a>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      input: {
        email: "",
        name: "",
        password: ""
      }
    };
  },

  methods: {
    update() {
      this.$emit("update", this.input);
    }
  }
};
</script>
