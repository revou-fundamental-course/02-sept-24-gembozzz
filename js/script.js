// javascript

function luasSegitiga() {
    var panjangAlas = document.getElementById('panjang-alas').value;
    var tinggi = document.getElementById('tinggi').value;
    // if (panjangAlas == '' || tinggi == '' || panjangAlas.includes('e') || tinggi.includes('e')) {
    //     alert("Form masih kosong bro")
    // } else{
    //     luasSegitiga = 0.5 * panjangAlas * tinggi;
    //     document.getElementById('result').textContent = `Hasil Perhitungan: ${luasSegitiga}`;
    // }   
    luasSegitiga = 0.5 * panjangAlas * tinggi;
    document.getElementById('result').textContent = `Hasil Perhitungan: ${luasSegitiga}`;
}

function selectionJajar() {
    let segitiga = document.getElementById('jajar-genjang-btn');
    let jajargenjang = document.getElementById('jajar-genjang-btn').style.backgroundColor = 'cadetblue';
}