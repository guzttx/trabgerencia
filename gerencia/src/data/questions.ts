import { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é a duração recomendada para uma Sprint no Scrum?",
    options: ["1 semana", "2-4 semanas", "1 mês", "6 semanas"],
    correctAnswer: 1,
    timeLimit: 20,
    explanation: "As Sprints devem durar de 2 a 4 semanas para manter o foco, permitindo tempo suficiente para entregar incrementos valiosos. Este período equilibra a sobrecarga de planejamento com a frequência de entrega.",
    wrongAnswerExplanations: [
      "1 semana é muito curto para a maioria das equipes completarem trabalho significativo e pode levar a sobrecarga excessiva das cerimônias da Sprint.",
      "", // Esta é a resposta correta, então não precisa de explicação
      "1 mês (4 semanas) está no limite superior e pode ser muito longo, reduzindo oportunidades de feedback e adaptação.",
      "6 semanas é muito longo e vai contra os princípios do Scrum de iterações curtas e inspeção e adaptação frequentes."
    ]
  },
  {
    id: 2,
    question: "Quem é responsável por priorizar o Product Backlog no Scrum?",
    options: ["Scrum Master", "Product Owner", "Time de Desenvolvimento", "Stakeholders"],
    correctAnswer: 1,
    timeLimit: 15,
    explanation: "O Product Owner é o único responsável por gerenciar e priorizar o Product Backlog. Ele decide quais funcionalidades são mais valiosas e devem ser trabalhadas primeiro.",
    wrongAnswerExplanations: [
      "O Scrum Master facilita o processo, mas não prioriza o backlog. Seu papel é servir a equipe e remover impedimentos.",
      "", // Resposta correta
      "O Time de Desenvolvimento implementa o trabalho, mas não o prioriza. Eles podem fornecer informações sobre dependências técnicas e estimativas de esforço.",
      "Os Stakeholders fornecem informações e feedback, mas o Product Owner toma as decisões finais de priorização baseadas no valor de negócio."
    ]
  },
  {
    id: 3,
    question: "Qual é o principal objetivo da reunião Daily Scrum?",
    options: ["Reportar progresso à gerência", "Sincronizar atividades e planejar próximas 24 horas", "Revisar trabalho concluído", "Atribuir tarefas aos membros da equipe"],
    correctAnswer: 1,
    timeLimit: 18,
    explanation: "A Daily Scrum é para o Time de Desenvolvimento sincronizar seu trabalho e planejar o que realizarão nas próximas 24 horas. Não é um relatório de status para a gerência.",
    wrongAnswerExplanations: [
      "A Daily Scrum não é para reportar à gerência - é um evento de sincronização da equipe. Relatórios gerenciais acontecem por outros meios.",
      "", // Resposta correta
      "A revisão do trabalho acontece durante a Sprint Review, não na Daily Scrum. A Daily Scrum foca na coordenação e planejamento.",
      "O Scrum promove equipes auto-organizadas. As tarefas não são atribuídas por outros - os membros da equipe puxam o trabalho e se coordenam entre si."
    ]
  },
  {
    id: 4,
    question: "No Ágil, o que significa 'Software funcionando mais que documentação abrangente'?",
    options: ["Nunca escrever documentação", "Documentação é completamente inútil", "Priorizar software funcional mantendo documentação necessária", "Escrever apenas comentários no código"],
    correctAnswer: 2,
    timeLimit: 25,
    explanation: "Este princípio Ágil significa que valorizamos software funcionando mais que documentação extensa, mas ainda criamos documentação necessária. O foco é entregar valor através de software funcionando.",
    wrongAnswerExplanations: [
      "Esta é uma interpretação extrema. O Ágil valoriza software funcionando MAIS que documentação, mas não elimina documentação completamente.",
      "A documentação tem valor, mas o software funcionando tem MAIS valor. O princípio é sobre priorização, não eliminação.",
      "", // Resposta correta
      "Comentários no código são apenas um tipo de documentação. O princípio se aplica a toda documentação - criar o que é necessário, não documentação abrangente por si só."
    ]
  },
  {
    id: 5,
    question: "Qual é o tamanho máximo recomendado para um Time de Desenvolvimento Scrum?",
    options: ["5 pessoas", "7 pessoas", "9 pessoas", "12 pessoas"],
    correctAnswer: 2,
    timeLimit: 15,
    explanation: "O Guia do Scrum recomenda 3-9 pessoas para um Time de Desenvolvimento, sendo 9 o máximo. Equipes maiores tornam-se mais difíceis de coordenar e comunicar efetivamente.",
    wrongAnswerExplanations: [
      "5 pessoas está dentro da faixa recomendada, mas não é o máximo. Equipes podem ser eficazes com até 9 membros.",
      "7 pessoas é um bom tamanho, mas ainda não é o máximo recomendado pelo Guia do Scrum.",
      "", // Resposta correta
      "12 pessoas excede a recomendação do Scrum. Equipes grandes têm sobrecarga de comunicação e desafios de coordenação que reduzem a eficácia."
    ]
  },
  {
    id: 6,
    question: "O que é uma User Story no desenvolvimento Ágil?",
    options: ["Uma especificação técnica detalhada", "Uma descrição breve de uma funcionalidade da perspectiva do usuário", "Um relatório de bug", "Um cronograma do projeto"],
    correctAnswer: 1,
    timeLimit: 18,
    explanation: "Uma User Story é uma descrição breve e simples de uma funcionalidade escrita da perspectiva da pessoa que deseja a nova capacidade, geralmente seguindo o formato: 'Como [usuário], eu quero [objetivo] para que [benefício]'.",
    wrongAnswerExplanations: [
      "Especificações técnicas são documentos detalhados de implementação. User Stories são intencionalmente breves e focam no valor do usuário, não em detalhes técnicos.",
      "", // Resposta correta
      "Relatórios de bug descrevem defeitos na funcionalidade existente. User Stories descrevem nova funcionalidade ou recursos da perspectiva do usuário.",
      "Cronogramas de projeto mostram prazos e marcos. User Stories descrevem funcionalidades ou capacidades individuais que os usuários precisam."
    ]
  },
  {
    id: 7,
    question: "O que acontece durante uma Sprint Retrospective?",
    options: ["Planejar a próxima Sprint", "Revisar user stories concluídas", "Identificar melhorias para processos da equipe", "Estimar story points"],
    correctAnswer: 2,
    timeLimit: 20,
    explanation: "A Sprint Retrospective é onde a Equipe Scrum reflete sobre seu processo e identifica maneiras de melhorar sua eficácia, trabalho em equipe e práticas para a próxima Sprint.",
    wrongAnswerExplanations: [
      "O Sprint Planning é onde a próxima Sprint é planejada. A Retrospective foca na melhoria do processo, não no planejamento de trabalho futuro.",
      "A Sprint Review é onde o trabalho concluído é demonstrado e revisado. A Retrospective foca em como a equipe trabalhou junta.",
      "", // Resposta correta
      "A estimativa de story points tipicamente acontece durante o Sprint Planning ou refinamento do backlog, não durante retrospectivas."
    ]
  },
  {
    id: 8,
    question: "O que é a Definition of Done no Scrum?",
    options: ["Quando o código está escrito", "Quando os testes estão completos", "Entendimento compartilhado dos critérios de conclusão do trabalho", "Quando o Product Owner aprova"],
    correctAnswer: 2,
    timeLimit: 22,
    explanation: "A Definition of Done é um entendimento compartilhado entre a equipe sobre o que significa o trabalho estar completo. Ela garante transparência e qualidade definindo os critérios que devem ser atendidos.",
    wrongAnswerExplanations: [
      "Escrever código é apenas um passo. A Definition of Done tipicamente inclui codificação, testes, documentação e outros critérios de qualidade.",
      "Testes são importantes, mas a Definition of Done geralmente inclui múltiplos critérios além da conclusão dos testes.",
      "", // Resposta correta
      "A aprovação do Product Owner pode ser parte da Definition of Done, mas a Definition em si são os critérios abrangentes, não apenas a aprovação."
    ]
  },
  {
    id: 9,
    question: "No Kanban, o que significa WIP?",
    options: ["Work In Process", "Work In Progress", "Weekly Implementation Plan", "Workflow Integration Protocol"],
    correctAnswer: 1,
    timeLimit: 15,
    explanation: "WIP significa 'Work In Progress' e refere-se à limitação da quantidade de itens de trabalho que estão sendo ativamente trabalhados a qualquer momento para melhorar o fluxo e reduzir gargalos.",
    wrongAnswerExplanations: [
      "Embora 'Work In Process' soe similar, o termo correto do Kanban é 'Work In Progress', que enfatiza a natureza contínua do trabalho.",
      "", // Resposta correta
      "Este não é um termo do Kanban. WIP no Kanban refere-se especificamente aos itens de trabalho sendo trabalhados atualmente, não ao planejamento semanal.",
      "Este não é um termo do Kanban. WIP é sobre limitar itens de trabalho concorrentes para melhorar fluxo e eficiência."
    ]
  },
  {
    id: 10,
    question: "Qual é o papel principal de um Scrum Master?",
    options: ["Gerenciar a equipe e atribuir tarefas", "Servir a equipe removendo impedimentos", "Escrever user stories", "Tomar decisões técnicas"],
    correctAnswer: 1,
    timeLimit: 18,
    explanation: "O Scrum Master é um líder-servidor que ajuda a equipe removendo impedimentos, facilitando eventos e garantindo que o processo Scrum seja seguido. Eles não gerenciam pessoas ou atribuem tarefas.",
    wrongAnswerExplanations: [
      "Scrum Masters não gerenciam pessoas ou atribuem tarefas. As equipes Scrum são auto-organizadas, e o Scrum Master serve a equipe em vez de gerenciá-la.",
      "", // Resposta correta
      "Escrever user stories é tipicamente responsabilidade do Product Owner. Scrum Masters focam na facilitação do processo e remoção de impedimentos.",
      "Decisões técnicas são tomadas pelo Time de Desenvolvimento. Scrum Masters facilitam o processo, mas não tomam decisões técnicas ou de produto."
    ]
  }
];