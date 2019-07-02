const ethers = require('ethers')
var fs  = require('fs');

const bytecode = fs.readFileSync('Transcript_sol_transcriptVerification.bin').toString()
const abi = JSON.parse(fs.readFileSync('Transcript_sol_transcriptVerification.abi').toString())

const provider = new ethers.providers.JsonRpcProvider()

const signer = provider.getSigner(0)
const factory = new ethers.ContractFactory(abi, bytecode, signer)

async function contractDeploy(){
    try{
        let contract = await factory.deploy()
        // console.log(contract)
        // console.log(await contract.functions.addTranscript(ethers.utils.formatBytes32String('0x7d279221ee17a3e8eed06389b744')))
        let transcriptID = await contract.addTranscript(ethers.utils.formatBytes32String('0x7d279221ee17a3e8eed06389b744'))
        console.log(transcriptID)
    }
    catch(err) {
        console.log(err.message)
    }
    
}
contractDeploy()


