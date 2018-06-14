const LEDGER_SIGNATURE_RESPONSE = require("./constants").LEDGER_SIGNATURE_RESPONSE;
const LEDGER_SIGNATURE_REQUEST = require("./constants").LEDGER_SIGNATURE_REQUEST;
const byteArray2hexStr = require("@tronscan/client/src/utils/bytes").byteArray2hexStr;
const {ipcRenderer} = window.require('electron');

export default class LedgerSigner {

  constructor() {
    console.log("LEDGER ACTIVATED");
  }

  async signTransaction(transaction) {

    console.log("GOT LEDGER SIGN REQUEST");

    return new Promise(resolve => {

      ipcRenderer.once(LEDGER_SIGNATURE_RESPONSE, (event, arg) => {
        console.log("GOT LEDGER RESPONSE", arg);

        let raw = transaction.getRawData();
        let uint8Array = Uint8Array.from(arg.hex);
        let count = raw.getContractList().length;
        for (let i = 0; i < count; i++) {
          console.log("ADDING", uint8Array);
          transaction.addSignature(uint8Array);
        }

        resolve({
          transaction,
          hex: byteArray2hexStr(transaction.serializeBinary()),
        });
      });

      console.log("SENDING TO LEDGER");

      ipcRenderer.send(LEDGER_SIGNATURE_REQUEST, JSON.stringify({
        transaction: {
          hex: byteArray2hexStr(transaction.getRawData().serializeBinary()),
        }
      }));
    });
  }
}