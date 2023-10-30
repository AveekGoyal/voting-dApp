// Define the Ethereum network
const web3 = new Web3(ethereum);

// Define the contract ABI and contract address
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
const contract = new web3.eth.Contract(contractABI, contractAddress);
initLatestOwnerPoll();
document.getElementById('createPollButton').addEventListener('click', async () => {
    event.preventDefault()
    try {
        // Get poll details from the input fields
        const question = document.getElementById('pollQuestion').value;
        const option1 = document.getElementById('option1').value;
        const option2 = document.getElementById('option2').value;
        const startTime = new Date(document.getElementById('startTime').value).getTime() / 1000;
        const endTime = new Date(document.getElementById('endTime').value).getTime() / 1000;

        // Check if the question and options are not empty
        if (!question || !option1 || !option2) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Check if the end time is after the start time
        if (endTime <= startTime) {
            alert('End time must be after start time.');
            return;
        }

        // Create the poll by sending a transaction
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const senderAddress = accounts[0];

        const gas = await contract.methods.createPoll(question, option1, option2, startTime, endTime).estimateGas();
        await contract.methods.createPoll(question, option1, option2, startTime, endTime).send({ from: senderAddress, gas });

        alert('Poll created successfully.');
        await initLatestOwnerPoll();
    } catch (error) {
        console.error('Error creating poll:', error);
        alert('An error occurred while creating the poll.');
    }
});
    async function initLatestOwnerPoll() {
        // Get the latest poll ID by calling a separate function in your contract
        const latestPollID = await contract.methods.pollCounter().call()-1;

        if (latestPollID > 0) {
            // Assuming you want to display the details of the latest poll
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
            // No polls exist, display a message or perform other actions
            pollSection.innerHTML = "No polls exist.";
        }
    }

