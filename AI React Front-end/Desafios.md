# Desafio 1

Você trabalha na equipe de frontend de uma fintech inovadora que está lançando um novo aplicativo de gestão de produtos financeiros digitais. O app permite que usuários consultem rapidamente o tipo de produto financeiro a partir de um código fornecido por parceiros. Para garantir uma experiência fluida, o sistema precisa identificar corretamente o tipo de produto (cartão de crédito, conta digital, empréstimo ou investimento) a partir de um código simples digitado pelo usuário. Sua tarefa é criar uma função que, ao receber o código do produto, retorne o nome do produto correspondente, garantindo que o usuário saiba exatamente com o que está lidando antes de prosseguir.

Implemente um programa que recebe uma string representando o código de um produto financeiro digital e retorna o nome do produto correspondente, conforme a tabela abaixo. Se o código não corresponder a nenhum produto conhecido, retorne "Produto desconhecido". Os códigos e seus produtos são: "CC" para "Cartao de Credito", "CD" para "Conta Digital", "EMP" para "Emprestimo" e "INV" para "Investimento". Considere que os códigos são sensíveis a maiúsculas e minúsculas e não possuem espaços extras.

## Entrada
Uma única string representando o código do produto financeiro digital. Os valores possíveis são "CC", "CD", "EMP", "INV" ou qualquer outro valor não listado.

## Saída
Uma única string com o nome do produto correspondente ao código informado, exatamente como especificado, ou "Produto desconhecido" caso o código não seja reconhecido.

Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

Entrada	Saída
CC	Cartao de Credito
EMP	Emprestimo
CD	Conta Digital
XYZ	Produto desconhecido

```js
const produtos = {
    "CC": "Cartao de Crdito",
    "CD": "Conta Digital",
    "EMP": "Emprestimo",
    "INV": "Investimento",
}

const codigo = gets();

const nomeProduto = produtos[codigo] || "Produto desconhecido";

print(nomeProduto);
```

# Desafio 2

Você foi contratado como desenvolvedor frontend para um novo app bancário digital chamado Bankly. Sua primeira missão é criar uma interface simples que exibe o nome do usuário e o saldo da conta de forma amigável. O time de UX definiu que, ao receber o nome do usuário e o saldo em centavos, a interface deve mostrar uma mensagem personalizada de boas-vindas, seguida do saldo formatado em reais com duas casas decimais. Por exemplo, se o usuário se chama "Lucas" e tem 12345 centavos, a mensagem deve ser: "Bem-vindo, Lucas! Seu saldo é R$123,45".

Implemente uma função que receba uma string com o nome do usuário e um número inteiro representando o saldo em centavos, separados por um espaço. Sua função deve retornar a mensagem de boas-vindas no formato especificado. Considere que o nome não terá espaços e o saldo será sempre um número inteiro não negativo. Não utilize bibliotecas externas para formatação.

## Entrada
Uma única linha contendo o nome do usuário (string sem espaços) seguido de um espaço e o saldo em centavos (inteiro não negativo).

## Saída
Uma única linha com a mensagem: "Bem-vindo, [nome]! Seu saldo é R$[valor]", onde [valor] é o saldo convertido para reais, com duas casas decimais e vírgula como separador decimal.

```js
// Lê a linha de entrada do usuário
const entrada = gets();

// Divide a entrada onde tem o espaço em branco
const partes = entrada.split(" ");
const nome = partes[0]; // Pega o nome
const centavos = parseInt(partes[1]); // Pega o saldo e transforma em número inteiro

// Converte os centavos para reais
const saldoReais = (centavos / 100).toFixed(2).replace(".", ",");

// Cria a mensagem final
const mensagem = `Bem-vindo, ${nome}! Seu saldo é R$${saldoReais}`;

// Imprime o resultado para o usuário
print(mensagem);
```