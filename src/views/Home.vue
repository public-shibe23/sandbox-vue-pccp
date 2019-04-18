<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-6">
        <user1 v-if="isInput" @update="updateUserInfo" />
        <user2
          v-if="isConfirm"
          :request="request"
          @register="registerUserInfo"
        />
        <user3 v-if="isResister" />
      </div>
    </div>
  </div>
</template>

<script>
import user1 from "@/components/user1.vue";
import user2 from "@/components/user2.vue";
import user3 from "@/components/user3.vue";

export default {
  name: "home",
  components: {
    user1,
    user2,
    user3
  },
  data: function() {
    return {
      request: {},
      status: "input"
    };
  },
  computed: {
    isInput() {
      return this.status === "input";
    },
    isConfirm() {
      return this.status === "confirm";
    },
    isResister() {
      return this.status === "register";
    }
  },
  methods: {
    updateUserInfo(data) {
      this.request = data;
      this.status = "confirm";
    },
    async registerUserInfo() {
      await this.$store.dispatch("user/POST_USER", this.request);
      this.status = "register";
    }
  }
};
</script>

<style scoped>
.inner {
  margin: 2em 0;
}
</style>
