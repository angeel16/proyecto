'use client'
import Button from '@/components/button-form';
import { useState } from 'react';
import { login } from '@/lib/actions'

function LoginForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await login(data) // Server action
        if (message?.success) {
            setTipo('success')
            setResultado(message.success);
        }
        if (message?.error) {
            setTipo('error')
            setResultado(message.error);
        }
    }

    return (
        <form onSubmit={wrapper} className='credentials'>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='email' name='email' placeholder="angel@mail.com" />
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name='password' placeholder="******" />
                </label>
                <p className={`info ${tipo}`}> {resultado} </p>
            </div>

            <Button title="Iniciar sesión" />
        </form>
    );
};


export default LoginForm;