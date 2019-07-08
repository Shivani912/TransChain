# TransChain

## Setup Instructions

Clone the repository

### `git clone https://github.com/Shivani912/TransChain.git`

### `cd TransChain`

Install dependencies

### `npm install`

### `cd front-end`

### `npm install`

Start the app

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## About the project

  TransChain is a blockchain application that lets an educational institution to deliver student transcripts on blockchain, not just to make it easily accessible by students, but also to keep it safe and secure as everything on a blockchain is immutable.

  For the first stage, I have built a smart contract that let's the owner of the contract (in this case, an instituition) add transcript hashes to the blockchain. The institutes can login/register using the web app and add transcrypts. 
  
  We have used Firebase for database. The reason for using a database is that not everything needs to be stored on blockchain. Also transactions on blockchain can be expensive. Keeping that in mind, we have only the transcript hashes and and owner address stored on it. All other information including the transcript itself is stored on the database. Since the transcript hash is always immutable, verifiers can check the authenticity of a transcript by hashing it and comparing it with its hash on blockchain. Also having less important data stored on database makes the dapp faster.
  
  The smart contract is deployed on Ropsten testnet. However, as per the concept of this project, every intitute will have its own instance of the smart contract. Thus, the ownership of transcripts is well managed. Also, in this way, a single instance of the smart contract does not get overloaded with requests and data. 
  Link : https://ropsten.etherscan.io/address/0x76045a741daf7c761861c1123bf6d7ea7338aa15
  
