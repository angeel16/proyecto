import Form from "@/components/FormProveedor"
import { prisma } from '@/lib/prisma'
import { deleteProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
    const proveedor = await prisma.proveedor.findUnique({
        where: {
            id: Number(searchParams.id),
        },
    });

    return (
        <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-3xl font-bold text-center">Eliminar proveedor {searchParams.id}</h3>
            <Form action={deleteProveedor} title='Eliminar proveedor' proveedor={proveedor} />
        </div>
    )
}

export default page