fetch("https://api.exchangerate-api.com/v4/latest/" + Kattintas(ertek))
.then(x => x.json())
.then(y => megjelenit(y));

function Kattintas() {
    var ertek = adatok.rates;
}
document.getElementById("bevitel").value;


function megjelenit(adatok){
    console.log(adatok)
    tomb=adatok;
    var sz = '';
    //for (var elem of adatok) {
       sz+='<div class="col-sm-3">'
       sz+='<p>'+adatok.rates.HUF+'</p>'
       sz+='</div>'


        
    //}
    document.getElementById("usd_huf").innerHTML=sz;
    
}



/*
1. Írasd ki 1 usa dollár hány forint: HUF, lapon felül jelenjen meg!

2. Készíts beviteli mezőt, ha beírom, hogy usd akkor írja ki hány forint.
De ha beírom pl. EUR, akkor az írja ki 1 euró hány forint!
3. Bootstrapet használj, szép legyen, intelligens, kiírásokkal!!!!!!
4. Tedd fel saját githubodra, és ide a linkjét küld el a lapnak!!!!!
Tanárnő.

*/
