<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th>
          <span>Signatures</span>
        </th>
        <th>Signer</th>
        <th>Operator</th>
        <th>Token</th>
        <th>Fee %</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="s in signatures"
        :key="s.vrs"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="{ name: 'SignatureDetail', params: { vrs: s.vrs } }"
            >{{ s.vrs | shortVrs }}</router-link
          >
        </td>
        <td>
          <a
            class="hover:underline text-green-600"
            :href="`https://etherscan.io/address/${s.signer}`"
            >{{ s.signer | shortAddress }}</a
          >
        </td>
        <td>
          <a
            class="hover:underline text-green-600"
            :href="`https://etherscan.io/address/${s.operator}`"
            >{{ s.operator | shortAddress }}</a
          >
        </td>
        <td>
          <a
            class="hover:underline text-green-600"
            :href="`https://etherscan.io/address/${s.token}`"
            >{{ s.token | shortAddress }}</a
          >
        </td>
        <td>{{ s.fee | basePorcent }}</td>
        <td>123445</td>
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

<style scoped>
td {
  padding: 5px 30px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 5 px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
