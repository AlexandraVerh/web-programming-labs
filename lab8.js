function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали: "+ today.toLocaleString('ru-RU') + '<br>' +
    "Дата и время для чешской локали: "+ today.toLocaleString('cs-CZ') + '<br>' +
    "Дата и время для канадской локали: "+ today.toLocaleString('en-CA') + '<br>' +
    "Дата и время для испанской локали: "+ today.toLocaleString('es-EC') + '<br>' +
    "Дата и время для итальянской локали: "+ today.toLocaleString('it-IT') + '<br>';
    out.style.color = 'navy';
}
function showDaysCount () {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('dr').innerHTML = 'Количество дней с даты рождения: '+ daysCount;
    inputDate.style.color = 'red';
}
function yd() {
    document.getElementById('d').value = "";
    document.getElementById('dr').innerHTML = "";
  }