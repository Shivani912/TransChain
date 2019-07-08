const ethers = require('ethers')
var fs  = require('fs');

const abi = JSON.parse(fs.readFileSync('Transcript_sol_transcriptVerification.abi').toString())
const bytecode = JSON.parse(fs.readFileSync('Transcript_sol_transcriptVerification.bin').toString())

const provider = ethers.getDefaultProvider('ropsten')

let contractAddress
let privateKey
let contract
let wallet
let contractWithSigner

// async function register(pk) {
//     wallet = new ethers.Wallet(pk, provider)
//     let factory = new ethers.ContractFactory(abi, bytecode, wallet)
//     let contract = await factory.deploy()
//     contractAddress = contract.address
//     await contract.deployed()
//     console.log(contractAddress)
//     // return contractAddress
// }
// register('0xD8A0B1144A27811ECF01841B323255B510AF23A7AD31B155E898F10BADAC017D')

function login(contractAddr, pk) {
    contractAddress = contractAddr
    privateKey = pk

    contract = new ethers.Contract(contractAddress, abi, provider)
    wallet = new ethers.Wallet(privateKey, provider)
    contractWithSigner = contract.connect(wallet)
}

async function addTranscript(JSONObj){
    try{
        let string = JSON.stringify(JSONObj)
        let hex = ethers.utils.hashMessage(string)
        // console.log(hex)

        let hashedData = ethers.utils.keccak256(hex)

        let tx = await contractWithSigner.addTranscript(hashedData)
        let txWait = await tx.wait()
        let transcriptIDHex = txWait.logs[0].data.toString()
        // console.log(parseInt(transcriptID))
        let transcriptIDNum = parseInt(transcriptIDHex) - 1
        return transcriptIDNum
    }
    catch(err) {
        // console.log(err)
        return err.message
    }
    
}

async function verifyTranscript(JSONObj, id) {
    try{

        let string = JSON.stringify(JSONObj)
        let hex = ethers.utils.hashMessage(string)
        // console.log(hex)

        let hashedData = ethers.utils.keccak256(hex)

        let tx = await contractWithSigner.isTranscriptAuthentic(id, hashedData)
        // console.log(typeof(tx))
        // console.log(tx)
        return tx
    }
    catch(err) {
        
        if(err.reason){
            if(err.reason.toString() == "Invalid ID")
                // console.log("bad ID")
                return "bad ID"
            if(err.reason.toString() == "Transcript not authentic")
                // console.log("bad transcript")
                return "bad transcript"
        }
        else {
            console.log(err)
        }
    }
}

// login('0x76045a741daf7c761861c1123bf6d7ea7338aa15','0xD8A0B1144A27811ECF01841B323255B510AF23A7AD31B155E898F10BADAC017D')
// addTranscript({'ID': 123, 'Name': 'abc'})
// verifyTranscript({'ID': 123, 'Name': 'abc'})