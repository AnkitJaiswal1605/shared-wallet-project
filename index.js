const contractAddress = "0xc6C2E8355503887f34690D3D0Cd6B79260bE0539";
// const contractABI = [
//     "function getWalletBalance() public view returns (uint)",
//     "function renewAllowance(address _user, uint _allowance, uint _timeLimit) public onlyOwner",
//     "function myAllowance() public view returns(uint)",
//     "function spendCoins(address payable _receiver, uint _amount) public",
//     "modifier onlyOwner()",
// ];

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
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timeLimit",
				"type": "uint256"
			}
		],
		"name": "AllowanceRenewed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CoinsSpent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_timeLimit",
				"type": "uint256"
			}
		],
		"name": "renewAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "spendCoins",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "getWalletBalance",
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
		"inputs": [],
		"name": "myAllowance",
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
		"inputs": [],
		"name": "owner",
		"outputs": [
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "validity",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const walletContract = new ethers.Contract(contractAddress, contractABI, signer);
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    
    document.getElementById("wallet-address").textContent = account.substring(0,5) + "..." + account.substring(37,42);
    document.getElementById("pending-allowance").textContent = await walletContract.myAllowance();
    document.getElementById("wallet-balance").textContent = await walletContract.getWalletBalance();
}

const renewAllowance = async (e) => {
    e.preventDefault();
    const timeLimit = 86400;
    console.log("abc");
    // const txResponse = await walletContract.renewAllowance(e.target.user.value, e.target.allowance.value, timeLimit);
    // await txResponse.wait();
    // e.target.user.value = null;
    // e.target.allowance.value = null;
    // alert('Allowance renewed!!');
}

