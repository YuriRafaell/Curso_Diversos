# Introdução a PHP

## - O que é PHP
    
    Usado como back, fica por trás, na parte de configuração.
    
    Linguagem de programação, usada apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar contepudo dinâmico na Web.
    
    - Características:
        - Simplecidade;
        - Eficiência;
        - Desenvolvimento de sites dinâmicos;
        - Multiplataforma

## - História de PHP
    - Surgiu em 1994
    - Ramus Lerdof
    - Primeira tentativa foi um conjunto de binários escritos em C
    - Personal Home Page Tools

## - Ecossistema PHP
    - CMS: É um sistema de gerenciamento de conteúdo.
        - WordPress
        - Drupal
        - Magento
        - Sugarcam
        - Elgg
        - PHPBB
        - Moodle
    - Framework: É um pacote de códigos prontos.
        - Laravel
        - Symfony
        - Codeigniter

## - Instalando o PHP no windows e Linux
    - Windows
        - Baixar o XAMPP;
        - Executar;
    - Linux
        - Baixar o XAMPP;

## - Primeiro código PHP
    
    <?php ?> ⇒ Inicia o código
    
    $ ⇒ declara variavél
    
    echo ⇒ imprime

## - Documentação PHP
    
    Ir no site do PHP tem lá vários tutoriais para nós ajudar na parte de documentação: https://www.php.net/manual/pt_BR/index.php 

## - Novidades do PHP 8
    - JIT (Just in Time)
        - Compilador de códigos PHP, indicado de sistema complexos e funções com operações com imagens
    - Funções
        - Economizar linhas de códigos
    - Arrays
        - Praticidade no código limpo

## - Back-end vs. Front-end
    - Back-end
        - Visual do site
    - Front-end
        - Regras, conexão com banco de dados

# Tipos de variáveis em PHP

## Aula 1

- O que são variáveis
    
    É um espaço na memoria do pc destinado a um dado que é alterado durante a execução do algoritmo.

    ```
    $curso = "Modo de declarar variavél no PHP, é apenas usar o $";
    ```

- O que são constantes
    
    É um recurso das linguagens de programação que tem como objetivo armazenar um valor em memória de modo que não possa ser alterado.

    ```
    <?php
       define("nomeConstant", "Tipos de constantes em PHP.");
       echo nomeConstant;
    ?>
    ```

    ```
    <?php
       define("valorDiario", "80");
       define("gorjetas", "40");
   
       echo valorDiario + gorjetas;
    ?>
    ```

## Aula 2

- O que são strings
    
    É uma sequencia de caracteres utilizada em palavras, frases e números.

    ```
    ADICIONANDO HTML NO PHP
    <?php
       $texto = "<h1> Texto em H1 </h1>";
    ?>
    ```

    ```
    <?php
       $s = "String texto armazenada na variavel";
       $valorDiario = "80";
    ?>
    ```

- Tipos de dados integers/números
    
    Os integers são todos os números negativos e positivos. No PHP pode ser INTEGER ou LONG.
    
    - INTEGER
        - Armazenar números menores
    - LONG
        - Armazenar números maiores

- Tipos de dados Data
   ```
   <?php
      date_default_timezone_set("America/Brasilia");
      $data = date("d/m/Y H:i:s");
      echo $data;
    ?>
    MOSTRA O DIA E AS HORAS
   ```

   ```
   <?php
      echo date("d"); (MOSTRA DIA UTUAL)
      echo date("m"); (MOSTRA MES ATUAL)
      echo date("M"); (MOSTRA AS INICIAIS DO MES ATUAL)
      echo date("y"); (MOSTRA OS DOIS ULTIMOS DIGITOS DO ANO ATUAL)
      echo date("Y"); (MOSTRA O ANO COMPLETO ATUAL)
      echo date("d/m/Y"); (MOSTRA A DATA ATUAL)
    ?>
   ```

- Trabalhando com array no PHP
    
    É uma coleção de elementos
    
    É uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pleo menos, um índice ou uma chave.

    ```
    <?php
       $cursos = array("php", "java", "redes", "javascript", "c");
       print_r($cursos);
       print_i($cursos[2]);
    ?>
    ```

## Aula 3

- Finções Echo e Print
  ```
  <?php
     print "exibir informações na tela, porém só aguenta apenas uma string";
     echo "exibir informações na tela ECHO";
    ?>
  ```

- Aprendendo sobre o escopo local e global
  ```
  <?php
     echo acessando uma variavél local;
     function soma() {
        $x = 10 + 40;
        return $x;
    }

     echo soma();
    ?>
  ```

  ```
  <?php
     echo "acessando uma variavel GLOBAL";
     $a = 50;
     function soma() {
       global $a;
       $x = $a + 40;
       return $x;
     }

     echo soma();
    ?>
  ```

## Aula 4
- Apresentação do HTML
    
    Linguagem de Marcação de Hipertexto
    
    - Tag’s
        - HTML: É o elemento básico
        - HEAD: Cabeçalho do documento
        - BODY: Corpo do documento
        - H4: Elemento de cabeçalho, tendo 6 niveis

- Projeto básico
    
     index.php