pragma solidity ^0.5.0;

contract transcriptVerification {
    address owner;
    
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
    
    modifier onlyValidId(uint256 _transcriptID) {
        require(transcriptHash.length > _transcriptID, "Invalid ID");
        _;
    }

    function addTranscript(bytes32 _transcriptHash) public onlyOwner returns(uint256){
        transcriptHash.push(_transcriptHash);
        log0(bytes32(transcriptHash.length));
    }

    function isTranscriptAuthentic(uint256 _transcriptID, bytes32 _transcriptHash) public view onlyValidId(_transcriptID) onlyAuthentic(_transcriptID, _transcriptHash) returns(bool) {
        return true;
    }
 }