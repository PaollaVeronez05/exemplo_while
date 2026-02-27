function gerarTabuada(){

    let n = Number(document.getElementById("numTabuada").value);
    let display = document.getElementById("resultado");
    let conteudo = "<h3> Tabuada do" + n + "</h3>"

    let i = 1;

    while (i <= 10){
        let resultado = n * i;
        conteudo += n + "x" + i + "=" + resultado + "<br>";

        i++;



    }
    display.innerHTML = conteudo;
}