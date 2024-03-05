

function Producto({ children, producto }) {
    return (
        <div className='card'>
            <p><strong>{producto.nombre}</strong></p>
            <p>{producto.descripcion}</p>
            <p>{producto.precio.toString()} €</p>
            {children}
        </div>
    )
}

export default Producto