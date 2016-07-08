module.exports = {
	mongo: {
		connection: 'mongodb://localhost:27017/watchdb'
	},

	elastic: {
		host: {
			host: 'localhost'
		},

		requestTimeout: 5000
	},

	collections: [ {
		name: 'auctions',
		index: 'auctions',
		type: 'auction',
		fields: [
			'_id',
			'auctionhouse',
			'name',
			'date',
			'description',
			'url',
			'savedhammerprice'
		]
	},
	{
		name: 'watches',
		index: 'watches',
		type: 'watch',
		fields: [
			'_id',
			'image',
			'url',
			'description',
			'name',
			'searchable',
			'date',
			'featured',
			'estimate',
			'startingprice',
			'hammerprice',
			'auction'
		]

	}]
};
