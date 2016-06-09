(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'This is the best Dodecahedron in the world.',
		reviews: [
			{
				stars: 5,
				body: "I love it!",
				author: "talover@aol.com"
			},
			{
				stars: 1,
				body: "I hate it!",
				author: "hater@aol.com"
			}
		],
		canPurchase: true,
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'This is the best Pentagonal Gem in the world.',
		canPurchase: false,
		soldOut: true
	}
	];
})();