import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen" style={{ backgroundImage: "url('/frutas-y-frutos-secos.jpg')", backgroundSize: "cover" }}>
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">La Huerta de las Delicias</h1>
        <p className="text-lg text-gray-800 mb-6 text-center">
          Bienvenido a La Huerta de las Delicias, tu destino para frutas frescas y productos de calidad. Explora nuestro
          variado catálogo y descubre la frescura y el sabor de los productos de temporada. ¡Te esperamos con lo mejor de
          la naturaleza!
        </p>
        <ul className="space-y-2">
          <NavItem href="/admin">Panel de admin</NavItem>
          <NavItem href="/admin/dashboard">Dashboard del usuario</NavItem>
          <NavItem href="/about">About</NavItem>
          <hr className="border-gray-300 w-full" />
          <NavItem href="/productos">Listado de producto</NavItem>
          <NavItem href="/productos/new">Nuevo producto</NavItem>
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
    <li className="text-green-600 cursor-pointer transition duration-300">
      <Link legacyBehavior href={href}>
        <a className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded-md hover:bg-blue-100">{children}</a>
      </Link>
    </li>
  );
}
