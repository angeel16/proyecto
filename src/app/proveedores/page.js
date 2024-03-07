import Link from 'next/link'
import Image from 'next/image'
import Proveedor from '@/components/Proveedor'
import { getProveedores } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function Home() {
    const proveedores = await getProveedores()

    return (
        <div className="flex items-center justify-center min-h-screen py-2" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md mt-2">
                <h1 className="text-3xl font-bold mb-4 text-center mt-2">Proveedores</h1>
                <Link href="/proveedores/new" className="enlace block text-center mb-2">Nuevo proveedor</Link>
                {proveedores.map((proveedor, index) => (
                    <div key={proveedor.id} className={`mb-${index !== proveedores.length - 1 ? 4 : 0}`}>
                        <Proveedor proveedor={proveedor}>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <Link href={{ pathname: '/proveedores/edit', query: { id: proveedor.id } }} className="enlace bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2 mb-2 sm:mb-0">Editar proveedor</Link>
                                <Link href={{ pathname: '/proveedores/delete', query: { id: proveedor.id } }} className="enlace bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2">Eliminar proveedor</Link>
                            </div>
                        </Proveedor>
                    </div>
                ))}
            </div>
        </div>
    )
}
