import './Contacto.css'

const Contacto = ()=>{
    return(
        <div className="container-contacto">

<h2>Contacto</h2>
            <form className='cart-contactoform'>
            <p>
                <label>Nombre:</label>
                <input type='text' placeholder='Nombre'></input>
           
               <label>Telefono:</label>
                <input type='number' placeholder='Telefono'></input>
            </p>
            <p>
                
                 <label>Correo:</label>
                <input type='email' placeholder='Correo'></input>

                <label>Ciudad:</label>
                <input type='text' placeholder='Ciudad'></input>
            </p>
                <label>Consulta:</label>
               <textarea></textarea>
        
          <button className='button1'><span> Enviar</span></button>

            </form>

        </div>
    )
}

export default Contacto