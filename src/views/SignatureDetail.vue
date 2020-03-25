<template>
  <div>
    <beat-loader
      :loading="isLoading"
      :color="'#68d319'"
      :size="50"
      :margin="'6px'"
    />
    <div v-if="!isLoading">
      {{ signature }}
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";

export default {
  name: "SignatureDetail",

  data() {
    return {
      isLoading: false,
      signature: {}
    };
  },

  created() {
    this.getSignature();
  },

  methods: {
    getSignature() {
      this.isLoading = true;
      const vrs = this.$route.params.vrs;
      api
        .getSignature(vrs)
        .then(signature => (this.signature = signature))
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
