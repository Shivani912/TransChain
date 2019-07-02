pragma solidity ^0.5.0;

contract transcriptVerification {
    address owner;
    uint256 transcriptCount = 0;
    
    bytes32[] transcriptHash;

    constructor() public{
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "you are not the owner");
        _;
    }

    modifier onlyAuthentic(uint256 _transcriptID, bytes32 _transcriptHash) {
        require(transcriptHash[_transcriptID] == _transcriptHash, "Transcript not authentic");
        _;
    }

    function addTranscript(bytes32 _transcriptHash) public onlyOwner returns(uint256){
        transcriptCount++;
        transcriptHash[transcriptCount] = _transcriptHash;
        return transcriptCount;
    }

    function isTranscriptAuthentic(uint256 _transcriptID, bytes32 _transcriptHash) public view onlyAuthentic(_transcriptID, _transcriptHash) returns(bool) {
        return true;
    }
}