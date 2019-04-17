<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-6">
        <member1 v-if="isInput" @update="updateUserInfo" />
        <member2 v-if="isConfirm" :request="request" @register="registerUserInfo" />
        <member3 v-if="isResister" />
      </div>
    </div>
  </div>
</template>

<script>
import member1 from "@/components/member1.vue";
import member2 from "@/components/member2.vue";
import member3 from "@/components/member3.vue";

export default {
  name: "home",
  components: {
    member1,
    member2,
    member3
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
      await this.$store.dispatch("member/POST_USER", this.request);
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
