<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse h2">
        <ul class="nav mr-auto">
          <li class="navbar-nav mr-5">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Vault</router-link
            >
          </li>
          <li class="navbar-nav h2">
            <router-link :to="{ name: 'ProvideSignature' }" class="nav-link"
              >Provide</router-link
            >
          </li>
        </ul>

        <form class="navbar-nav">
          <router-link :to="{ name: 'About' }" class="nav-link"
            >About</router-link
          >
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "VaultHeader"
};
</script>
