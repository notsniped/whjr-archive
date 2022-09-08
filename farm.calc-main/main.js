function areaCalc() {
    var area = Number(document.getElementById("length").value) * Number(document.getElementById("length").value);
    document.getElementById("labelArea").value = area;
    console.log(area);
}
function periCalc() {
    var peri_1 = Number(document.getElementById("length").value) + Number(document.getElementById("length").value);
    var peri_2 = 2 * peri_1;
    console.log(peri_1);
    console.log(peri_2);
    document.getElementById("labelLength").value = peri_2;
}

function showWin() {
    window.alert("Formula for area= side x side; Formula for length= 2 x (side + side)");
}