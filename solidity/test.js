const transcriptVerification = require('Embark/contracts/transcriptVerification');
const _transcriptHash = "0x54e6289e14c7b0e7ad9acc2dfc4c1e3d027d0eef7f5c4c3fe7c292761d0e06a6"
const _fakeTranscriptHash = "0x54e6289e14c7b0e7ad9acc2dfc4c1e3d027d0eef7f5c4c3fe7c292761d0e06a9"

let accounts;

config({
  contracts: {
    "transcriptVerification": {}
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("transcriptVerification", function () {
  this.timeout(0);
  // constructor
  it("Constructor runs successfully", async function () {
    let address = await transcriptVerification.options.address;
    assert.ok(address);
  });

  it("Owner adds transcript hash", async function () {
    let result = await transcriptVerification.methods.addTranscript(_transcriptHash).send();
    assert.ok(result)
  });

  it("Non-owner adds transcript hash", async function () {
    try {
      await transcriptVerification.methods.addTranscript(
        _transcriptHash).send({from:accounts[1]});
      assert(false);
    } catch (error) {
      assert(error.message.includes("you are not the owner"))
    }
  });

  it("verifier checks transcript's authenticity is correct", async function () {
    let result = await transcriptVerification.methods.isTranscriptAuthentic(0, _transcriptHash).send();
    assert.ok(result);
  });

  it("verifier checks if transcript authenticity is incorrect", async function () {
    try{
      await transcriptVerification.methods.isTranscriptAuthentic(0,_fakeTranscriptHash).send();
      assert(false);
    }
    catch(error) {
      assert(error.message.includes("Transcript not authentic"))
    }
  });

  it("checks if transcript_id is incorrect", async function () {
    try{
      await transcriptVerification.methods.isTranscriptAuthentic(50,_transcriptHash).send();
      assert(false);
    }
    catch(error) {
      assert(error.message.includes("Invalid ID"))
    }
  });
});