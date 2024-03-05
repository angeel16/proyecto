import Form from "@/components/FormProducto";
import Button from "@/components/Button";
import { newProducto } from "@/lib/actions";

function page() {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Nuevo producto</h3>
      <Form action={newProducto} producto={null}>
        <Button title='Crear producto' />
      </Form>
    </div>
  );
}

export default page;

