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
        <div>
            <h3>Editar proveedor {searchParams.id}</h3>
            <Form action={editProveedor} title='Editar proveedor' proveedor={proveedor} />
        </div>
    );
}

export default page;
