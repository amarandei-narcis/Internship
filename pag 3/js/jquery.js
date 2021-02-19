var isListView = false;
var searchResults = [];
var compareElements = [];

searchResults.push({
	id: 1,
	name: 'Hidden Sunset',
	rate: 5,
	location: 'New York',
	type: 'House',
	price: '$456.00',
	area: 232,
    img: 'img/images2.jpeg'
});

searchResults.push({
	id: 2,
	name: 'Sea Crest',
	rate: 3.5,
	location: 'Los Angeles',
	type: 'House',
	price: '$324.00',
	area: 163,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 3,
	name: 'Blackberry Farm',
	rate: 4,
	location: 'Chicago',
	type: 'House',
	price: '$710.00',
	area: 545,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 4,
	name: 'Little Nell',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 5,
	name: 'Sonnenalp Resort of Vail',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 6,
	name: 'Whiteface Lodge',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 7,
	name: 'Stein Eriksen Lodge',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 8,
	name: 'Inn on Biltmore Estate',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 9,
	name: 'Mirror Lake Inn Resort',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 10,
	name: 'St. Regis',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 11,
	name: 'Alyeska Resort',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

searchResults.push({
	id: 12,
	name: 'Vail Cascade',
	rate: 3,
	location: 'San Francisco',
	type: 'House',
	price: '$560.00',
	area: 412,
	img: 'img/images2.jpeg'
});

function appendListElements() {
	$('.search-results').empty();

	searchResults.forEach((result) => {
		$('.search-results').append(`
			<div class="col s12" data-id="${result.id}">
				<div class="card">
					<div class="card-content flex-card" style="padding:0%;">
						<div class="content-img">
							<img src="${result.img}">
						</div>
						<div class="card-info">
							<div class="list-info-type">
								<p class="location">Location</p>
								<p class="area">Area</p>
								<p class="type">Type</p>
							</div>
							<div class="list-info-ans">
								<p class="location-ans">${result.location}</p>
								<p class="area-ans">${result.area} sqft</p>
								<p class="type-ans">${result.type}</p>
							</div>
						</div>
						<div class="list-options">
							<div class="list-favorite flex-container">
								<div class="flex-align">
									<i class="${result.isFavorite ? "fas" : "far"} fa-heart img-icon"></i>
									<p class="icon-text">Favorite</p>
								</div>
							</div>
							<div class="list-compare flex-container">
								<div class="flex-align">
									<i class="fas fa-balance-scale img-icon"></i>
									<p class="icon-text">Compare</p>
									<form action="#" class="list-compare-check">
										<p>
											<label>
												<input type="checkbox" class="filled-in" ${result.isCompare ? "checked" : ""} />
												<span class="list-span-check"></span>
											</label>
										</p>	
									</form>
								</div>
							</div>
							<div class="list-details flex-container">
								<div class="flex-align">
									<i class="fas fa-search list-img-icon"></i>
									<p class="icon-text">View details</p>
								</div>
							</div>
						</div>
					</div>
					<div class="card-content list-card-name">
						<div class="residence-name">
					    	<p class="list-house-name">${result.name}</p>
					    </div>
					    <div class="residence-price">
					    	<p class="list-house-price">${result.price}</p>
					    </div>
			        </div>
				</div>	
			</div>
		`);
	});
}

function appendGridElements() {
	$('.search-results').empty();

	searchResults.forEach((result) => {
      
        $('.search-results').append(`
	  	<div class="col l4 m6 s12" data-id="${result.id}">
		  	<div class="card">
		  		<div class="image-and-info">
			        <div class="card-image">
				        <div class="options">
			          		<div class="favorite flex-container">
			          			<div class="flex-align">
			          				<i class="${result.isFavorite ? "fas" : "far"} fa-heart img-icon"></i>
			          				<p class="icon-text">Favorite</p>
			          			</div>
			          		</div>
			          		<div class="compare flex-container">
			          			<div class="flex-align compare-wrapper">
				          			<i class="fas fa-balance-scale img-icon"></i>
				          			<p class="icon-text">Compare</p>
				          			    <p>
									      <label>
									        <input type="checkbox" class="filled-in" ${result.isCompare ? "checked" : ""} />
									        <span class="span-check"></span>
									      </label>
									    </p>	
			          			</div>
			          		</div>
			          		<div class="details flex-container">
			          			<div class="flex-align">
			          				<i class="fas fa-search img-icon"></i>
			          				<p class="icon-text">View details</p>
			          			</div>
			          		</div>
				        </div>
				        <div class="card-img">
				          <img src="${result.img}">
				        </div>
			        </div>
			        <div class="card-content card-name">
					    <p class="house-name">${result.name}</p>
					    <p class="house-price">${result.price}</p>
			        </div>
		        </div>
		        <div class="card-content card-info">
		          <div class="info-type">
		            <p class="location">Location</p>
		            <p class="area">Area</p>
		            <p class="type">Type</p>
		          </div>
		          <div class="info-ans">
		            <p class="location-ans">${result.location}</p>
		            <p class="area-ans">${result.area} sqft</p>
		            <p class="type-ans">${result.type}</p>
		          </div>
		         </div>
		      </div>
	      </div>
	  `);
	});
}

function alphabeticallyOrder(a,b) {
	if (a.name < b.name)
		return -1;
	if (a.name > b.name)
		return 1;
	return 0;
}

function reverseAlphabeticallyOrder(a,b) {
	if (a.name > b.name)
		return -1;
	if (a.name < b.name)
		return 1;
	return 0;
}

function ascendingPriceOrder(a,b) {
	if (a.price < b.price)
		return -1;
	if (a.price > b.price)
		return 1;
	return 0;
}

function descendingPriceOrder(a,b) {
	if (a.price > b.price)
		return -1;
	if (a.price < b.price)
		return 1;
	return 0;
}

function addOrRemoveFromCompare(element) {
	var elementFound = false;
	var elementFoundIndex = null;
	compareElements.some((el, index) => {
		if (element.id === el.id) {
			elementFound = true;
			elementFoundIndex = index;
			return true;
		}
	});

	if (elementFound) {
		compareElements.splice(elementFoundIndex, 1);
	} else {
		compareElements.push(element);
	}

	appendCompareElements();
}

function appendCompareElements() {
	$('.compare-elements').empty();

	if(compareElements.length) {
		$('.compareContainer').show();

		compareElements.forEach((element) => {
			$('.compare-elements').append(`
				<div class="selectedContent"><img src="${element.img}"</div>
	       	`);
		});
	} else {
		$('.compareContainer').hide();
	}
}

function appendElements() {
	if (isListView) {
		appendListElements();
		return;
	}

	appendGridElements();	
}

$(() => {
	appendElements();

	$('body').off('click', '.favorite, .list-favorite').on('click', '.favorite, .list-favorite', function() {
		const elementId = $(this).parents().eq(4).data("id");
		$('i', this).toggleClass('far fas');

		searchResults.some((result) => {
			if (result.id == elementId) {
				result.isFavorite !== "undefined" ? result.isFavorite = !result.isFavorite : true;
				return true;
			}
		});
	});

	$('body').off('click', '.compare, .list-compare').on('click', '.compare, .list-compare', function() {
		const parentPosition = $(this).hasClass('list-compare') ? 3 : 4;
		const elementId = $(this).parents().eq(parentPosition).data("id");
		var isChecked = $(this).find(':checkbox').prop('checked');
		$(this).find(":checkbox").prop('checked', !isChecked);

		searchResults.some((result) => {
			if (result.id == elementId) {
				result.isCompare !== "undefined" ? result.isCompare = !result.isCompare : true;
				
				addOrRemoveFromCompare(result);

				return true;
			}
		});
	}); 

	$('body').off('click', '#alphabeticallySort').on('click', '#alphabeticallySort', function() {
		searchResults.sort(alphabeticallyOrder);
		appendElements();
	});

	$('body').off('click', '#reverseSort').on('click', '#reverseSort', function() {
		searchResults.sort(reverseAlphabeticallyOrder);
		appendElements();
	});

	$('body').off('click', '#ascendingOrder').on('click', '#ascendingOrder', function() {
		searchResults.sort(ascendingPriceOrder);
		appendElements();
	});

	$('body').off('click', '#descendingOrder').on('click', '#descendingOrder', function() {
		searchResults.sort(descendingPriceOrder);
		appendElements();
	});

	$('body').off('click', ':checkbox').on('click', ':checkbox', function() {
		e.stopPropagation();
		var val = $(this).val();
	});

	$('body').off('click', '#gridView').on('click', '#gridView', function() {
		isListView = false;
		appendElements();
	});

	$('body').off('click', '#listView').on('click', '#listView', function() {
		isListView = true;
		appendElements();
	});

	$(window).scroll(function(){
	 	if($(window).scrollTop() > 250){
	 		$('.back-to-top').css({"display": "block"});
	 	} else {
	 		$('.back-to-top').css({'display': 'none'});
	 	}
	 });

	$('body').off('click', '.back-to-top').on('click', '.back-to-top', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 800);
	});

	$('.sidenav').sidenav();
	$('.datepicker').datepicker();
	
	$('input.autocomplete').autocomplete({
     	data: {
	        "Romania": null,
	        "Germany": null,
	        "Greece": null
	    }
    });

    $(document).ready(function(){
        $('#modal').modal();
      });
      
    $(document).ready(function(){
        $('.modal').modal();
      });
});
