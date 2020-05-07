<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4" />

      <div class="col-sm-4">
        <form class="review-form" @submit.prevent="onSubmit">
          <div class="mb-2">
            <select
              class="bg-white px-2 py-2 rounded"
              @change="onSelect($event)"
              v-model="optionSelected"
            >
              <option v-for="o in options" :value="o" :key="o">{{ o }}</option>
            </select>
          </div>

          <div
            class="py-1 pr-8"
            v-for="(i, index) in inputs"
            :key="index"
            v-show="i.show"
          >
            <input
              :class="
                i.valid == null
                  ? 'rounded py-1 px-3'
                  : i.valid
                  ? 'rounded py-1 px-3 text-success'
                  : 'rounded py-1 px-3 text-danger'
              "
              :id="i.items"
              :type="i.type"
              :placeholder="i.text"
              v-model="i.value"
              @change="onInputChange($event, i)"
            />
          </div>
          <standard-button class="mt-3" type="submit" :title="buttonName" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import web3Manager from "@/utils/web3Manager.js";
import api from "@/utils/api";
import StandardButton from "@/components/StandardButton";

export default {
  name: "ProvideSignature",

  components: { StandardButton },

  data() {
    return {
      web3: undefined,
      user: undefined,
      optionSelected: "",
      options: ["Sign Transaction and Provide", "Provide a Signature"],
      buttonName: "Sign & Provide",
      inputs: {
        sig: { type: "signature", text: "Signature", valid: null },
        token721: { type: "address", text: "Token721", valid: null },
        tokenId: { type: "hex32", text: "TokenId", valid: null },
        token20: { type: "address", text: "Token20", valid: null },
        price: { type: "hex32", text: "Price", valid: null },
        expiry: { type: "hex32", text: "Expiry", valid: null }
      }
    };
  },

  async created() {
    this.web3 = await web3Manager.instanceWeb3();
    this.user = await web3Manager.getUser(this.web3);

    this.onSelect({ target: { value: this.options[0] } });
  },

  methods: {
    onInputChange(event, input) {
      if (event.target.value === "") {
        input.valid = null;
        return;
      }

      switch (input.type) {
        case "signature":
          input.valid =
            event.target.value.length === 132 &&
            this.web3.utils.isHexStrict(event.target.value);
          break;
        case "address":
          try {
            event.target.value = this.web3.utils.toChecksumAddress(
              event.target.value
            );
            input.valid = true;
          } catch (error) {
            input.valid = false;
          }
          break;
        case "hex32":
          // TODO check expiry and fee
          input.valid = true;
          break;
      }

      if (!input.valid) {
        window.alert("Invalid data");
      }
    },

    onSelect(event) {
      Object.keys(this.inputs).forEach(i => (this.inputs[i].show = true));
      this.optionSelected = event.target.value;

      switch (event.target.value) {
        case this.options[0]: // Sign Transaction and Provide
          this.inputs.sig.show = false;

          this.buttonName = "Sign & Provide";
          break;
        case this.options[1]: // Provide a Signature
          this.buttonName = "Provide";
          break;
      }
    },

    async onSubmit() {
      const args = {};
      try {
        args.contract = api.atomicErc721LoanAddress;
        args.token721 = this.inputs.token721.value;
        args.tokenId = this.web3.utils.toHex(this.inputs.tokenId.value);
        args.token20 = this.inputs.token20.value;
        args.price = this.web3.utils.toHex(this.inputs.price.value);
        args.expiry = this.web3.utils.toHex(this.inputs.expiry.value);

        args.loanHash = this.web3.utils.soliditySha3(
          { t: "address", v: args.contract },
          { t: "address", v: args.token721 },
          { t: "uint256", v: args.tokenId },
          { t: "address", v: args.token20 },
          { t: "uint256", v: args.price },
          { t: "uint256", v: args.expiry }
        );
      } catch (error) {
        window.alert("Invalid data");
      }

      switch (this.optionSelected) {
        case this.options[0]: // Sign Transaction and Provide
          args.sig = await this.web3.eth.sign(args.loanHash, this.user); // TODO: fix it, the signature its wrong
          break;
        case this.options[1]: // Provide a Signature
          args.sig = this.inputs.sig.value;
          break;
      }

      args.owner = this.web3.eth.accounts.recover(args.loanHash, args.sig);
      if (args.owner === this.user) await api.saveSignature(args);
      else window.alert("Ownership error");
    }
  }
};
</script>
