import Form from "@/components/FormProveedor"
import Button from "@/components/Button"
import { newProveedor } from "@/lib/actions"

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div style={{ minHeight: "93vh", backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <h3 className="text-3xl font-bold text-center">Nuevo proveedor</h3>
      <Form action={newProveedor} proveedor={null}>
        <Button title='Crear proveedor' />
      </Form>
    </div>
  )
}

export default page