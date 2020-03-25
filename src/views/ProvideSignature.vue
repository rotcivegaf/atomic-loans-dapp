<template>
  <form class="relative">
    <div>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          @change="onSelect($event)"
          v-model="optionSelected"
        >
          <option v-for="o in options" :value="o" :key="o">{{ o }}</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>

      <div class="container py-2">
        <div v-for="(i, index) in inputs" :key="index">
          <input
            :class="
              i.valid == null
                ? 'border rounded py-1 px-3 my-1'
                : i.valid
                ? 'border-2 rounded py-1 px-3 my-1 border-green-600'
                : 'border-2 rounded py-1 px-3 my-1 border-red-600'
            "
            :id="i.items"
            :type="i.type"
            :placeholder="i.text"
            @change="onInputChange($event, i)"
          />
        </div>
      </div>

      <standard-button
        class="row flex right-0 bottom-0"
        @custom-click="goToCoin(a.id)"
        :title="optionSelected | getFirstWord"
      />
    </div>
  </form>
</template>

<script>
import web3Utils from "web3-utils";
//import instanceWeb3 from "@/utils/web3.js";
import StandardButton from "@/components/StandardButton";

export default {
  name: "ProvideSignature",

  components: { StandardButton },

  data() {
    return {
      optionSelected: "",
      options: ["Sign Transaction", "Provide as Signature", "Provide as VRS"],
      inputs: []
    };
  },

  created() {
    this.optionSelected = this.options[0];
    this.onSelect({ target: { value: this.optionSelected } });
  },

  methods: {
    onInputChange(event, input) {
      switch (input.type) {
        case "signature":
          input.valid =
            event.target.value.length === 132 &&
            web3Utils.isHexStrict(event.target.value);
          break;
        case "address":
          try {
            event.target.value = web3Utils.toChecksumAddress(
              event.target.value
            );
            input.valid = true;
          } catch (error) {
            input.valid = false;
          }
          break;
        case "bytes32":
          input.valid =
            event.target.value.length === 66 &&
            web3Utils.isHexStrict(event.target.value);
          break;
        case "s":
          input.valid =
            event.target.value === "0" || event.target.value === "1";
          break;
        case "number":
          // TODO
          input.valid = true;
          break;
      }
    },

    onSelect(event) {
      switch (event.target.value) {
        case this.options[0]:
          this.inputs = [
            { text: "Operator", type: "address", valid: null },
            { text: "Token", type: "address", valid: null },
            { text: "Fee", type: "number", valid: null },
            { text: "Amount", type: "number", valid: null }
          ];
          break;
        case this.options[1]:
          this.inputs = [
            { text: "Operator", type: "address", valid: null },
            { text: "Signature", type: "signature", valid: null },
            { text: "Token", type: "address", valid: null },
            { text: "Fee", type: "number", valid: null },
            { text: "Amount", type: "number", valid: null }
          ];
          break;
        case this.options[2]:
          this.inputs = [
            { text: "Operator", type: "address", valid: null },
            { text: "V", type: "bytes32", valid: null },
            { text: "R", type: "bytes32", valid: null },
            { text: "S", type: "s", valid: null },
            { text: "Token", type: "address", valid: null },
            { text: "Fee", type: "number", valid: null },
            { text: "Amount", type: "number", valid: null }
          ];
          break;
      }
    }
  }
};
</script>
