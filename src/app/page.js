import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg flex flex-col items-center">
        <img src="frutas-y-frutos-secos.jpg" alt="Imagen" className="w-full max-w-md mb-8 rounded-lg" />
        <h1 className="text-3xl font-bold mb-4 text-center">La Huerta de las Delicias</h1>
        <ul className="space-y-2">
          <NavItem href="/admin">Panel de admin</NavItem>
          <NavItem href="/admin/dashboard">Dashboard del usuario</NavItem>
          <NavItem href="/about">About</NavItem>
          <hr className="border-gray-300 w-full" />
          <NavItem href="/productos">Listado de artículos</NavItem>
          <NavItem href="/productos/new">Nuevo artículo</NavItem>
          <hr className="border-gray-300 w-full" />
          <NavItem href="/proveedores">Listado de proveedores</NavItem>
          <NavItem href="/proveedores/new">Nuevo proveedor</NavItem>
        </ul>
      </div>
    </main>
  );
}

function NavItem({ href, children }) {
  return (
    <li className="text-green-600 hover:text-blue-600 cursor-pointer transition duration-300">
      <Link href={href}>{children}</Link>
    </li>
  );
}
