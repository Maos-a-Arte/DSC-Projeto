🤖 Relatório de Governança e Uso de Inteligência Artificial

Este documento descreve como a engenharia de prompts e as ferramentas de Inteligência Artificial Generativa (Gemini e GitHub Copilot) foram integradas ao ciclo de desenvolvimento do ecossistema Mãos à Arte, respeitando a divisão estrita de papéis e as diretrizes arquiteturais do projeto.

1. 🧠 Atuação Estratégica: Gemini como Arquiteto e Admin (Refinamento)

O modelo Gemini foi adotado diretamente pelo Administrador (Admin) do projeto como um colaborador estratégico focado em engenharia de requisitos e governança.

A partir das especificações de negócio enviadas por meio de capturas das regras de caso de uso e templates oficiais, o Gemini atuou na tradução dessas regras para a infraestrutura do GitHub. Suas principais atribuições incluíram:

- Engenharia de Prompts e Requisitos: Análise das imagens de regras de negócio enviadas e sua conversão em especificações técnicas claras.

- Quebra de Escopo (Subissues): Divisão do Caso de Uso de Gerenciamento de Categorias Globais em entregas granulares e sequenciais (UC01-01 a UC01-04), mapeando as responsabilidades de DTO, Repository, Service e Controller.

- Padronização de Governança: Mapeamento visual das etiquetas estruturadas (scope: backend, feature: categories, role: admin) e formatação do padrão exigido de revisão para o Pull Request (Checklist de QA).

2. 💻 Atuação Técnica: GitHub Copilot como Assistente do Desenvolvedor (Implementação)

Enquanto o Gemini estruturou o planejamento e a auditoria de qualidade na camada de gerenciamento, o GitHub Copilot foi integrado diretamente ao ambiente de desenvolvimento (IDE) do Desenvolvedor encarregado das tarefas.

O Copilot atuou como um assistente de codificação em par (Pair Programming) em tempo real, sendo responsável por:

- Escrita do Código Base: Autocompletar a sintaxe TypeScript e os decoradores nativos do NestJS (como @Controller(), @Post(), @Injectable()) a partir dos contratos definidos nas Issues.

- Geração do Resto do Funcionamento: Desenvolvimento ágil da lógica interna das camadas após o direcionamento inicial (implementação do array em memória no Repository, injeção automática de UUIDs e tratamento do status padrão isActive no Service).

- Aceleração de Testes: Sugestão de asserções lógicas para garantir a cobertura de código exigida antes da submissão do Pull Request.

🏁 Conclusão do Fluxo

A combinação sinérgica das duas IAs permitiu uma esteira de produção limpa: o Gemini garantiu que o planejamento do Admin e o checklist do Revisor estivessem impecáveis no GitHub, enquanto o GitHub Copilot garantiu eficiência técnica, velocidade e precisão na escrita exata do código pelo desenvolvedor.
