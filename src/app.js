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

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);
document.getElementById('registerVoterButton').addEventListener('click', async () => {
    try {
        // Get the MetaMask address from the input field
        const voterAddress = document.getElementById('voterMetaMaskAddress').value;

        // Check if the address is valid
        if (!web3.utils.isAddress(voterAddress)) {
            alert('Invalid MetaMask address. Please enter a valid address.');
            return;
        }

        // Check if the voter is already registered
        const isRegistered = await contract.methods.voters(voterAddress).call();
        if (isRegistered) {
            alert('You are already registered as a voter.');
            return;
        }

        // Register the voter by sending a transaction
        const accounts = await ethereum.enable();
        const senderAddress = accounts[0];

        const gas = await contract.methods.registerVoter().estimateGas();
        await contract.methods.registerVoter().send({ from: senderAddress, gas });

        alert('You have been successfully registered as a voter.');
    } catch (error) {
        console.error('Error registering voter:', error);
        alert('An error occurred while registering as a voter.');
    }
});

// Handle navigation to the Owner Dashboard
document.getElementById('ownerDashboardButton').addEventListener('click', () => {
    const ownerAddress = '0x868d8C1587BF72295b41E76Cfb180e38E3bd08cC'; // Replace with the owner's MetaMask address
    const enteredOwnerAddress = document.getElementById('ownerMetaMaskAddress').value;

    if (enteredOwnerAddress !== ownerAddress) {
        alert('Invalid owner address. Please enter the correct address.');
        return;
    }

    // Navigate to the owner dashboard page with the owner address
    window.location.href = `owner-dashboard.html?address=${ownerAddress}`;
});

// Handle navigation to the Voter Dashboard
document.getElementById('voterDashboardButton').addEventListener('click', async () => {
    const enteredVoterAddress = document.getElementById('voterMetaMaskAddress2').value;
    // Check if the address is valid
    if (!web3.utils.isAddress(enteredVoterAddress)) {
        alert('Invalid MetaMask address. Please enter a valid address.');
        return;
    }

    // Check if the voter is already registered
    const isRegistered = await contract.methods.voters(enteredVoterAddress).call();
    if (!isRegistered) {
        alert('You are not registered as a voter. Please register first.');
        return;
    }

    // Navigate to the voter dashboard page with the voter address
    window.location.href = `voter.html?address=${enteredVoterAddress}`;
});


async function displayLatestPoll() {
    // Get the latest poll ID by calling a separate function in your contract
    const latestPollID = await contract.methods.pollCounter().call() - 1;

    // Fetch HTML elements for displaying poll information
    const pollQuestionDisplay = document.getElementById("pollQuestionDisplay");
    const option1Display = document.getElementById("option1Display");
    const option2Display = document.getElementById("option2Display");
    const startTimeDisplay = document.getElementById("startTimeDisplay");
    const endTimeDisplay = document.getElementById("endTimeDisplay");
    const option1VotesDisplay = document.getElementById("option1VotesDisplay");
    const option2VotesDisplay = document.getElementById("option2VotesDisplay");

    if (latestPollID > 0) {
        // Assuming you want to display the details of the latest poll
        const poll = await contract.methods.getPoll(latestPollID).call();
        const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

        pollQuestionDisplay.textContent = `Poll Question: ${poll[0]}`;
        option1Display.textContent = `Option 1: ${poll[1]}`;
        option2Display.textContent = `Option 2: ${poll[2]}`;
        startTimeDisplay.textContent = `Start Time: ${new Date(poll[3] * 1000).toLocaleString()}`;
        endTimeDisplay.textContent = `End Time: ${new Date(poll[4] * 1000).toLocaleString()}`;

        // Check if the current time is within the voting period
        if (currentTime >= poll[3] && currentTime <= poll[4]) {
            option1VotesDisplay.textContent = "Voting is still open.";
            option2VotesDisplay.textContent = "Voting is still open.";
        } else {
            option1VotesDisplay.textContent = `Option 1 Votes: ${poll[5]}`;
            option2VotesDisplay.textContent = `Option 2 Votes: ${poll[6]}`;
            document.getElementById("pollTitle").textContent = "Result of the Poll";
        }
    } else {
        // No polls exist, display a message
        pollQuestionDisplay.textContent = "No poll exists.";
        option1Display.textContent = "";
        option2Display.textContent = "";
        startTimeDisplay.textContent = "";
        endTimeDisplay.textContent = "";
        option1VotesDisplay.textContent = "";
        option2VotesDisplay.textContent = "";
    }
}

// Call the function to display the latest poll information
displayLatestPoll();
