var app = angular.module('eQuickShopApp', ['ngRoute']);
 
 // configure our routes
	app.config(function($routeProvider, $locationProvider) {
		$routeProvider

			// route for the Home page
			.when('/', {
				templateUrl : 'views/partials/home.html',
				controller  : 'mainController'
			})
        
            // route for the create page
            .when('/create', {
				templateUrl : 'views/partials/create.html',
				controller  : 'createController'
			})

			// route for the create page
            .when('/detail', {
				templateUrl : 'views/partials/detail.html',
				controller  : 'detailController'
			})
             
           .when('/create_sn', {
				templateUrl : 'views/pages/service_center/create_sn.html',
				controller  : 'create_snController'
			})	
           .otherwise({
                redirectTo:'/'
            });
	});

app.controller('mainController', function($scope, $http) {
    $scope.sd = [];
    $scope.cart = [];
    
    $scope.getDrinks = function(id) { 
		$http.get('api/products/' + id).  
		success(function(data, status, headers, config) {
			$scope.sd = data;
		});
	}
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.addCart = function(id) {    
        for(i = 0; i < $scope.sd.length; i++) {
            if ($scope.sd[i].id === id) {
                $scope.cart.push({
                    id :$scope.sd[i].id,
                    qty: 1,
                    description: $scope.sd[i].product_name,
                    cost: $scope.sd[i].item_unit_price,
                    tblno : $scope.tblno
                });
            $scope.numberOfPages=function(){
                return Math.ceil($scope.cart.length/$scope.pageSize);                
            }
            }
        }
    }

    $scope.updatePlusCart = function(id) {   
        var a =0; 
        for(i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].id === id) {
                $scope.cart[i].qty += 1;
                a = $scope.cart[i].qty;
            }
        }
    }

    $scope.updateMinusCart = function(id) {   
        var a =0; 
        for(i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].id === id && $scope.cart[i].qty > 1) {
                $scope.cart[i].qty -= 1;
                a = $scope.cart[i].qty;
            }
        }
    }
    
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cart, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }

    $scope.removeItem = function(index) {
        $scope.cart.splice(index, 1);
    }

    $scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.cart, function (item) {
            item.Selected = $scope.selectedAll;
        });

    };
    $scope.clear = function () {
        $scope.cart.length = 0;
        console.log(0);
    }

     $scope.removeAll = function () {
       angular.forEach($scope.cart, function (row, index) {
            if($scope.cart[index].Selected) {
                $scope.cart.splice(index,1);
            }            
        });
    };
});

app.controller('createController', function($scope, $http, $location) {

	$scope.posts = [];

	$scope.submitPost = function() { 
		$http.post('api/blog', {
			title: $scope.posts.title,
			description: $scope.posts.description
		}).success(function(data, status, headers, config) {
			if (data.errors) {
                // Showing errors.
                $scope.errorTitle = data.errors.title;
                $scope.errorDescription = data.errors.description;
            } 
            else {
                $scope.posts.push(data);
			    $scope.posts = '';
			    $location.path('/');
            }			
		});
	};

});

app.controller('detailController', function($scope, $http) {

	$scope.posts = [];

	$scope.viewDetail = function(id) {
		$scope.loading = true;
		$http.get('api/blog/' + id).
		success(function(data, status, headers, config) {
			$scope.posts = data;
			console.log($scope.posts);
			$scope.loading = false;
		});
	}

});

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});