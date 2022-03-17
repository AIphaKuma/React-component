import React, { useState } from "react"

function TodoForm(props) {
    const [input, setInput] = useState('');


    const handleChange = e => {
        setInput(e.target.value)
    };


    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            description : input
        });

        setInput('');

    }
    
    return (

        <form className=" todo-form" onSubmit={handleSubmit} >
            <div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control my-4"
                        id="floatingInput"
                        placeholder="Titre"
                        name="text"
                        value={input}
                        onChange={handleChange}
                    />
                    <label for="floatingInput">Titre</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="floatingDescription"
                        type="text"
                        placeholder="Description"
                        style={{ height: "10rem"}}
                        value={input}
                        onChange={handleChange}
                    >
                    </textarea>
                    <label for="floatingDescription">Description</label>
                </div>
                <button className="btn btn-primary my-4" > Ajouter </button>
            </div>
        </form>
        // <form class="row g-3" style={{ width: "50%", margin: "0 auto" }}>
        //     <div class="form-floating mb-3">
        //         <input type="text" class="form-control" id="floatingInput" placeholder="Titre" />
        //         <label for="floatingInput">Titre</label>
        //     </div>
        //     <div class="form-floating">
        //         <textarea class="form-control" placeholder="Description" id="floatingTextarea2" ></textarea>
        //         <label for="floatingTextarea2">Description</label>
        //     </div>
        //     <div class="col-12 text-center">
        //         <button class="btn btn-primary" type="submit">Ajouter</button>
        //     </div>
        // </form>
    );
}

export default TodoForm;