// const web3 = require('web3');
const ethers = require('ethers')
// const Proxy = artifacts.require('Proxy')

// var providers = ethers.providers;
// var network = providers.networks.ropsten;

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
// web3.providers.HttpProvider.prototype.sendAsync = web3.providers.HttpProvider.prototype.send;
// var web3Provider = new providers.Web3Provider(web3.currentProvider, network);
// const provider = ethers.getDefaultProvider('ropsten')
// Web3.currentProvider.sendAsync = Web3.currentProvider.send
// const web3Provider = this.web3.currentProvider
//.providers.HttpProvider('https://ropsten.etherscan.io/');
//(Web3.currentProvider)

// console.log(web3)
// const provider = new ethers.providers.Web3Provider(web3Provider, 'ropsten');
// console.log(provider)
// const provider = ethers.providers.getDefaultProvider('ropsten')
// const signer  = provider.getSigner();
// console.log(signer)

//-----//
let contractAddress = '0xdf080fb235da0ff42f3c91f14ac881e499bbb80f'
// '0x845278eb31b275cf4003bf3c8f6aaf22d2661a9c'
// let pk = 'D8A0B1144A27811ECF01841B323255B510AF23A7AD31B155E898F10BADAC017D'
// let contract = new ethers.Contract(contractAddress, abi, signer)
// let wallet = new ethers.Wallet(pk, provider)
// let contractWithSigner = contract.connect(signer)


export const register = async () => {
	try{
		await window.ethereum.enable()
            const provider = new ethers.providers.Web3Provider(window.ethereum)
			const signer  = provider.getSigner();
			let contract = new ethers.Contract(contractAddress, abi, signer)
			
		let tx1 = await contract.registerInstitute()
		await tx1.wait()
		
		let tx2 = await contract.lastInstituteId()
		
		console.log(tx2._hex)

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
		
		console.log(tx2._hex)

    }
    catch(err) {
        console.log(err)
        // return err.message
    }
    
}

// register()
