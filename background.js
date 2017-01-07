//esta es la que se ejecuta cuando se inicia una pestaña

function isBtcAddress(str){
	var regex = '(?:[13][a-km-zA-HJ-NP-Z1-9]{25,34})';

	return (new RegExp('(?:^' + regex + '$)')).test(str) || (new RegExp(regex, 'g')).test(str);
}

function recursiveChecker(it, level){
	if (level <= 0) {
		return;
	}

	$(it).children().each(function(){
		var content = $(this).html().trim();

		if (content.length > 20 && content.length < 40) {
			console.log(content);
		}

		if (content.length > 20 && content.length < 40 && isBtcAddress(content)) {
			console.log('>>>>>>>');
			console.log(this);
			console.log(content);
		} else {
			setTimeout(function(){
				recursiveChecker(it, level - 1);
			}, 1000);
		}
	});
}

/*
setInterval(function(){
	console.log('start checking');
	recursiveChecker('html');
	console.log('end checking');
}, 5000);
*/

function checkSite(){
	if (window.location.host === 'www.airtm.io') {
		return 'airtm';
	}
}

switch(checkSite()){
	case 'airtm':{
		setInterval(function(){
			if (document.getElementById('qrcode') !== null) {
				var smalles = $('small');

				for (var index in smalles) {
					if (isBtcAddress(smalles[index].innerHTML)) {
						console.log(smalles[index]);
					}
				}
			} else {
				console.log('is null');
			}
		}, 5000);
	}break;
	default : {
		console.log('I don\'t know what site this is');
	}
}