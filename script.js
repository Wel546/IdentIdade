function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = window.document.getElementById('dataNascimento')
    var foto = window.document.getElementById('ftRes')
    var res = window.document.querySelector('div#conclusao')
    var idade = ano - formAno.value
    if(formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO!] Verifique os dados fornecidos e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        if (fsex[0].checked && idade <= 2) {
            foto.src = 'dcim/bbM.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é um bb de ${idade} ano(s) de idade`
        } else if(fsex[1].checked && idade <= 2) {
            foto.src = 'dcim/bbF.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é uma bb de ${idade} ano(s) de idade`
        } else if(fsex[0].checked && idade <= 12) {
            foto.src = 'dcim/criancaM.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é um menino de ${idade} ano(s) de idade`
        } else if(fsex[1].checked && idade <= 12) {
            foto.src = 'dcim/criancaF.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é uma menina de ${idade} ano(s) de idade`
        } else if(fsex[0].checked && idade < 18) {
            foto.src = 'dcim/adolescenteM.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é um adolescente de ${idade} ano(s) de idade`
        } else if(fsex[1].checked && idade < 18) {
            foto.src = 'dcim/adolescenteF.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é uma adolescente de ${idade} ano(s) de idade`
        } else if(fsex[0].checked && idade < 60) {
            foto.src = 'dcim/adultoM.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é um homem de ${idade} ano(s) de idade`
        } else if(fsex[1].checked && idade < 60) {
            foto.src = 'dcim/adultoF.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é uma mulher de ${idade} ano(s) de idade`
        } else if(fsex[0].checked) {
            foto.src = 'dcim/idosoM.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é um idoso de ${idade} ano(s) de idade`
        } else if(fsex[1].checked) {
            foto.src = 'dcim/idosoF.png'
            foto.style.visibility = 'visible'
            foto.style.width = 'auto'
            res.innerHTML = `Identificamos que você é uma idosa de ${idade} ano(s) de idade`
        }
    }
}