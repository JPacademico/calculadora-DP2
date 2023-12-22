

document.getElementById('calcula').addEventListener('click', function(){
    let valorEquipamento = document.getElementById('equipamento').value
    let valorSucata = document.getElementById('sucata').value
    let valorUtil = document.getElementById('vida-util').value
    let valorUso = document.getElementById('tempo-uso').value

    let DP = (valorEquipamento - valorSucata) / valorUtil * valorUso

    if(valorEquipamento == "" || valorSucata == "" || valorUtil == "" || valorUso == ""){
        document.getElementById('result').innerHTML = "Inválido";
    }else{
        document.getElementById('result').innerHTML = "R$" + DP.toFixed(2);
        
    }
    

});
