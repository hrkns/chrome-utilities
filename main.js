//esta solo se ejecuta cuando se inicia el navegador o se instala la extension


angular
.module('utilities', [])
.run([
	"$http",
	"$rootScope",
	"$timeout",
	($http, $rootScope, $timeout) => {
		function getCryptoCurrencies(callback) {
			$.ajax({
				url : 'http://api.cryptocoincharts.info/listCoins',
				method : 'GET',
				success : (data) => {
					console.log(data);
					$timeout(()=>{
						$rootScope.cryptocurrencies = data;
					});
					$('select').select2();
					$('.select2-container').css('width', '100%');
				},
				error : (error) => {
					console.log(error);
				},
				after : (data) => {
				},
			});
		}

		$rootScope.changed_cc = ()=>{
			console.log($rootScope.cryptocurrency);
		};

		getCryptoCurrencies();
	}
]);