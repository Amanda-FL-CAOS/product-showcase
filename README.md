* IMPORTANTE: Não inicie este desafio sem autorização. O desafio só poderá ser iniciado no dia e horário agendado via Google Meet. Entre em contato via email ou whatsapp:
  - administrativo@infinixassessoria.com.br
  - (21) 99515-2411

# DESAFIO FRONT-END

## Sobre
**Stack**: React + TypeScript + Axios + TailwindCSS
**API Externa**: PokeAPI.co (https://pokeapi.co/)
**Escopo**: Uma Pokedéx online.

## Requisitos Essenciais (Timebox 4h)

1. Estrutura de Pastas: A estrutura deve ser organizada. Não é sobre **qual** estrutura, mas se ela é consistente e se você consegue justificá-la (posteriormente via README-CANDIDATO).
2. Consumo de API: Crie um serviço de API que usa *axios* para interagir com os endpoints.
3. Tipagem (TypeScript): Crie interfaces para tipar os dados recebidos da API. O uso de *any* deve ser evitado.
4. Tela 1: Home (/) — A lista de Pokémon
    - Buscar a lista inicial de Pokémons com limite de 151.
    - Renderizar um grid responsivo usando **TailwindCSS** para exibir os Pokémons.
    - Cada card no grid deve ser clicável e exibir o nome do Pokémon e sua imagem.
    - Ponto de Avaliação Chave: O endpoint de lista *não* retorna a imagem do Pokémon, apenas o nome e uma url de detalhes. Encontre uma solução para esse problema.
5. Tela 2: Detalhes (/pokemon/:name) — A tela de detalhes
    - Configure o ```react-router-dom``` para criar uma rota dinâmica.
    - Clicar em um card na "Home", leva o usuário para "Detalhes".
    - Nessa tela, uma nova chamada de API deve ser feita parra buscar os dados completos do Pokémon.
    - Exiba o **nome**, a imagem **oficial**, os **tipos**, a **altura** e o **peso** do Pokémon.
6. Estados de UI: A tela Home deve exibir um indicador de carregamento enquanto os dados estão sendo buscados.

#### Bônus (Desejáveis):
    - Hospedagem: Faça deploy do site estático e cole o link no README-CANDIDATO.md.
    - Filtro: Adicione um campo de <input> na tela Home que filtra a lista de Pokémon por nome (no lado do cliente)
    - Contexto: Use a Context API para criar um "Time Pokémon", permitindo ao usuário "favoritar" até 6 Pokémon, e exibir os favoritos em algum lugar do site.
    - Cache: Adicione uma solução para guardar os dados recebidos da API em cache.
    - Atualização: Adicione uma solução para que o usuário consiga atualizar a lista de Pokémons, bem como sua lista de favoritos (Essa task requer Cache).

# Rubrica de Avaliação

| Dimensão Avaliada                        | Peso  | Pontuação (1-5) | Descrição da Avaliação (O que procurar)                                                                                                                                                                                                 |
|------------------------------------------|-------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Funcionalidade (Requisitos Essenciais)** | 40%  | [1-5]           | **5 (Excelente):** Cumpriu 100% dos requisitos essenciais. A aplicação roda de primeira, sem bugs óbvios. Trata estados de loading/error.<br>**3 (Satisfatório):** Cumpriu a maioria (80%+) dos requisitos. Funcionalidade principal funciona, mas com bugs menores.<br>**1 (Inaceitável):** Não roda ou a funcionalidade principal está quebrada. O avaliador não consegue testar a solução. |
| **2. Qualidade de Código e Estrutura**       | 25%  | [1-5]           | **5 (Excelente):** Código limpo, legível e idiomático. Segue princípios (ex: DRY). Estrutura de pastas lógica e escalável. Tipagem (TS) útil e precisa. Separação clara de responsabilidades.<br>**3 (Satisfatório):** Código funciona, mas com repetição ou "code smells". Estrutura de pastas aceitável, mas confusa. Tipagem usada com alguns `any`.<br>**1 (Inaceitável):** "Código espaguete". Variáveis ruins. Lógica de negócio misturada com UI. "Sopa de arquivos" na raiz. |
| **3. Processo e Comunicação (Git & README)** | 25%  | [1-5]           | **5 (Excelente):** Commits atômicos, frequentes e bem descritos. PR bem escrito. README completo com setup e explicações de design.<br>**3 (Satisfatório):** Usa Git, mas commits grandes (ex: "implementa home e função de agendar tarefas e remove var desnecessária"). README mínimo com instruções básicas.<br>**1 (Inaceitável):** Um único commit ("final"). Nenhum README ou instruções. Demonstra falta de profissionalismo e comunicação. |
| **4. Bônus e Resolução de Problemas**        | 10%  | [1-5]           | **5 (Excelente):** Implementou requisitos bônus funcionando. README explica como utilizar.<br>**3 (Satisfatório):** Tentou implementar bônus, mas não funcionou. README explica falha e plano.<br>**1 (Inaceitável):** Ignorou bônus ou implementou com falhas e sem explicação no README. |

## Instruções sobre "README-CANDIDATO" (Timebox 30min):
Preencha este arquivo com informações claras e concisas, separadas pelas seguintes seções:

#### Seção 1: Instruções para rodar
- Quais variáveis de ambiente são necessárias?
- Como instalar dependências?
- Como rodar o projeto?

#### Seção 2: Decisões de design
- Por que você escolheu essa estrutura de pastas?
- Qual foi a maior dificuldade que você encontrou e como superou?
- O que você não teve tempo de fazer (dentro do timebox) e como você faria se tivesse mais tempo?

#### Seção 3: Link para Deploy (Bônus)
- Cole aqui o link do projeto hospedado.

#### Seção final: Recomendações
- Escreva aqui dicas, melhorias e recomendações sobre este desafio.

## Considerações finais:
Este desafio não foi pensado para encontrar quem o finaliza 100% ou quem o termina mais rápido. Estamos buscando um desenvolvedor sério, que saiba como desenvolver soluções mesmo que para apenas 50% do projeto. Não queremos nenhum dev que dependa 100% de IA ou de terceiros, mas sim aquele que sabe priorizar, desenvolver e pesquisar.
