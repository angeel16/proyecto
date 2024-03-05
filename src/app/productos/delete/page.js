import Form from "@/components/FormProducto"
import Button from "@/components/Button"
import { prisma } from '@/lib/prisma'
import { deleteProducto } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
  const producto = await prisma.producto.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  });

  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Eliminar producto {searchParams.id}</h3>
      <Form action={deleteProducto} title='Eliminar producto' producto={producto} />
    </div>
  )
}

export default page