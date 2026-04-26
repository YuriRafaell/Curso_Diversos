import React from "react";

const PropsExample = ({ comida, time }) => {

    return (
        <div>
            <p> Minha comida preferida é {comida} </p>
            <p> Eu torço para o {time} </p>
        </div>
    );
};


export default PropsExample;