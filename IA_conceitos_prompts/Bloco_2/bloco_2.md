# Aula 1 - IA ou buscador?

### Buscadores
Funcionam como bibliotecas gigantescas que indicam onde encontrar informações

### Chatbots (IAs)
São como professores ou assistente que explicam, resolvem problemas e até criam conteúdo diretamente

AMBAS SÃO FERRAMENTAS INCRÍVEIS E DEVEM SER USADAS COM PENSAMENTO CRÍTICO!

### Semelhanças

1. Ambos ajudam os usuários a acessar ou processar informações para atender a uma necessidade
2. Ambos dependem de grandes volumes de informações para fornecer resultados
3. Em ambos, o usuário inicia a interação com perguntas ou palavras-chave
4. Ambos oferecem informações úteis, mas em formatos diferentes
5. Ambos podem se adaptar parcialmente ao comportamento ou perfil do usuário
6. Ambos processam dados, mas as IAs tendem a ser mais sofistificadas na interpretação de contexto
7. Ambos usam tecnologia para manipular dados, mas as IAs têm maior foco em geração criativa
8. Ambos podem dar respostas incompletas ou não atender às expectativas do usuario

### Diferenças


| ASPECTO | BUSCADORES | IAs |
| --- | --- | --- |
| Objetivo principal | Localizar infos em sites da web |Gerar respostas, realizar tarefas, resolver problemas |
| Fonte de dados | Indexam pags públicas disponíveis na net | Usam dados treinados, que podem incluir livros, artigos, bancos de dados |
| Interação | O user faz perguntas e escolhe os links mais relevantes | O user faz perguntas e recebe resposta diretas ou personalizadas |
| Resultados | Links p/ sites relacionados ao tema pesquisado | Resposta ireta em texto, explicações ou resoluções |
| Personalização | Resultados podem ser influenciados pelo historico do user | Resposta podem ser ajustadas com base em preferências ou contexto fornecido |
| Processamento de Dados | Não interpreta perguntas de forma contextual (palavras-chaves) | ENtende linguagem natural e responde de forma mais humanizada |
| Capacidade de Criação | Não cria conteúdos, apenas encontra o que já existe | Gera textos, imagens, códigos e outros conteúdos novos |
| Limitações | Só mostra resultados disponíveis na net | Pode apresentar vieses ou infromações desatualizadas


# Aula 2 - O que é prompt? + Cuidados

### Prompts
No contexto de IA, é uma instrução ou estímulo dado ao sistema para obter uma resposta ou comportamento específico

Prompts são essenciais para direcionar e moldar as saídas de modelos de IA, garantindo que as respostas sejam relevantes e de acordo com as intenções do usuário

Eles funcionam como uma espécie de "comando"

### Introdução a Engenharia de Prompt

É a técnica a ser usada na formulação da pergunta, chana-se "prompting"

A IA vai te responder baseado no que ela aprendeu durante seu treinamento

### Cuidados

1. Pode ser ruim perguntas longas ou curtas
2. Precisa saber que o comprimento de contexto determina o uso de tokens que vc tem direito nas IAs gratuitas. Então isso determina quanto tempo você pode usar uma versão gratuita

### Problema da memória das perguntas
Quando se manda uma nova mensagem, eles precisam reler todas as mensagens anteriores (falta de uma memória de verdade)

A memória de conversa não é eterna, a IA pode perder esssa memória. ENtão cada IA pode reter mais ou menos tempo, assim temos dois caminhos:

- Monitore as respostas e perceba quando perde a memória, porque é preciso dar novamente as instruções iniciais/base
- Da mesma forma toda vez que precisar mudar de assunto - comece um novo chat ou vai dar errado

# Aula 3 - Técnicas e Engenharia de prompt

### Engenharia de prompt
É a prática de criar e otimizar instruções para que modelos de IA gerem respostas mais precisas e relevantes.

#### Algumas técnicas
1. Criam textos de entrada
2. Analisam e ajustam a linguagem
3. Testam e refinam continuamente as entradas

### Tipos de estratégias

1. Prompt Direto
Comando curto e direto para IA

- Vantagens: Simples e rápido
- Desvantagens: Pode gerar respostas genéricas ou incompletas

2. Prompt com Contexto
Fornece mais informações para orientar a resposta. Sugere ser um especialista, sugere ser formal, ou informal, engraçado/divertido...

- Vantagens: Respostas mais personalizadas e relevantes
- Desvantagens: Pode exigir mais tempo para formular o prompt

3. Prompt Incremental
Divide a solicitação em etapas para refinar a resposta

- Vantagens: Garante uma resposta mais detalhada e estruturada
- Desvantagens: Pode exigir mais interações com a IA

4. Prompt de Exemplo (Few-shot Prompting)
Dá exemplos para ensinar à IA o formato desejado

- Vantagens: Gera respostas no formato exato desejado
- Desvantagens: Se os exemplos forem mal escolhidos, podem enviesar a resposta

5. Prompt Negativo
Diz o que não deve ser incluído na resposta

- Vantagens: Evita informações indesejadas
- Desvantagens: Pode ser difícil definir todas as excluções necessárias

6. Cadeia de Pensamento (Chain-of-Thought Prompting)
Induz a IA a pensar passo a passo para resolver problemas mais complexos

- Vantagens: Melhor desempenho em problemas lógicos e matemáticos
- Desvantagens: Pode gerar respostas longas e mais dificeis de interpretar

### Formalizando prompts

#### Partes mais comuns do promt

- Papel
- Instrução
- Pergunta
- Contexto
- Exemplos

### Acrônimo - PACIF

- Papel: Defina o papel que você deseja que a IA desempenhe no contexto do problema
- Ação: Direciona a ação desejada que você espera da IA
- Contexto: Traga o contexto necessário e forneça informações e dados relevantes
- Intenção: Declare sua intenção e direcione a resposta da IA para atender às suas necessidades
- Formato: Defina o formato da resposta desejada

### Acrônimo - PROMPT

- Persona: Serve para direcionar de como a IA deve se comportar
- Roteiro: Serve para direcionar O QUE você pretende fazer 
- Objetivo: Serve para direcionar a sua intenção com esse trabalho, ou seja, o que você pretende alcançar com aquilo
- Modelo: Serve para direcionar o formato em que você quer aquele resultado 
- Panorama: Serve para dar mais contexto e exemplos de boas respostas (títuos, por ex) para a IA aumentar as chances de ele acertar o que foi pedido
- Transformar (prompt incremental): É uma segunda etapa = serve para melhorar os resultados que o modelo de linguagem trouxe. Ex Altere x, y, z 


# Aula 4 - Após o prompt

### O que fazer após o PROMPT?

- Nunca aceite a resposta de primeira
- Leia e analise
- Nunca apenas copie e cole
- Compare com outras IAs
- Analise as fontes
- Veja se tem preconceitos, travas, viés

# Aula 5 - Primeiro exemplos de prompt