import Form from "@/components/FormProducto"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma';
import { editProducto } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const producto = await prisma.producto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });

  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Editar producto {searchParams.id}</h3>

      <Form action={editProducto} title='Editar producto' producto={producto} />
    </div>
  );
}

export default page;
