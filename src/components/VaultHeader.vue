<template>
  <header>
    <nav class="bg-teal-500 p-6">
      <div class="flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <router-link
            :to="{ name: 'Home' }"
            class="block font-semibold text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >Signature Vault</router-link
          >
          <router-link
            :to="{ name: 'ProvideSignature' }"
            class="block font-semibold text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >Provide your signature</router-link
          >
          <router-link
            :to="{ name: 'About' }"
            class="
          font-semibold text-lglg:inline-block lg:mt-0 text-teal-200 hover:text-white
          absolute right-0 tracking-tight mx-8"
            >About</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "VaultHeader"
};
</script>
