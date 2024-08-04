export default [
  {
    nome: "WinSGQ",
    id: 0,
    desc: "Gerencie e controle os documentos e registros relativos às normas: ISO 9001, ISO 14001, ISO 45001 e IATF 16949. Software intuitivo e de fácil manuseio.",
    desc2: [
      "Baseado na abordagem por processos,   este sistema tem  por objetivo  gerenciar e controlar os documentos e registros relativos as normas ISO 9001, ISO 14001, ISO 45001 e IATF 16949. Software  intuitivo e de fácil manuseio.",
    ],
    modulos: [
      {
        nome: "WinSGQ",
        subTitulo: "Sistema principal de controle de documentos e Registros.",
        desc: "Este módulo tem como objetivo  organizar,  controlar,  divulgar,  monitorar,  acessar e atribuir responsabilidades sobre todos os arquivos* referentes ao Sistema de Gestão,  no qual é possível  Gerenciar Processos de Linha/Suporte,  Procedimentos,  Instruções,  Requisitos do Processo, Atas de Reuniões,  Mapeamento do Sistema de Gestão entre outros.",
        recursos: [
          {
            recursoNome: "Gestão por Processo:",
            recursoLista: [
              "Fluxo macro da interação de processos;",
              "Processo de Principal ( Linha), Processo Suporte ( Apoio );",
            ],
          },
          {
            recursoNome:
              "Distribuição e controle de documentos e registros do sistema de gestão.(Gestão a Vista):",
            recursoLista: [
              "Manual da Qualidade;",
              "Política da Qualidade;",
              "Missão e Visão da empresa;",
              "Organograma da Empresa;",
              "Divulgação de Indicadores;",
              "Objetivos e Metas;",
              "Comunicação Interna;",
              "Melhoria Contínua entre outros relacionados;",
            ],
          },
          {
            recursoNome:
              "Gerenciamento e Controle dos documentos e registros por Processos:",
            recursoLista: [
              "Procedimentos;",
              "Instruções;",
              "Requisitos do Processo;",
              "Atas de Reuniões;",
              "Compartilhamento de documentos;",
            ],
          },
          {
            recursoNome: "Cadastro de Equipes;",
          },
          {
            recursoNome: "Sistema de Login com perfil de usuário;",
          },
          {
            recursoNome:
              "Formulário de Controle de revalidação de documentos (Pendências);",
          },
          {
            recursoNome: "Relatórios:",
            recursoLista: [
              "Procedimentos;",
              "Instruções;",
              "Requisitos do Processo;",
              "Atas de Reuniões;",
              "Compartilhamento de documentos;",
            ],
          },
          // {
          //   recursoNome: "Gestão por Processo",
          // },
          // "Cronograma com Status para as Auditorias estando em andamento, prevista, concluídas e atrasadas",
          // "Gráfico de acompanhamento com porcentagem de concluído",
          // "Formulários e Relatórios: Plano de Auditoria, Cronograma das Atividades, Relatório de auditoria com a conclusão e entrada da quantidade de não-conformidade",
          // "Encaminhamento dos relatórios  via e-mail aos donos de processos",
        ],
        comentario:
          "*Estes procedem de aplicativos externos :Editores de texto, Planilhas de cálculo, Apresentações,  entre outros.",
      },
      {
        nome: "WinPCA",
        subTitulo: "Planejamento e Controle de Auditorias Internas",
        desc: "Este módulo tem por objetivo  Planejar e Controlar  auditorias internas, conforme normas NBR ISO 19011, da seguinte forma: Programação de Auditorias ( NBR ISO 9001, ISO TS 16949, ISO 14001 e OHSAS 180010), Plano de Auditoria, Relatório de Auditoria.",
        recursos: [
          {
            recursoNome:
              "Cronograma com Status para as Auditorias estando em andamento, prevista, concluídas e atrasadas;",
          },
          {
            recursoNome:
              "Gráfico de acompanhamento com porcentagem de concluído. Formulários e Relatórios:",
            recursoLista: [
              "Plano de Auditoria;",
              "Cronograma das Atividades;",
              "Relatório de auditoria com a conclusão e entrada da quantidade de não-conformidades;",
            ],
          },
          {
            recursoNome:
              "Encaminhamento dos relatórios  via e-mail aos donos de processos",
          },
        ],
      },
      {
        nome: "RAC",
        subTitulo: "Controle de Ações Corretivas / Preventivas",
        desc: "Este Modulo tem por objetivo emitir e controlar as ações corretivas e preventivas. As ações corretivas e preventivas podem ser classificadas por não – conformidades oriundas de reclamações de Clientes, de processos e Auditorias Internas.",
        recursos: [
          {
            recursoNome: "Gerencia ações Corretivas e Preventivas na:",
            recursoLista: [
              "Identificação da Ação;",
              "Descrição da não-conformidade;",
              "Ação imediata;",
              "Causa;",
              "Ação Corretiva/Preventiva;",
              "Poka–yoke;",
              "Impacto da ação corretiva;",
              "Verificação da implementação da ação;",
              "Verificação da efetividade da ação;",
            ],
          },
          {
            recursoNome:
              "Gera arquivos *.pdf de todos os relatórios para envio",
          },
          {
            recursoNome: "Controle das ações com status",
          },
        ],
      },
      {
        nome: "FitAPQP",
        subTitulo: "Planejamento Avançado da Qualidade do Produto ( APQP).",
        desc: "Este módulo tem por objetivo atender ao requisito 7.1 Planejamento da Qualidade de produtos, bem como o requisito 7.3 Projeto e Desenvolvimento de Produto, conforme a Norma NBR ISO 9001.",
        recursos: [
          {
            recursoNome: "Cadastro de Clientes;",
          },
          {
            recursoNome: "Cadastros de Produtos;",
          },
          {
            recursoNome: "Equipes;",
          },
          {
            recursoNome: "Adiciona e controle atividades das 5 fases do APQP :",
            recursoLista: [
              "Planejamento e definir programa;",
              "Projeto do Produto;",
              "Projeto do Processo;",
              "Validação;",
              "Retroalimentação / Melhoria;",
            ],
          },
          {
            recursoNome: "Adiciona arquivos anexos nas atividades das 5 fases;",
          },
          {
            recursoNome: "Gera relatório completo e por fases;",
          },
          {
            recursoNome: "Gera lista de verificação por atividades;",
          },
          {
            recursoNome: "Gera gráfico de gantt por fase;",
          },
          {
            recursoNome: "Gera arquivos *.pdf de todos os relatórios;",
          },
        ],
      },
      {
        nome: "WinEQMED",
        desc: "Este módulo tem como objetivo controlar toda a calibração dos equipamentos de medição e ensaios visando atender procedimentos e uma organização de forma simples e rápida quando solicitado.",
        subTitulo:
          "Controle de calibração de equipamentos de medição e ensaios.",
        recursos: [
          {
            recursoNome: "Cadastro de famílias;",
          },
          {
            recursoNome: "Cadastro de Empresas de serviço de calibrações;",
          },
          {
            recursoNome: "Cadastro de especificações dos equipamentos;",
          },
          {
            recursoNome: "Cadastro de marcas de equipamentos;",
          },
          {
            recursoNome: "Cadastro de erro máximo permissível por família;",
          },
          {
            recursoNome: "Formulário de pendências de calibrações vencidas;",
          },
          {
            recursoNome: "Status dos equipamentos;",
          },
          {
            recursoNome:
              "Gera e envia automaticamente arquivos *.pdf por e-mail;",
          },
          {
            recursoNome: "Controle de Calibração Interna:",
            recursoLista: [
              "Anexos de arquivos externos (doc, excel, pdf, etc.);",
              "Calcula o Erro Sistemático;",
              "Coluna para digitar Incerteza de Medição;",
              "Sistema de Aprovação/Reprovação;",
            ],
          },
          {
            recursoNome: "Controle de Calibração Externa:",
            recursoLista: [
              "Datas da próxima calibração;",
              "Status da calibração;",
              "Histórico de calibração com anexo de arquivos externos;",
              "Cadastro de manutenção dos equipamentos;",
            ],
          },
          {
            recursoNome: "Relatórios:",
            recursoLista: [
              "Calibração por Família;",
              "Lista mestra de equipamentos, por empresa, por setor, por status e próximas calibrações;",
              "Erro máximo permissível;",
              "Histórico de manutenções;",
              "Histórico de calibrações;",
            ],
          },
        ],
      },
    ],
    tag: "Qualidade / Estatistica",
  },
  // {
  //   nome: "WinCEP Plus CA",
  //   id: 1,
  //   desc: "O excelente software WinCep Plus agora em sua versão com Coleta Automática. Insira todos os valores de seus instrumentos direto para a carta de controle.",
  //   desc2: [
  //     "O <b>WinCEP Plus 5 com Coleta Automática</b> é um software de última geração para coleta, análise e gerenciamento do Controle Estatístico do Processo (CEP/SPC - Statistical Process Control). É uma importante fonte de subsídios para gerentes da qualidade. Suas poderosas análises estatísticas e o total controle e rastreabilidade de eventos do processo fornecem um suporte valioso para a automação e controle de processos, que ajuda na análise e tomada de decisões para aprimoramento do seu processo produtivo. Seus recursos e facilidade de uso o tornam um líder em software para controle estatístico do processo no Brasil. A interface de operação simples permite que seja implantado diretamente no chão de fábrica, para que os operadores entrem com as informações relevantes e tomem as decisões no momento em que elas devem ser tomadas. São mais de vinte anos de experiência no desenvolvimento de softwares e profissionais altamente qualificados para fornecer assistência a seus usuários, que garantem total credibilidade e confiabilidade.",
  //     "Coleta Instantânea pela porta serial RS-232 (porta COM), procedente de equipamentos (Balanças, Durômetros, Micrômetros, Paquímetros, Relógios Comparadores e outros).",
  //     "<span>Compatível com os Requisitos da Qualidade Automobilística ISO TS 16949:2009.</span>",
  //   ],
  //   tag: "Sistema de Medição",
  // },
  {
    nome: "WinFMEA 3 Plus",
    id: 1,
    desc: "Solução informatizada para gerenciamento ágil de FMEA's, com relatórios detalhados, rastreamento de ações e status de conclusão. Software de fácil utilização com recursos extras, como controle de usuários e alertas por e-mail.",
    desc2: [
      "Solução informatizada para o gerenciamento das FMEA's de Processo, Produto/Projeto, Máquina e Plano de Controle, tornando mais fácil a elaboração, controle e impressão das planilhas/relatórios ágeis na qual possibilita o rastreamento de ações recomendadas/tomadas, dando um suporte valioso para a eliminação ou redução de falhas potenciais. Conta também com outros relatórios, como: TOP10 NRP (Número de Prioridade de Risco); prioridade de ação (AP), ação recomendada/tomada; FMEA cliente/fornecedor; gráfico de gerenciamento de risco, entre outros. Possui também um sistema de status de FMEA’s concluídas, em andamento, previstas ou vencidas. Sistema de (FMEA Mestre), Controle de Usuários, Alerta por Email, entre outros. Software de fácil manuseio..",
      "Compatível com os Requisitos da Qualidade Automobilística IATF 16949:2016 e com o <b>Manual de FMEA 1ª edição do AIAG/VDA e Manual AIAG 4ª Edição.</b>",
      "<span>Necessário o banco de dados Microsoft SQL Server</span>",
      "<span>A versão Microsoft SQL Server Express supre as necessidades para a aplicação do sistema. Versão mínima recomendável: Microsoft SQL Server 2008</span>",
    ],
    recursos: [
      "Até 5 níveis de grupos (pastas para armazenamento e organização das FMEAs)",
      "Interface renovada",
      "Status das FMEAs (Concluída, Atrasada, em Andamento e Prevista)",
      "FMEAs de Projeto/Produto, Processo e Máquina para modelo AIAG 4ª Edição",
      "FMEAs de Processo para modelo AIAG/VDA 1ª Edição",
      "Opção de personalização dos indicadores para preenchimento de índices de Severidade, Ocorrência e Detecção",
      "Fluxograma e Plano de Controle",
      "FMEA Mestre: Gera FMEAs através de um FMEA Mestre e mantém todos os FMEAs herdados atualizados.",
      "Alerta por email de ações pendentes.",
      "Opção de clonar FMEAs para reaproveitamento de dados",
      "Importação do banco de dados do WinFMEA versão 2.xx .(Para Clientes da VTB que possuem o WinFMEA versão 2)",
      "Exporta FMEAs para arquivo *.xls Excel (necessário ter o Microsoft Excel instalado)",
      "Exporta relatórios para arquivos PDF, HTML e RTF",
      "Relatórios modernos:",
      "<span>FMEA - Conforme manual AIAG 4º edição e AIAG/VDA 1ª edição;</span>",
      "<span>FMEA em branco para reuniões;</span>",
      "<span>Ação Recomendada com data e responsável;</span>",
      "<span>Ação Corretiva com data e responsável (pendentes, por período e/ou responsável);</span>",
      "<span>Gráfico NPR;</span>",
      "<span>Gráfico de Prioridade de Ação (FMEA's AIAG/VDA);</span>",
      "<span>Top 10 Número de Prioridade de Risco(NPR);</span>",
      "<span>Identificação da Empresa;</span>",
      "<span>Clientes - FMEAs;</span>",
      "<span>Fornecedores - FMEAs;</span>",
      "<span>FMEA com imagens do item no cabeçalho e nome do cpente;</span>",
      "<span>Status de todas as FMEAs;</span>",
      "<span>Plano de Controle;</span>",
      "<span>Ações por FMEA</span>",

      "Maior controle gerencial das ações",
      "Alarme de FMEAs vencidas e prazo para expirar data-chave",
      "Sistema automático de atualização do status das fmeas pela data-chave",
      "Risco Crítico e Risco para Severidade Alta: Índice de Risco acima do qual é obrigatório o preenchimento da Ação",
      "Indíce de NPR, S.O, S.D, S.O.D. para FMEA's AIAG 4ª edição e AP (Action Priority) para FMEA's AIAG/VDA 1ª edição.",
      "Adicione até 6 imagens por FMEA",
      "Árvore de Falhas: armazena todos os possíveis modos, efeitos, detecção, prevenção e causas para utilização na confecção de outros estudos.",
      "Sistema de login: limite os acessos que cada usuário terá no sistema",
      "Possibilidade de alteração nos rótulos da identificação do FMEA e Plano de Controle",
      "Adicione até 3 imagens para cada Modo de Falha",
      "Gráfico com Indicadores: % Ações, Ações Mensais, Pareto de Ações, Maiores NPRs e Soma NPRs",
      "Gere as primeiras colunas do plano de controle diretamente dos itens/processos do FMEA.",
    ],
    tag: "Sistema de Medição",
  },
  {
    nome: "WinMSA3",
    id: 2,
    desc: "Gerencie e controle os documentos e registros relativos às normas: ISO 9001, ISO 14001, ISO 45001 e IATF 16949. Software intuitivo e de fácil manuseio.",
    desc2: [
      "Baseado na abordagem por processos,   este sistema tem  por objetivo  gerenciar e controlar os documentos e registros relativos as normas ISO 9001, ISO 14001, ISO 45001 e IATF 16949. Software  intuitivo e de fácil manuseio.",
    ],
    modulos: [
      {
        nome: "WinSGQ",
        desc: "Sistema principal de controle de documentos e Registros.",
      },
      {
        nome: "WinPCA",
        desc: "Planejamento e Controle de Auditorias Internas.",
      },
      {
        nome: "RAC",
        desc: "Controle  de Ação Corretiva e Preventiva.",
      },
      {
        nome: "FitAPQP",
        desc: "Planejamento Avançado da Qualidade do Produto ( APQP).",
      },
      {
        nome: "WinEQMED",
        desc: "Controle de calibração de equipamentos de medição e ensaios.",
      },
    ],
    tag: "Qualidade / Estatistica",
  },
  {
    nome: "WinHACCP 2",
    id: 3,
    desc: "Sabemos que implementar e monitorar um sistema de HACCP é um grande desafio, pois temos que planejar, controlar e verificar muitos registros, papéis, grande coleta de dados e montagem de numerosos relatórios. É uma tarefa de grande exigência que demanda tempo e gera muitos documentos.",
    desc2: [
      "Este é um Sistema Informatizado para a ferramenta APPCC- (Análise de Perigos e Pontos Críticos de Controle), conhecido também como HACCP – (Hazard Analysis of Critical Control Point). É a solução da garantia da Qualidade para alimento, pois permite criar eletronicamente análises de produtos e monitorá-las com facilidade e segurança, criando assim uma estrutura para a garantia da segurança do alimento e assegurando que as exigências de conformidade do dia-a-dia estejam sendo cumpridas. Diminui o tempo da administração com segurança alimentar, pois possui um gerenciamento das análises tornando o processo de elaboração desde a criação de equipes envolvidas no estudo até o final da análise com maior controle de Ponto Crítico, tornando as ações muito mais ágeis e simples. Útil também nas inspeções de autoridades regulamentadoras, pois o armazenamento e organização das informações simplifica a busca e alteração de dados. Também como outros benefícios, ele apresenta um uso mais eficaz dos recursos, gerando economia para a indústria, respondendo oportunamente aos problemas de inocuidade nos alimentos.",
    ],
    recursos: [
      "Adiciona imagem em cada grupo.",
      "Adiciona imagens do tipo JPG, JPEG e BMP no formulário Plano esquemático da planta",
      "Adiciona o logotipo da empresa em todos os relatórios",
      "Anexos eletrônicos de arquivos dos tipos(Doc, Rtf, PDF, jpg, bmp, xls,html, txt, Cartas de Controle e Cartas de Controle Mestre) nos campos monitorização e Registros;",
      "Árvore de Ingredientes e processos",
      "Cadastro de S.I.F. para cada produto",
      "Cálculo automático do Risco = (Severidade X Probabilidade ocorrência)",
      "Controle automático do número da revisão e data dos documentos",
      "Criação de diagrama de fluxo",
      "Criação de grupos para adicionar análises",
      "Criação de plano esquemático da planta",
      "Exporta relatórios para arquivos PDF, HTML e RTF",
      "Gráfico de identificação de perigos (Biológicos, Químicos e Físicos)",
      "Histórico de revisões",
      "Importação e exportação de análises entre o sistema WinAPPCC-HACCP",
      "Opção de clonar APPCC's para reaproveitamento de dados",
      "Perigos não Controlados na Empresa",
      "Possibilidade de adicionar até 6 imagens para cada produto",
      "Possui sistema de login com perfil de usuários",
      "Relatórios modernos:",
      "<span>Identificação da Empresa;</span>",
      "<span>Equipe;</span>",
      "<span>Descrição do Produto;</span>",
      "<span>Ingredientes do Produto - Composição;</span>",
      "<span>Diagrama de Fluxo;</span>",
      "<span>Plano Esquemático da Planta;</span>",
      "<span>Identificação de Perigos (Ingredientes / Materiais e Processo): Biológicos, Químicos e Físicos;</span>",
      "<span>Perigos Não Controlados na Empresa;</span>",
      "<span>Determinação dos PCCs (Ingredientes / Materiais e Processo);</span>",
      "<span>Plano Geral da APPCC / HACCP (Ingredientes / Materiais e Processo);</span>",
      "<span>FMEA com imagens do item no cabeçalho e nome do cpente;</span>",
      "<span>Formulários em Branco (para reuniões);</span>",
      "<span>Relatório de Produto por nome, número da APPCC / HACCP ou data;</span>",
      "<span>Relatório de APPCC / HACCP concluído e não concluído;</span>",
      "<span>Relatório de Produtos com PCC’s;</span>",
      "<span>Gráficos de Perigos;</span>",
      "<span>Histórico de revisões.</span>",

      "Sequência de decisões para identificação de Perigos Biológicos, Químicos ou Físicos",
      "Sistema de status da análise (em andamento, Concluída ou Atrasada) para maior controle",
      "Sistema Multiusuários, acesso de formulários e relatórios por pessoa",
      "E muito mais...",
    ],
    tag: "Sistema de Medição",
  },
];

// Ação Recomendada com data e responsável,
// Ação Corretiva com data e responsável (pendentes, por período e/ou responsável),
// Gráfico NPR,
// Gráfico de Prioridade de Ação (FMEA's AIAG/VDA),
// Top 10 Número de Prioridade de Risco(NPR),
// Identificação da Empresa,
// Clientes - FMEAs,
// Fornecedores - FMEAs,
// FMEA com imagens do item no cabeçalho e nome do cliente,
// Status de todas as FMEAs,
// Plano de Controle,
// Ações por FMEA
