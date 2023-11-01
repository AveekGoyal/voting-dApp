// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting{
     struct Poll {
        string question;
        string option1;
        string option2;
        uint256 startTime;
        uint256 endTime;
        uint256 option1Votes;
        uint256 option2Votes;
        bool isActive;
        address owner;
        uint256 pollNumber;
    }

    struct Voter {
        bool isRegistered;
    }

    mapping(uint256 => Poll) public polls;

    mapping(address => Voter) public voters;

    uint256 public pollCounter;

    event PollCreated(uint256 indexed pollID, string question);

    mapping(uint256 => mapping(address => bool)) public hasVoted;
    constructor() {
        pollCounter = 1;
    }

    function createPoll(
        string memory _question,
        string memory _option1,
        string memory _option2,
        uint256 _startTime,
        uint256 _endTime
    ) public returns (uint256 pollID) {
        require(_endTime > _startTime, "End time must be after start time");
        require(_endTime > block.timestamp, "End time must be in the future");
        pollID = pollCounter;
        polls[pollID] = Poll({
            question: _question,
            option1: _option1,
            option2: _option2,
            startTime: _startTime,
            endTime: _endTime,
            option1Votes: 0,
            option2Votes: 0,
            isActive: true,
            owner: msg.sender,
            pollNumber: pollID
        });

        emit PollCreated(pollID, _question);

        pollCounter++;

        return pollID;
    }

    function registerVoter() public {
        voters[msg.sender].isRegistered = true;
    }

    function vote(uint256 _pollID, bool _voteOption) public {
        require(polls[_pollID].isActive == true, "Poll is not active");
        require(block.timestamp >= polls[_pollID].startTime, "Voting period has not started yet");
        require(block.timestamp <= polls[_pollID].endTime, "Voting period has ended");

        require(!hasVoted[_pollID][msg.sender], "You have already voted for this poll");

        if (_voteOption) {
            polls[_pollID].option1Votes++;
        } else {
            polls[_pollID].option2Votes++;
        }

        hasVoted[_pollID][msg.sender] = true;
    }

       function getPoll(uint256 _pollID) public view returns (
       string memory,
       string memory,
       string memory,
       uint256,
       uint256,
       uint256,
       uint256,
       bool,
       address,
       uint256
    ) {
        Poll memory poll = polls[_pollID];

        return (poll.question, poll.option1, poll.option2, poll.startTime, poll.endTime,
        poll.option1Votes, poll.option2Votes, poll.isActive, poll.owner,poll.pollNumber);
    }
}