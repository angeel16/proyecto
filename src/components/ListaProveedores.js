import { getProducto, getProveedores } from '@/lib/actions'

async function ListaProveedores({ productoId, disabled }) {
    const proveedores = await getProveedores()

    let producto = null;
    let proveeProducto = [];
    if (productoId) {
        producto = await getProducto(productoId)
        proveeProducto = producto.proveedores.map(p => p.id);
    }


    return (
        <fieldset disabled={disabled}>
            <legend>Proveedores</legend>
            {proveedores?.map((proveedor) => (
                <div key={proveedor.id}>
                    <p>
                        {proveeProducto.includes(proveedor.id)
                            ? <input type='checkbox' name={proveedor.id} value={proveedor.id} defaultChecked />
                            : <input type='checkbox' name={proveedor.id} value={proveedor.id} />
                        }
                        {proveedor.nombre}
                    </p>
                </div>
            ))}
        </fieldset>
    )
}

export default ListaProveedores