module.exports = {
	items: [
		{
			type: "blockheight",
			date: "2009-01-03",
			chain: "main",
			blockHeight: 0,
			blockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			summary: "The HTH Genesis Block.",
			alertBodyHtml: "This is the first block in the HTH blockchain, known as the <b>Genesis Block</b>. <br/>Read more here: <a href='https://en.bitcoin.it/wiki/Genesis_block'>bitcoin.it/wiki/Genesis_block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2009-01-03",
			chain: "main",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			blockHeight: 0,
			summary: "The coinbase transaction of the HTH Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! This is the <b>coinbase transaction</b> of the <a href='./block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>HTH Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		},
		{
			type:"address",
			date:"2013-09-13",
			chain: "main",
			address:"37k7toV1Nv4DfmQbmZ8KuZDQCYK9x5KpzP",
			summary:"SHA1 collision bounty",
			alertBodyHtml:"This address corresponds to a HTH Script (<span class='font-data'>6e879169a77ca787</span>) that allows anyone who can demonstrate a SHA1 collision to spend from it. On September 13, 2013 this address was funded as a SHA1-collision bounty and it continued to accumulate 'bounty donations' for over 2 years when, on February 23, 2017 a total of 1.62 BTC were spent from this address in <a href='./tx/8d31992805518fd62daa3bdd2a5c4fd2cd3054c9b3dca1d78055e9528cff6adc'>8d31992805...</a>.",
			referenceUrl:"https://bitcointalk.org/index.php?topic=293382.0"
		},



		// testnet
		{
			type: "blockheight",
			date: "2011-02-02",
			chain: "test",
			blockHeight: 0,
			blockHash: "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
			summary: "The HTH (regtest) Genesis Block.",
			alertBodyHtml: "This is the first block in the HTH blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},

		// regtest
		{
			type: "blockheight",
			date: "2011-02-02",
			chain: "regtest",
			blockHeight: 0,
			blockHash: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
			summary: "The HTH (regtest) Genesis Block.",
			alertBodyHtml: "This is the first block in the HTH blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		}
	]
};
