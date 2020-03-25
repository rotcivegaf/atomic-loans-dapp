import Web3 from "web3";

export async function instanceWeb3() {
  let web3Instance = null;

  if (window.ethereum) {
    web3Instance = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
    } catch (error) {
      web3Instance = null;
      throw new Error("denied");
      // User denied account access...
    }
    return web3Instance;
  } else if (window.web3) {
    // Legacy dapp browsers...
    web3Instance = new Web3(window.web3.currentProvider);
    return web3Instance;
  }

  // Non-dapp browsers...
  console.log(
    "Non-Ethereum browser detected. You should consider trying MetaMask!"
  );
  throw new Error("MetaMask missing");
}

export function web3() {
  return Web3;
}
