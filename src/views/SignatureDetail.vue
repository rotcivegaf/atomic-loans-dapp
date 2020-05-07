<template>
  <div class="container mt-5">
    <beat-loader
      class="text-center"
      :loading="isLoading"
      :color="'#428bca'"
      :size="50"
      :margin="'6px'"
    />
    <div v-if="!isLoading">
      <div class="row">
        <div class="col-sm-4" />

        <div class="col-sm-4">
          <div class="py-1 pr-8 text-primary">
            Signature: {{ signature.sig | shortAddress }}
          </div>
          <div class="py-1 pr-8 text-primary">
            <a :href="`https://etherscan.io/address/${signature.contract}`">
              Contract: {{ signature.contract | shortAddress }}
            </a>
          </div>
          <div class="py-1 pr-8 text-primary">
            <a :href="`https://etherscan.io/address/${signature.token721}`">
              Token 721: {{ signature.token721 | shortAddress }}
            </a>
          </div>
          <div class="py-1 pr-8 text-primary">
            Token ID: {{ signature.tokenId }}
          </div>
          <div class="py-1 pr-8 text-primary">
            <a :href="`https://etherscan.io/address/${signature.token20}`">
              Token 20: {{ signature.token20 | shortAddress }}
            </a>
          </div>
          <div class="py-1 pr-8 text-primary">
            Price: {{ signature.price | toFormatPrice }}
          </div>
          <div class="py-1 pr-8 text-primary">
            Expiry: {{ signature.expiry | toDate }}
          </div>
          <div class="py-1 pr-8 text-primary">
            Loan Hash: {{ signature.loanHash | shortAddress }}
          </div>
          <div class="py-1 pr-8 text-primary">
            <a :href="`https://etherscan.io/address/${signature.owner}`">
              Owner: {{ signature.owner | shortAddress }}
            </a>
          </div>
        </div>
      </div>
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
      const sig = this.$route.params.sig;
      api
        .getSignature(sig)
        .then(signature => this.signature = signature)
        .finally(() => this.isLoading = false);
    }
  }
};
</script>
