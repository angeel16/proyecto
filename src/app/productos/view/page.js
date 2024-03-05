import Form from "@/components/FormProducto"
import prisma from '@/lib/prisma'
import { getProducto } from "@/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ params }) {
  const producto = await prisma.producto.findUnique({
    where: {
      id: Number(params.id),
    },
  })

  return (
    <div>
      <h3>Ver artículo</h3>
      <Form action={getProducto} producto={producto} disabled={true} >
      </Form>
    </div>
  )
}

export default page