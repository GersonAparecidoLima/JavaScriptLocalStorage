//encotrar o botão adicionar tarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')

//criando um array, que sera utilizado com uma lista 
const tarefas = []


btnAdicionarTarefa.addEventListener('click', () => {
    //toggle alterna classe
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    //aqui evita o submit do formulario
    evento.preventDefault();

    //criando um obj
    const tarefa = {
        descricao: textarea.value
    }
    //Adcionando obj tarefa no array tarefas
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

})