<template>
  <form class="relative">
    <div>
      <div class="relative">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          v-model="optionSelected"
        >
          <option
            v-for="option in options"
            v-bind:value="option"
            :key="option"
            >{{ option }}</option
          >
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
        <div class="my-2">
          <input
            class="border rounded py-1 px-3"
            id="Operator"
            type="text"
            placeholder="Operator"
          />
        </div>
        <div class="my-2">
          <input
            class="border rounded py-1 px-3"
            id="Token"
            type="text"
            placeholder="Token"
          />
        </div>
        <div class="my-2">
          <input
            class="border rounded py-1 px-3"
            id="Fee"
            type="text"
            placeholder="Fee"
          />
        </div>
        <div class="my-2">
          <input
            class="border rounded py-1 px-3"
            id="Amount"
            type="text"
            placeholder="Amount"
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
import StandardButton from "@/components/StandardButton";

export default {
  name: "ProvideSignature",

  components: { StandardButton },

  data() {
    return {
      optionSelected: "",
      options: ["Sign Transaction", "Provide as Signature", "Provide as VRS"]
    };
  },

  created() {
    this.optionSelected = this.options[0];
  },

  methods: {}
};
</script>
