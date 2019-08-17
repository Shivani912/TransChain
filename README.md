# TransKrypt

## DAPP2 Assignment Submission

### Hosted -
https://transchain-gbc.firebaseapp.com/institute

EtherScan Link : https://ropsten.etherscan.io/address/0xdf080fb235da0ff42f3c91f14ac881e499bbb80f

#### Developed by:-  
- Shivani Joshi

## Setup Instructions

Clone the repository

  `git clone https://github.com/Shivani912/TransKrypt.git`

  `cd TransKrypt`

Install dependencies

  `cd front-end`

  `npm install`

Start the app

  `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## About the project

  TransKrypt is a blockchain application that facilitates an educational institution to deliver student transcripts on blockchain, not just to make it easily accessible by students, but also to keep it safe and secure as everything on a blockchain is immutable.
  
  We have used Firebase for database. The reason for using a database is that not everything needs to be stored on blockchain. Also transactions on blockchain can be expensive. Keeping that in mind, only the transcript hashes, owner address, signature and such necessary data that is needed fort he verification purpose is stored on it. All other information including the transcript itself is stored on the database. Since the transcript hash is always immutable, verifiers can check the authenticity of a transcript by hashing it and comparing it with its hash on blockchain. Also having less important data stored on database makes the DApp faster.
  
  The smart contract is deployed on Ropsten testnet. It can be found under the solidity/contracts folder. Main.sol is the entry point and it inherits the other contracts. Critical operations like institute registration, adding transcripts and verifying transcripts are handled on-chain.  
  
## Using the DApp

  - You will need to have the Metamask extension on your browser to be able to access the DApp as all the on-chain operations are handled using metamask. 
  
  - You may start by registering yourself as an institute. Once you have been registered, use your institute ID to land on your profile page. 
  
  - Clicking on the '+ Transcript' button will take you to a form to add a new transcript. Adding the transcript will require you to sign the data and then pay some Eth to make a transaction on blockchain.
  
  - Once the transcript has been added, you will see a summary of it and clicking on it will display all the details.
  
  - Each transcript can be verified by clicking the 'Verify' button. This will hash the transcript data and call the verifyTranscript function on smart contract which will return a bool value depending on the result.
  
## Testing

  For testing the smart contract follow the steps below:
  
  - go into the /solidity folder
  - npm install
  - npm test
  
  The tests that require checking of a timestamp might fail sometimes as there can be a very small time difference between consecutive operations. Please re-run the test in case that happens.
