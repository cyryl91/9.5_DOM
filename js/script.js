var elementy = document.getElementsByClassName('button');
//console.log(elementy);
var iloscElementow = elementy.length;
console.log('ilosc elementów to: ' +iloscElementow);
for( var i = 0 ; i < iloscElementow ; i++) {
	console.log(i);
	var textButton = elementy[i].innerText;
	console.log(textButton);
};
