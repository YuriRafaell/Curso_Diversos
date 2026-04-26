import React from "react";

const JsxExamples = () => {

    // Componentes
    const userName = "Yuri";

    const user = {
        name: "Rafael",
        lasName: "Araújo"
    };

    function getGreeting(name) {
        return `Olá ${name}`;
    }

    const userIsLoggedIn = true; //Colocar false para caso ao contrario

    const userRole = "admin";

    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Pedro"},
    ];

    // Conexão
    return (
        <div> 
            {/* BÁSICO */}
            <h2> Conteúdo que o usuário vai ver</h2>
            {/* Listando dados do usuário */}

            <p> O nome do usuário é: {userName} </p>

            <p> Usuário: {user.name} {user.lasName} </p>

            <p> {2 +2} </p>

            <p> {getGreeting(userName)} </p>
            <p> {getGreeting("Santos")} </p>

            {/* DIFERENÇAS DO HTML */}

            <div className="alguma-coisa"> Este cara</div>

            <div className="teste"> Ok </div>

            <button onClick={() => alert("Teste")}> Clique em mim </button>

            <input  type="text" placeholder="Digite algo" />

            {/* REDENRIZAÇÃO CONDICIONAL */}
            
            {userIsLoggedIn ? (
                <div>
                <p> Caso: está logado </p>    
                </div>
            ) : (
                <p> Caso: NÃO está logado </p>
            )}

            <p>
                {userRole === "admin" && "Você é um admin"}
            </p>

              {/* REDENRIZAÇÃO CONDICIONAL */}
              <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    ))}
                </ul>
              </div>
        </div>
    );
};

export default JsxExamples;