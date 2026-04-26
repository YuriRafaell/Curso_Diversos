import { useEffect, useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
    // Lista de tarefas
       // todos = um estado, onde a lista real esta guardada 
       
       // em vez de começar com [], uscamos direto no "armário"
    const [todos, setTodos] = useState(() => {
        const salvos = localStorage.getItem("Tarefas");

        // se tiver algo, transofrma em objeto, se não, começa []
        return salvos ? JSON.parse(salvos) : [];
    });


    // estado de texto da tarefa
      // inputValue é o texto que o usuário digita na caixa
    const [inputValue, setInputValue] = useState("");

    // adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== ''){
            const newTodo = {
                id: Date.now(),
                text: inputValue
            };

            setTodos((prevTodos) => [...prevTodos, newTodo]);

            setInputValue("");
        }
    };

    // excluir tarefa
    const handleRemove = (id) => {
        // filtrando a lista mantendo 'todos', menos o que tem no 'id' clicado
        const newTodos = todos.filter((todos) => todos.id !== id);

        // atualizando o estado com a nova lista
        setTodos(newTodos);
    };

    /* 
    // Salvando os dados
    usebEffect (() => {
        // transformando o array em string para o navegador aceitar
        localStorage.setItem("Tarefas", JSON.stringify(todos));
    }, [todos]); //Vigia o estado 'todos' 

    // Carregando os dados (inicialização)
    useEffect(() => {
        // pegando o que está no "armário"
        const dadosSalvos = localStorage.getItem("Tarefas");

        // o if verifica se 'dadosSalvos' não é nulo
        if(dadosSalvos){
            // se tem algo, transforma de volta em array o JSON.parse
            const listaConvertida = JSON.parse(dadosSalvos);

            // atilizando o estado
            setTodos(listaConvertida);
        }
    }, []); // [] vazio = roda só uma vez ao abrir o app
    */

    // Porém, ao inves de usar dois useEffects, a forma mais segura
    // de carregaros dados é fazer direto no useState

    // e agora só precisa de UM useEffect para salvar
    useEffect(() => {
        localStorage.setItem("Tarefas", JSON.stringify(todos));
    }, [todos]); // sempre que 'todos' mudar, ele salva

    
     
    return (
        <div className="app-container">
            <h1 className="title"> Lista de Tarefas</h1>

            {/* Form p/ adicionar tarefas */}
            <form onSubmit={handleSubmit} className="form-container">
                <input 
                    type="text"
                    className="input-field" 
                    placeholder="Adicione uma tarefa..." 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button type="submit" className="add-button">
                    Adicionar
                </button>
            </form>

            {/* lista de tarefas */}
            {todos.length === 0 && <p className="empty">Não há tarefas.</p>}

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text}
                        <button className="delete-button" type="button" onClick={() => handleRemove(todo.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;