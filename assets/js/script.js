
function Calcular() {

  let entrada1, entrada2, result, opr;
  entrada1 = parseFloat(document.getElementById("entrada1").value);
  console.log(entrada1);
  entrada2 = parseFloat(document.getElementById("entrada2").value);
  console.log(entrada2);
  opr = document.getElementById("opr").value;
  console.log(opr)


  if (opr == '+') {
    result = (entrada1 + entrada2)
  } if (opr === '-') {
    result = (entrada1 - entrada2);
  } if (opr === '*') {
    result = (entrada1 * entrada2);
  } if (opr === '/') {
    result = (entrada1 / entrada2);
  }

  if (result < 0) {
    document.getElementById('result').style.color = "#D82148"
    document.getElementById('result').innerHTML = result

  } else {
    document.getElementById('result').innerHTML = result
    document.getElementById('result').style.color = "rgb(51, 155, 51)"

  }
}

function Limpar()
{
  document.getElementById('result').innerHTML = '00.00'
  document.getElementById('result').style.color = "#151D3B"
  document.getElementById('entrada1').value = ''
  document.getElementById('entrada2').value = ''

}
