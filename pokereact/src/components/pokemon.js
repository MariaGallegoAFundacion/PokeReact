import { useState } from "react";
const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);
    
    const onSubirNivel = (event) => {
        setNivel(n => n + 1)
    }

    const onBajarNivel = (event) => {
        setNivel(n => n - 1)
    }

    const calcularHP = () => {
        //TODO: Usar la fórmula real, no este invento :P
        return 65 + (nivel * 3);
    }

    const calcularAtaque = () => {
        return 130 + (nivel * 2);
    }

    const calcularDefensa = () => {
        return 60 + (nivel * 2);
    }

    return <div>
        <h1>Dragonite</h1>
        <h3>Nivel: {nivel}</h3>
        <button onClick={onSubirNivel}>Subir Nivel</button>
        <button onClick={onBajarNivel}>Bajar Nivel</button>
        <p>HP: { calcularHP() } </p>
        <p>Ataque: { calcularAtaque() } </p>
        <p>Defensa: { calcularDefensa() } </p>
    </div>

}
export default Pokemon;