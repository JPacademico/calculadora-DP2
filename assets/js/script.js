

document.getElementById('calcula').addEventListener('click', function(){
    let valorEquipamento = document.getElementById('equipamento').value
    let valorSucata = document.getElementById('sucata').value
    let valorUtil = document.getElementById('vida-util').value
    let valorUso = document.getElementById('tempo-uso').value

    let valorPorcentagem = valorEquipamento * 0.1;
    let DP = (valorEquipamento - valorSucata) / valorUtil;
    let DPM = (valorEquipamento * valorPorcentagem) / 12;

    console.log(DP)

    if(valorEquipamento == "" || valorSucata == "" || valorUtil == "" || valorUso == ""){
        document.getElementById('result').innerHTML = "Inválido";
        document.getElementById('result-2').innerHTML = "Inválido";
    }else{
        document.getElementById('result').innerHTML = "Depreciação anual: R$" + DP.toFixed(2);
        document.getElementById('result-2').innerHTML = "Mensal Fiscal: R$" + DPM.toFixed(2);
        
    }
    

});
