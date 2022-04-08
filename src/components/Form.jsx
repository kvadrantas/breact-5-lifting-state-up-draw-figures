import { useState } from "react";

function Form(props) {
// console.log('IS FORMAS ', props.render);


    const [value, setValue] = useState(['', '', 0]);

    const change = val => {
        const figure = document.getElementById('figura').value;
        const color = document.getElementById('color').value;
        const count = document.getElementById('count').value;

        setValue([figure, color, parseInt(count)]);
        // console.log(figure, color, count, ' STATUS ', value);
    }


    return(
        <>
            <div className="form-content">
                <label htmlFor="figura">Figūra:</label><br />
                <div className="row">
                    <select id="figura" onChange = {() => change()}>
                        <option value="circle">Apskritimas</option>
                        <option value="square">Kvadratas</option>
                        <option value="hline">Horizontali linija</option>
                        <option value="vline">Vertikali linija</option>
                    </select>
                </div>

                <div className="row">
                    <label htmlFor="color">Spalva:</label><br />
                    <input onChange={() => change()} id="color" type="color"/>
                </div>

                <div className="row">
                    <label htmlFor="count">Kiekis:</label><br />
                    <input onChange={() => change()} id="count" type="number" min="0"/>
                </div>

                <div className="row">
                    <button onClick={() => props.sniurelis(value)}>Rodyti</button>
                </div>
            </div>
        </>
    )
};

export default Form;