const ethers = require('ethers')
var fs  = require('fs');

const abi = JSON.parse(fs.readFileSync('Transcript_sol_transcriptVerification.abi').toString())

const provider = ethers.getDefaultProvider('ropsten')

const contractAddress = '0x76045a741daf7c761861c1123bf6d7ea7338aa15'

let contract = new ethers.Contract(contractAddress, abi, provider)


let privateKey = '0xD8A0B1144A27811ECF01841B323255B510AF23A7AD31B155E898F10BADAC017D'

let wallet = new ethers.Wallet(privateKey, provider)

let contractWithSigner = contract.connect(wallet);


async function addTranscript(){
    try{
        let JSONObj = {
            "name": "shivani",
            "grade": "A+"
        }

        let string = JSON.stringify(JSONObj)
        let hex = ethers.utils.hashMessage(string)
        // console.log(hex)

        let hashedData = ethers.utils.keccak256(hex)

        let tx = await contractWithSigner.addTranscript(hashedData)
        let txWait = await tx.wait()
        let transcriptID = txWait.logs[0].data.toString()
        console.log(transcriptID)
    }
    catch(err) {
        console.log(err)
    }
    
}

async function verifyTranscript() {
    try{
        let JSONObj = {
            "name": "shivani",
            "grade": "A+"
        }

        let string = JSON.stringify(JSONObj)
        let hex = ethers.utils.hashMessage(string)
        // console.log(hex)

        let hashedData = ethers.utils.keccak256(hex)

        let tx = await contractWithSigner.isTranscriptAuthentic(167, hashedData)
        console.log(tx)
    }
    catch(err) {
        
        if(err.reason){
            if(err.reason.toString() == "Invalid ID")
                console.log("bad ID")
            if(err.reason.toString() == "Transcript not authentic")
                console.log("bad transcript")
        }
        else {
            console.log(err)
        }
    }
}
verifyTranscript()
// addTranscript()