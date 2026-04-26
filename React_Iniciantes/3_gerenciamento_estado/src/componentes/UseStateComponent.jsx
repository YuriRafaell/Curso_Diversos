import { useState } from "react";

// useState = hooks

// sempre que vamos alterar o valor de algo => useState

// se é somente leitura => var, state

const UseStateComponent = () => {
    // variavel de consulta (count) e uma de alteração (setCount), inicio o hook (useState)
    const [count, setCount] = useState(0);

    const increment = () => {
        // Maneira mais react de fazer isso
        setCount((prevCount) => prevCount + 1);
        //setCount(count + 1);
        console.log(count);
    };

    const [user, setUser] = useState({
        name: "Ana",
        age: 25,
        hobbies: ["Leitura", "Programação", "Jiu-jitsu"],
    });

    const updateUserAge = () => {
        setUser((prevUser) => ({
            ...prevUser,
            age: prevUser.age + 1,
        }));
    };

    return (
        <div>
            <h2> Contador </h2>

            <p> Você clicou {count} vezes </p>

            <button onClick={increment}>Incrementar</button>


            <p> Nome: {user.name} e idade: {user.age} além disso
                meus hobbies são: {user.hobbies} </p>

            <button onClick={updateUserAge}>Incrementar Idade</button>
        </div>
    );
};

export default UseStateComponent;