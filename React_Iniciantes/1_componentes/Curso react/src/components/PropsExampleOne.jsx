import React from "react";

const PropsExampleOne = (props) => {
    return (

        <div>
            <p> Olá {props.nome} </p>
            <p> Eu tenho {props.idade} </p>
        </div>
    );
};

export default PropsExampleOne;