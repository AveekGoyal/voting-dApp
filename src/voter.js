
const web3 = new Web3(ethereum);

const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "pollID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "question",
				"type": "string"
			}
		],
		"name": "PollCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_question",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_option1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_option2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
			}
		],
		"name": "createPoll",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "pollID",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pollID",
				"type": "uint256"
			}
		],
		"name": "getPoll",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pollCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "polls",
		"outputs": [
			{
				"internalType": "string",
				"name": "question",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "option1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "option2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option1Votes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "option2Votes",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pollID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
			}
		],
		"name": "setPollDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pollID",
				"type": "uint256"
			}
		],
		"name": "startVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pollID",
				"type": "uint256"
			}
		],
		"name": "stopVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pollID",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_voteOption",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isRegistered",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = '0xc29d099E10985b74100C83800a75e16A8E4D1cD8';
let contract;

async function initContract() {

    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        web3.eth.defaultAccount = accounts[0];
        contract = new web3.eth.Contract(contractABI, contractAddress);
        await initLatestVoterPoll();
    } catch (error) {
        console.error('Error initializing contract:', error);
    }
}

async function initLatestVoterPoll() {
    try {
        const latestPollID = await contract.methods.pollCounter().call() - 1;

        if (latestPollID > 0) {
            const poll = await contract.methods.getPoll(latestPollID).call();
            const currentTime = Math.floor(Date.now() / 1000);

            const pollQuestion = document.getElementById("pollQuestion");
            const option1Checkbox = document.getElementById("option1Checkbox");
            const option2Checkbox = document.getElementById("option2Checkbox");
            const voteButton = document.getElementById("voteButton");
            const votingStatus = document.getElementById("votingStatus");

            const option1Data = document.getElementById("option1Text");
            const option2Data = document.getElementById("option2Text");

            pollQuestion.textContent = poll[0];
            option1Data.textContent = poll[1];
            option2Data.textContent = poll[2];

            if (currentTime >= poll[3] && currentTime <= poll[4]) {

                option1Checkbox.disabled = false;
                option2Checkbox.disabled = false;
                voteButton.disabled = false;
                votingStatus.textContent = "Voting is open.";
                console.log("1-----")
                const hasVoted = await contract.methods.hasVoted(latestPollID, web3.eth.defaultAccount).call();
                if (hasVoted) {
                    console.log("2-----")
                    option1Checkbox.disabled = true;
                    option2Checkbox.disabled = true;
                    voteButton.disabled = true;
                    votingStatus.textContent = "You have already voted in this poll.";
                }
            } else {
          
                console.log("3-----")
                votingStatus.textContent = "Voting is closed.";
                option1Checkbox.disabled = true;
                option2Checkbox.disabled = true;
                voteButton.disabled = true;
            }
        } else {
          
            pollQuestion.textContent = "No polls exist.";
        }
    } catch (error) {
        console.error('Error initializing latest poll:', error);
    }
}


async function vote() {
    console.log("hasVoted")
    const latestPollID = await contract.methods.pollCounter().call() - 1;
    const hasVoted = await contract.methods.hasVoted(latestPollID, web3.eth.defaultAccount).call();
    console.log(hasVoted)
    if (!hasVoted) {
        const option1Checkbox = document.getElementById("option1Checkbox");
        const option2Checkbox = document.getElementById("option2Checkbox");
        const selectedOption = option1Checkbox.checked ? true : false;
        console.log(selectedOption)
        try {

            await contract.methods.vote(latestPollID, selectedOption).send({ from: web3.eth.defaultAccount });

            option1Checkbox.disabled = true;
            option2Checkbox.disabled = true;
            votingStatus.textContent = "You have voted in this poll.";
        } catch (error) {
            console.error('Error casting vote:', error);
        }
    } else {
        alert("You have already voted in this poll.");
    }
}

async function initLatestOwnerPoll() {
    const latestPollID = await contract.methods.pollCounter().call()-1;

    if (latestPollID > 0) {
        const poll = await contract.methods.getPoll(latestPollID).call();

    const pollQuestionDisplay = document.getElementById("pollQuestionDisplay");
    const option1Display = document.getElementById("option1Display");
    const option2Display = document.getElementById("option2Display");
    const startTimeDisplay = document.getElementById("startTimeDisplay");
    const endTimeDisplay = document.getElementById("endTimeDisplay");
    const option1VotesDisplay = document.getElementById("option1VotesDisplay");
    const option2VotesDisplay = document.getElementById("option2VotesDisplay");

    pollQuestionDisplay.textContent = poll[0];
    option1Display.textContent = poll[1];
    option2Display.textContent = poll[2];
    startTimeDisplay.textContent = new Date(poll[3] * 1000).toLocaleString();
    endTimeDisplay.textContent = new Date(poll[4] * 1000).toLocaleString();
    option1VotesDisplay.textContent = poll[5];
    option2VotesDisplay.textContent = poll[6];
    } else {
        pollSection.innerHTML = "No polls exist.";
    }
}

initContract();

const voteButton = document.getElementById("voteButton");

voteButton.addEventListener("click", async function () {
    await vote();
});
