const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "ProxyTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_rowNumber",
				"type": "uint256"
			}
		],
		"name": "_addDORequestEV",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_rowNumber",
				"type": "uint256"
			}
		],
		"name": "_addDPRequestEV",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_orderNumber",
				"type": "uint256"
			}
		],
		"name": "_placeOrderEV",
		"type": "event"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_cpuRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_memRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_storageRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_bandwidthRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "_duration",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "_instances",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_maxPrice",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_metadata1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata4",
				"type": "string"
			}
		],
		"name": "_addDORequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rowNumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_cpuRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_memRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_storageRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_bandwidthRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "_duration",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "_minPrice",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_metadata1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_metadata4",
				"type": "string"
			}
		],
		"name": "_addDPRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rowNumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_key",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_value",
				"type": "string"
			}
		],
		"name": "_addMetadataToDPRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rowNumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_key",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_value",
				"type": "string"
			}
		],
		"name": "_addMetadataToRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_rowNumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_orderItem",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "processor",
				"type": "address"
			}
		],
		"name": "_addProcessorToOrder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_orderItem",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_result",
				"type": "string"
			}
		],
		"name": "_addResultToOrder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_addToPresaleRound",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_addToPrivateSaleRound",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_addToPublicOneRound",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_addToPublicTwoRound",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_addToSeedRound",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_orderItem",
				"type": "uint256"
			}
		],
		"name": "_approveOrder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_cancelDORequest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_cancelDPRequest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_getBaseLockTimestamp",
		"outputs": [
			{
				"internalType": "uint128",
				"name": "",
				"type": "uint128"
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_getDORequest",
		"outputs": [
			{
				"internalType": "address",
				"name": "downer",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "cpuRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "memoryRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "storageRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "bandwidthRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "duration",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "maxPrice",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "status",
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_getDORequestMetadata",
		"outputs": [
			{
				"internalType": "address",
				"name": "downer",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "metadata1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata4",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_getDORequestsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_length",
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_getDPRequest",
		"outputs": [
			{
				"internalType": "address",
				"name": "dproc",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "cpuRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "memoryRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "storageRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "bandwidthRequest",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "duration",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "minPrice",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "status",
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_getDPRequestMetadata",
		"outputs": [
			{
				"internalType": "address",
				"name": "dproc",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "metadata1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata3",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "metadata4",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_getDPRequestsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_length",
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
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_getLockoutTimestamp",
		"outputs": [
			{
				"internalType": "uint128",
				"name": "",
				"type": "uint128"
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_getMetadataCountForDPRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_length",
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			}
		],
		"name": "_getMetadataCountForRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_length",
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_metadataItem",
				"type": "uint256"
			}
		],
		"name": "_getMetadataValueForDPRequest",
		"outputs": [
			{
				"internalType": "string",
				"name": "key",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "value",
				"type": "string"
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
				"internalType": "uint256",
				"name": "_requestListItem",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_metadataItem",
				"type": "uint256"
			}
		],
		"name": "_getMetadataValueForRequest",
		"outputs": [
			{
				"internalType": "string",
				"name": "key",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "value",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_getMyDOOrders",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "req",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_getMyDORequests",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "req",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_getMyDPRequests",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "req",
				"type": "uint256[]"
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
				"internalType": "uint256",
				"name": "_orderItem",
				"type": "uint256"
			}
		],
		"name": "_getOrder",
		"outputs": [
			{
				"internalType": "address",
				"name": "downer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dproc",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "doRequest",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "dpRequest",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "status",
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
		"name": "_getOrdersCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_length",
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
				"internalType": "uint256",
				"name": "_orderItem",
				"type": "uint256"
			}
		],
		"name": "_getResultFromOrder",
		"outputs": [
			{
				"internalType": "string",
				"name": "_Result",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_doRequestItem",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_dpRequestItem",
				"type": "uint256"
			}
		],
		"name": "_placeOrder",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_orderNumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "_removeLockoutTimestamp",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint128",
				"name": "timestamp",
				"type": "uint128"
			}
		],
		"name": "_setBaseLockTimestamp",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "_totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "approveAndCall",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
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
		"name": "callerAddress",
		"outputs": [
			{
				"internalType": "address",
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
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
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
				"internalType": "address",
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
		"inputs": [],
		"name": "implementationPro",
		"outputs": [
			{
				"internalType": "address",
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
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"internalType": "address",
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
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
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
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferAnyERC20Token",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_newProxy",
				"type": "address"
			}
		],
		"name": "transferProxy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

module.exports = abi;
