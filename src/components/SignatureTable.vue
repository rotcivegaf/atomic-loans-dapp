<template>
  <table class="table table-striped text-center">
    <thead>
      <tr class="text-primary">
        <th scope="col">
          <span>Signatures</span>
        </th>
        <th scope="col">Token 721</th>
        <th scope="col">Token ID</th>
        <th scope="col">Token 20</th>
        <th scope="col">Price</th>
        <th scope="col">expiry</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="s in signatures" :key="s.sig" class="text-primary">
        <td>
          <router-link
            :to="{ name: 'SignatureDetail', params: { sig: s.sig } }"
            >{{ s.sig | shortAddress }}</router-link
          >
        </td>
        <td>
          <a :href="`https://etherscan.io/address/${s.token721}`">{{
            s.token721 | shortAddress
          }}</a>
        </td>
        <td>{{ s.tokenId | toFormatId }}</td>
        <td>
          <a :href="`https://etherscan.io/address/${s.token20}`">{{
            s.token20 | shortAddress
          }}</a>
        </td>
        <td>{{ s.price | toFormatPrice }}</td>
        <td>{{ s.expiry | toDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SignatureTable",

  props: {
    signatures: {
      type: Array,
      default: () => []
    }
  }
};
</script>
