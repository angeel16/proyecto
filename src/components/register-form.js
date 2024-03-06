'use client'
import Button from '@/components/button-form';
import { useState } from 'react';
import { register } from '@/lib/actions'
import { signIn } from 'next-auth/react'; // signIn desde lado CLIENTE


function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await register(data) // Server action
        if (message.success) {
            setTipo('success')
            setResultado(message.success);
            await signIn('credentials',
                {
                    email: data.get('email'),
                    password: data.get('password'),
                    callbackUrl: '/dashboard'
                })
        } else {
            setTipo('error')
            setResultado(message.error);
        }

    }
    return (
        <form action={wrapper} className='credentials'>
            <div>
                <label>Nombre

                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' name='name' placeholder="angel" />
                </label>
                <label>Email
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='email' name='email' placeholder="angel@mail.com" />
                </label>
                <label>Contraseña
                    <input type="password" name='password' placeholder="******" />
                </label>
                <p className={`info ${tipo}`}> {resultado} </p>
            </div>

            <Button title="Crear cuenta" />
        </form>

    );
};

export default RegisterForm;