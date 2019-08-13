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

let contractAddress = '0xdf080fb235da0ff42f3c91f14ac881e499bbb80f'

export const register = async () => {
	try{
		await window.ethereum.enable()
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			let accAddr = provider._web3Provider.selectedAddress
			const signer  = provider.getSigner();
		// console.log(provider._web3Provider.selectedAddress)
			let contract = new ethers.Contract(contractAddress, abi, signer)
			
		let tx1 = await contract.registerInstitute()
		await tx1.wait()
		
		let tx2 = await contract.lastInstituteId()
		let instituteId = parseInt(tx2._hex).toString()
		
		return ({instituteId, accAddr})
		// console.log(tx2._hex)

	}
	catch(err) {
		console.log(err.message)
	}
	
}

export const addTranscriptToBlockchain = async (JSONObj) => {
    try{
        let string = JSON.stringify(JSONObj)
        let hex = ethers.utils.hashMessage(string)
        // console.log(hex)

        let hashedData = ethers.utils.keccak256(hex)

		await window.ethereum.enable()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
			const signer  = provider.getSigner();
			let contract = new ethers.Contract(contractAddress, abi, signer)

			let flatsig = await signer.signMessage(hashedData)
			let sig = ethers.utils.splitSignature(flatsig);

        let tx = await contract.addTranscript(1, hashedData, sig.v, sig.r, sig.s)
        await tx.wait()
        
		// console.log(txWait)
		let tx2 = await contract.lastTranscriptId()
		let transcriptId = parseInt(tx2._hex).toString()
		
		return transcriptId

    }
    catch(err) {
        console.log(err)
        // return err.message
    }
    
}

export const getTranscriptById = async (id) => {
	try{
		await window.ethereum.enable()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
			const signer  = provider.getSigner();
			let contract = new ethers.Contract(contractAddress, abi, signer)

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
		console.log(err.message)
	}
}

// export const login = async 

// register()
