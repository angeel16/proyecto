import Button from "@/components/Button"
import Link from 'next/link';

function Form({ children, action, title, proveedor, disabled = false }) {

    return (
        <form action={action} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <input type='hidden' name='id' value={proveedor?.id} />
            <fieldset disabled={disabled} className="mb-4">
                <legend className="text-lg font-semibold mb-2">Proveedor #{proveedor?.id}</legend>
                <div className="mb-2">
                    <label htmlFor='nombre' className="block mb-1">Nombre</label>
                    <input type='text' id='nombre' name='nombre'
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                        placeholder='Nombre'
                        defaultValue={proveedor?.nombre} autoFocus required />
                </div>
                <div className="flex items-center justify-end"> {/* Ajuste aquí para justificar los elementos a la derecha */}
                    <label htmlFor='nacional' className="mr-2">Nacional</label> {/* Muevo el label antes del input */}
                    <input type='checkbox' id='nacional' name='nacional' defaultChecked={proveedor?.nacional} />
                </div>
            </fieldset>
            <div className="flex justify-between">

                <div>
                    {children}
                    <Button title={title} />
                </div>
            </div>
        </form>
    )
}



export default Form;
