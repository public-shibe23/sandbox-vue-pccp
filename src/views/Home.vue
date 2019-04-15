<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-6">
        <member1 :products="products" @fetch="fetchProducts"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import member1 from "@/components/member1.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
   member1 
  },
  computed: mapState({
    products: state => state.member.products
  }),
  methods: {
    fetchProducts() {
      this.$store.dispatch("member/FETCH_PRODUCTS");
    }
  }
};
</script>

<style scoped>
.inner {
  margin: 2em 0;
}
</style>
