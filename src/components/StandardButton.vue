<template>
  <button
    @click="onClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded"
  >
    <p>
      <span>{{ title }}</span>
    </p>
  </button>
</template>

<script>
export default {
  name: "StandardButton",

  props: {
    title: {
      type: String,
      default: () => ""
    }
  },

  methods: {
    onClick() {
      this.$emit("standard-click");
    }
  }
};
</script>
