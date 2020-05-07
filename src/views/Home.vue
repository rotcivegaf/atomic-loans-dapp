<template>
  <div class="container mt-5">
    <beat-loader
      class="text-center"
      :loading="isLoading"
      :color="'#428bca'"
      :size="50"
      :margin="'6px'"
    />
    <signature-table v-if="!isLoading" :signatures="signatures" />
  </div>
</template>

<script>
import SignatureTable from "@/components/SignatureTable";
import api from "@/utils/api";

export default {
  name: "Home",

  components: { SignatureTable },

  data() {
    return {
      isLoading: false,
      signatures: []
    };
  },

  created() {
    this.isLoading = true;
    api
      .getSignatures()
      .then(signatures => this.signatures = signatures)
      .finally(() => this.isLoading = false);
  }
};
</script>
