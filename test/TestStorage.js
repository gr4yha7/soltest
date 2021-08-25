const util = require('util');
const Storage = artifacts.require("Storage");

contract("Storage", () => {
  it("should do something", async () => {
    const storageInstance = await Storage.deployed();
    console.log("Storage deployed address", storageInstance.address);
    const evmStorage = await helpers.getStorageObject(storageInstance.address)
    console.log(util.inspect(evmStorage, false, null));
  })
})

const helpers = {
  getStorageObject: async (addr) => {
    let slot = 0;
    let zeroCounter = 0;
    let storage = [];
    while (true) {
      const slotData = await web3.eth.getStorageAt(addr, slot);
      const isEmptySlot = web3.utils.toBN(slotData).isZero();
      // console.log(`Slot[${slot}] is zero`, isEmptySlot);
      if (isEmptySlot) {
        zeroCounter++;
      }
      if (zeroCounter > 10) {
        break;
      }
      storage.push({slot, data: slotData});
      slot++;
    }
    return storage;
  }
}