import axios from "axios";

const atomicErc721LoanAddress = "0xF6F8e3C079f8F71BE39a9046DDad5F9E591d2e74";
const urlBase = "https://signature-vault.herokuapp.com/";

async function getSignatures() {
  try {
    const ret = await axios.get(urlBase + "signatures/");
    return ret.data;
  } catch (error) {
    console.log(error);
  }
}

async function getSignature(sig) {
  console.log(urlBase + "signature/" + sig);
  try {
    const ret = await axios.get(urlBase + "signature/" + sig);
    return JSON.parse(ret.data);
  } catch (error) {
    console.log(error);
  }
}

async function saveSignature(signature) {
  axios
    .post(urlBase + "addSignature/", signature)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default {
  atomicErc721LoanAddress,
  getSignatures,
  getSignature,
  saveSignature
};
