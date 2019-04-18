<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">E-mail</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input
              class="input is-static"
              type="email"
              :value="request.email"
              readonly
            />
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
            <input
              class="input is-static"
              type="text"
              :value="request.name"
              readonly
            />
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
              class="input is-static"
              type="email"
              value="********"
              readonly
            />
          </p>
        </div>
      </div>
    </div>

    <a class="button is-primary is-outlined" @click="register">Register</a>
  </div>
</template>

<script>
export default {
  props: {
    request: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  methods: {
    register() {
      this.$emit("register");
    }
  }
};
</script>
