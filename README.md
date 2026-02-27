

# 📘 Tabuada com Estrutura de Repetição WHILE – JavaScript

Projeto educacional desenvolvido para demonstrar, de forma prática e didática, a utilização da **estrutura de repetição `while` em JavaScript**, aplicada na construção de uma tabuada dinâmica.

O sistema executa repetições automaticamente enquanto uma condição for verdadeira, gerando os cálculos matemáticos de forma sequencial.

---

## 🎯 Objetivo

Este projeto tem como finalidade:

* Demonstrar o funcionamento do **laço de repetição `while`**
* Trabalhar com **condição lógica**
* Praticar **incremento de variável**
* Desenvolver **raciocínio lógico**
* Aplicar **operações matemáticas**
* Compreender a diferença entre `for` e `while`

---

## 🧠 Conceito Principal: Estrutura WHILE

O `while` é utilizado quando **não se sabe exatamente quantas vezes o código será repetido**, pois a repetição depende de uma condição.

Tradução:
**while = enquanto**

Conceito:

> O bloco de código será executado **enquanto a condição for verdadeira**.

---

## 🧩 Estrutura do Laço WHILE

O laço `while` é composto por três partes principais:

* **Inicialização**
* **Condição**
* **Incremento**

Exemplo:

```javascript
let contador = 1;

while (contador <= 10) {
    // código executado
    contador++;
}
```

---

## 🧮 Aplicação: Tabuada com WHILE

O sistema gera uma tabuada utilizando o laço `while` para repetir os cálculos.

Exemplo de lógica:

```javascript
let numero = 5;
let multiplicador = 1;

while (multiplicador <= 10) {
    console.log(numero + " x " + multiplicador + " = " + (numero * multiplicador));
    multiplicador++;
}
```

---

## 💻 Funcionamento do Sistema

1. Uma variável é inicializada
2. A condição é verificada
3. Enquanto a condição for verdadeira:

   * O cálculo é realizado
   * O valor é exibido
   * A variável é incrementada
4. Quando a condição se torna falsa, o laço é encerrado

---

## 🔎 Estrutura do Projeto

```
📁 tabuada-while/
│
├── index.html   → Estrutura da página
└── script.js    → Lógica com WHILE
```

---

## 🖥️ Estrutura HTML

O sistema pode conter:

* Campo para digitar o número da tabuada
* Botão para executar o cálculo
* Área para exibir os resultados

Exemplo:

```html
<input type="number" id="numero">
<button onclick="gerarTabuada()">Gerar Tabuada</button>
<div id="resultado"></div>
```

---

## 🧮 Exemplo de Resultado

Para a tabuada do número 4:

```
4 x 1 = 4  
4 x 2 = 8  
4 x 3 = 12  
...  
4 x 10 = 40
```

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* JavaScript (Vanilla JS)
* Estrutura de repetição `while`
* Operadores aritméticos
* Manipulação de variáveis
* Lógica de programação

---

## 📚 Conceitos Trabalhados

* Estrutura de repetição `while`
* Condição lógica
* Incremento de variável
* Controle de fluxo
* Operações matemáticas
* Organização do código
* Separação entre estrutura e lógica

---

## 🧩 Lógica do Exercício

Enquanto o valor do multiplicador for menor ou igual a 10, o sistema:

* Calcula a multiplicação
* Exibe o resultado
* Incrementa o valor
* Repete o processo

Quando a condição se torna falsa, o laço é finalizado automaticamente.

---

## 👩‍💻 Autora

Paolla Paula Veronez

**Estudante de Desenvolvimento de Sistemas**

---

