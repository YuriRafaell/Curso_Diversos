import {useState, useEffect } from 'react';

const UseEffectExamples = () => {

    // Sem dependências, roda sempre que algo disparar
    useEffect(() => {
        console.log("Rodou UE1");
    });

    // com depêndencias vazias / array dep. vazio
    // rodar sempre que a página carregar
    useEffect(() => {
        console.log("Rodou UE2");
    }, []);
    
    // usestate ativa a re-renderização
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // com depêndencias, vai mudar baseado nas mudanças do estados dessas depênencias
    useEffect(() => {
        console.log("Rodou UE3");
    }, [count]);

    return (
        <div>
            <h1> Use Effect</h1>

            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count +1)}>Aumentar contagem</button>
                <button onClick={() => setCount2(count2 +1)}>Aumentar contagem 2</button>
            </div>
        </div>
    );
};

export default UseEffectExamples;