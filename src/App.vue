<template>
  <main>
    <vault-header />

    <router-view class="container px-5 sm:px-20 py-20 flex justify-center" />
  </main>
</template>

<script>
import VaultHeader from "@/components/VaultHeader";

export default {
  name: "App",
  components: { VaultHeader }
};
</script>
