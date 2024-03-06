import ListaProveedores from './ListaProveedores';
import Button from "@/components/Button";

function Form({ children, action, title, producto, disabled = false }) {
    return (
        <form action={action} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <input type='hidden' name='id' value={producto?.id} />
            <fieldset disabled={disabled}>
                <div className="mb-4">
                    <label htmlFor='nombre' className="block mb-1">Nombre</label>
                    <input type='text' id='nombre' name='nombre'
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                        placeholder='Nombre'
                        defaultValue={producto?.nombre} autoFocus required />
                </div>
                <div className="mb-4">
                    <label htmlFor='descripcion' className="block mb-1">Descripción</label>
                    <input type='text' id='descripcion' name='descripcion'
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                        placeholder='Descripción'
                        defaultValue={producto?.descripcion} />
                </div>
                <div className="mb-4">
                    <label htmlFor='precio' className="block mb-1">Precio</label>
                    <input type='number' id='precio' name='precio' min='0' step={0.01}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                        placeholder='Precio'
                        defaultValue={Number(producto?.precio)} required />
                </div>
            </fieldset>
            <ListaProveedores productoId={producto?.id} disabled={disabled} />
            <div className="text-center mt-4">
                {children && <div className="mb-4">{children}</div>}
                <Button title={title} />
            </div>
        </form>
    );
}

export default Form;
