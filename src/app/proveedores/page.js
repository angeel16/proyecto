import Link from 'next/link'
import Image from 'next/image'
import Proveedor from '@/components/Proveedor'
import { getProveedores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const proveedores = await getProveedores()

    return (
        <div className="flex flex-col items-center justify-center py-2">
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md mt-2">
                <h1 className="text-3xl font-bold mb-4 text-center mt-2">Proveedores</h1>
                <Link href="/proveedores/new" className="enlace block text-center mb-2">Nuevo proveedor</Link>
                {proveedores.map((proveedor) => (
                    <Proveedor key={proveedor.id} proveedor={proveedor}>
                        <div className="flex flex-col sm:flex-row justify-between">
                            <Link href={{ pathname: '/proveedores/edit', query: { id: proveedor.id } }} className="enlace mb-2 sm:mb-0">Editar proveedor</Link>
                            <Link href={{ pathname: '/proveedores/delete', query: { id: proveedor.id } }} className="enlace">Eliminar proveedor</Link>
                        </div>
                    </Proveedor>
                ))}
            </div>
        </div>
    )
}
