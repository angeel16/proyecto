import Link from 'next/link'
import Producto from '@/components/Producto'
import { getProductos } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const productos = await getProductos()

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md mt-2">
        <h1 className="text-3xl font-bold mb-4 text-center mt-2">Productos</h1>
        <Link href="/productos/new" className="enlace block text-center mb-2">Nuevo producto</Link>
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto}>
            <Link href={{ pathname: '/productos/edit', query: { id: producto.id } }} className="enlace">Editar producto</Link>
            <Link href={{ pathname: '/productos/delete', query: { id: producto.id } }} className="enlace">Eliminar producto</Link>
          </Producto>
        ))}
      </div>
    </div>
  )
}


