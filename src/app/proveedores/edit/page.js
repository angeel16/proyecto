import Form from "@/components/FormProveedor"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma';
import { editProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
    const proveedor = await prisma.proveedor.findUnique({
        where: {
            id: Number(searchParams.id),
        },
    });

    return (
        <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-3xl font-bold text-center">Editar proveedor {searchParams.id}</h3>
            <Form action={editProveedor} title='Editar proveedor' proveedor={proveedor} />
        </div>
    );
}

export default page;
