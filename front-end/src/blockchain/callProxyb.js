const ethers = require('ethers')

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addInstitute",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "instituteId",
				"type": "uint256"
			},
			{
				"name": "transcriptHash",
				"type": "bytes32"
			},
			{
				"name": "v",
				"type": "uint8"
			},
			{
				"name": "r",
				"type": "bytes32"
			},
			{
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "addTranscript",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "_instituteId",
				"type": "uint256"
			},
			{
				"name": "transcriptHash",
				"type": "bytes32"
			},
			{
				"name": "v",
				"type": "uint8"
			},
			{
				"name": "r",
				"type": "bytes32"
			},
			{
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "addTranscript",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "registerInstitute",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "instituteAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "instituteId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "transcriptHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "transcriptAdded",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getInstituteById",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getTranscriptById",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "implementation",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "transcriptHash",
				"type": "string"
			},
			{
				"name": "signer",
				"type": "address"
			},
			{
				"name": "v",
				"type": "uint8"
			},
			{
				"name": "r",
				"type": "bytes32"
			},
			{
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "isTranscriptAuthentic",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastInstituteId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastTranscriptId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "message",
				"type": "string"
			},
			{
				"name": "v",
				"type": "uint8"
			},
			{
				"name": "r",
				"type": "bytes32"
			},
			{
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "verifyTranscript",
		"outputs": [
			{
				"name": "signer",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
]

let provider
let signer
let contract

let contractAddress = '0xdf080fb235da0ff42f3c91f14ac881e499bbb80f'

export const register = async () => {
	try{
		await connectMetamask()
		let accAddr = provider._web3Provider.selectedAddress
			
		let tx1 = await contract.registerInstitute()
		await tx1.wait()
		
		let tx2 = await contract.lastInstituteId()
		let instituteId = parseInt(tx2._hex).toString()
		
		return ({instituteId, accAddr})
		// console.log(tx2._hex)

	}
	catch(err) {
		if(err.code === -32603){
			return "User rejected"
		}
	}
	
}

export const addTranscriptToBlockchain = async (Obj) => {
    try{
        let hashedData = hashData(Obj)

		let response = await connectMetamask()
	
		if(response === "OK") {
			
			let sig = await sign(hashedData)
			console.log(hashedData, sig.v, sig.r, sig.s)
			let tx = await contract.addTranscript(1, hashedData, sig.v, sig.r, sig.s)
			await tx.wait()
			
			let tx2 = await contract.lastTranscriptId()
			let transcriptId = parseInt(tx2._hex).toString()
			// console.log(transcriptId)
			let data = {
				id: transcriptId,
				sig: sig
			}
			return data
		}
		else if(response === "metamask not installed"){
			return "metamask not installed"
		}
		else if(response === "metamask locked") {
			return "metamask locked"
		}
		

    }
    catch(err) {
		if(err.code === -32603){
			return "User rejected"
		}
    }
    
}

async function sign(hashedData) {
	let flatsig = await signer.signMessage(hashedData)
	let sig = ethers.utils.splitSignature(flatsig);
	return sig
}

function hashData(Obj) {
	let string = JSON.stringify(Obj)
	let hex = ethers.utils.hashMessage(string)

	let hashedData = ethers.utils.keccak256(hex)
	return hashedData
}

export const verifyTranscriptOnBlockchain = async (Obj, instituteAddress, sig) => {
	try{
        let hashedData = hashData(Obj)

		let response = await connectMetamask()
	
		if(response === "OK") {
			let result = await contract.isTranscriptAuthentic(hashedData, instituteAddress, sig.v, sig.r, sig.s)
			// await tx.wait()
			// console.log(tx)
			
			return result
		}
		else if(response === "metamask not installed"){
			return "metamask not installed"
		}
		else if(response === "metamask locked") {
			return "metamask locked"
		}
		

    }
    catch(err) {
		if(err.code === -32603){
			return "User rejected"
		}
    }
}

export const getTranscriptById = async (id) => {
	try{
			await connectMetamask()

			let tx = await contract.getTranscriptById(id)
			// let txWait = await tx.wait()
			let instituteId = parseInt(tx[0]._hex)
			let transcriptHash = tx[1]
			let sig = {v: tx[2], r: tx[3], s: tx[4]}
			let timestamp = parseInt(tx[5]._hex)
			// console.log()
			return ({instituteId, transcriptHash, sig, timestamp})
	}
	catch(err) {
		// console.log(err.message)
	}
}

async function connectMetamask() {
	if (typeof window.ethereum !== 'undefined'){
		// console.log(window.ethereum)
		
			await window.ethereum.enable()
			provider = new ethers.providers.Web3Provider(window.ethereum)
			if(!isLocked()){
				signer  = provider.getSigner();
				contract = new ethers.Contract(contractAddress, abi, signer)
				return "OK"
			}
			else{
				return "metamask locked"
			}
		
	}
	else {
		return "metamask not installed"
	}
	
}

function isLocked() {
	
	   if (provider._web3Provider.selectedAddress !== undefined) {
		  return false
	   }

	   else {
		  return true
	   }
	
 }
