import { auth } from "@/auth";

async function page() {
    const sesion = await auth();

    return (
        <div className="flex justify-center items-start min-h-screen bg-gray-100">
            <div className="container mx-auto p-4 text-center mt-12">
                <h1 className="text-3xl font-bold mb-4">🔑 Dashboard</h1>
                <p className="text-lg">Name: {sesion?.user.name}</p>
                <p className="text-lg">Email: {sesion?.user.email}</p>
                <p className="text-lg">Role: {sesion?.user.role}</p>
                <img
                    src={sesion?.user.image}
                    alt="User Avatar"
                    className="mt-4 rounded-full h-40 w-40 object-cover mx-auto"
                />
            </div>
        </div>
    );
}

export default page;
