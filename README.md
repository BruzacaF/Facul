# Sistema de Provas

## Descrição do Projeto
Este é um sistema de provas que permite a criação de matérias, a adição de questões e a submissão de respostas pelos alunos. O sistema calcula as notas dos alunos com base em suas respostas e fornece diversas estatísticas, como a média geral das notas, a menor e maior nota, além de listas de notas abaixo ou acima de determinados valores.

## Funcionalidades
O sistema oferece as seguintes funcionalidades:

- **Criação de Matérias**: Adicionar matérias ao sistema para as quais os alunos poderão responder provas.
- **Adição de Questões**: Adicionar uma lista de questões a uma matéria. Cada questão possui uma resposta correta e um peso associado.
- **Submissão de Respostas**: Permite que os alunos submetam suas respostas para uma determinada matéria.
- **Cálculo de Notas**: O sistema calcula a nota dos alunos com base nas respostas fornecidas.
- **Estatísticas**: Geração de diversas estatísticas, incluindo:
  - Média geral das notas.
  - Menor e maior nota.
  - Lista de notas abaixo de um valor específico.
  - Lista de notas acima de um valor específico.

## Estrutura do Código
O código está dividido em duas classes principais:

### 1. `ExamSystem`
Esta classe gerencia o sistema de provas, permitindo adicionar e acessar matérias.

- `addSubject(subjectName)`: Adiciona uma nova matéria ao sistema.
- `getSubject(subjectName)`: Retorna a matéria pelo nome.
- `listSubjects()`: Lista todas as matérias no sistema.

### 2. `Subject`
Representa uma matéria específica que contém questões e armazena os resultados dos alunos.

- `addQuestions(questionsArray)`: Adiciona um conjunto de 10 questões à matéria.
- `submitAnswers(studentName, studentAnswers)`: Submete as respostas de um aluno e calcula sua nota.
- `avg(studentName)`: Retorna a nota média de um aluno.
- `getAllGrades()`: Retorna todas as notas dos alunos.
- `avgAll()`: Calcula a média geral das notas de todos os alunos.
- `minGrades()`: Retorna a menor nota e o aluno correspondente.
- `maxGrades()`: Retorna a maior nota e o aluno correspondente.
- `lt(limit)`: Retorna a lista de alunos com notas abaixo de um valor específico.
- `gt(limit)`: Retorna a lista de alunos com notas acima de um valor específico.

## Exemplo de Uso

### Criar um sistema de provas:

```javascript
import ExamSystem from './exams.js';

let examSystem = new ExamSystem();
examSystem.addSubject('Matemática');
```

### Adicionar questões a uma matéria:

```javascript
let questionsMath = [
    { answer: 'a', weight: 2 },
    { answer: 'b', weight: 2 },
    // ... mais questões
];
examSystem.getSubject('Matemática').addQuestions(questionsMath);
```

### Submeter respostas de alunos:
```javascript
let students = [
    { name: 'João Silva', answers: ['a', 'b', 'a', 'c', 'd', 'b', 'c', 'd', 'a', 'b'] },
    // ... mais alunos
];
students.forEach(student => {
    examSystem.getSubject('Matemática').submitAnswers(student.name, student.answers);
});
```
### Para utilizar Basta Clonar o repositorio
```bash
git clone https://github.com/BruzacaF/Facul.git
```

### Entrar na pasta LS/objeto_exame e executar o comando
```bash
node main.js
```


