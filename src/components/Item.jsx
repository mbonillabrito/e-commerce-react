import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        {/* <img src={producto.imagen} alt={producto.titulo} /> */}
        <img src="https://staticco.natura.com/sites/default/files/styles/medium/public/products/154869_1_8.jpg?itok=pyKAVLHq" alt="foto nueva" />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {toCapital(producto.categoria)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item