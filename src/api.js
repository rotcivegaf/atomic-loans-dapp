const dummyData = [
  {
    vrs:
      "0x303c4044d57e17e17bf77fa5bcbb1dc8587281af861ad23fbaa9f3139e3165b9af85b62b4951173b50",
    signer: "0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45",
    operator: "0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45",
    token: "0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c",
    fee: "10000"
  },
  {
    vrs:
      "0x303c4044d57e17e17bf77fa5bcbb1dc8587281af861ad23fbaa9f3139e3165b9af85b62b4951173b51",
    signer: "0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45",
    operator: "0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45",
    token: "0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c",
    fee: "12345"
  },
  {
    vrs:
      "0x303c4044d57e17e17bf77fa5bcbb1dc8587281af861ad23fbaa9f3139e3165b9af85b62b4951173b52",
    signer: "0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45",
    operator: "0x8fD00f170FDf3772C5ebdCD90bF257316c69BA45",
    token: "0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c",
    fee: "1"
  }
];

async function getSignatures() {
  await new Promise(resolve => setTimeout(resolve, 200));
  return dummyData;
}

async function getSignature(vrs) {
  await new Promise(resolve => setTimeout(resolve, 200));
  return dummyData.find(x => x.vrs === vrs);
}

export default {
  getSignatures,
  getSignature
};
