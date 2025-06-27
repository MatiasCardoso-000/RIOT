import { useState } from "react";

export const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    sizes: "",
    color: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Convierte los talles separados por coma a array
    const productData = {
      ...form,
      price: parseFloat(form.price),
      sizes: form.sizes.split(",").map((s) => s.trim()),
    };

    try {
      // Cambia la URL por la de tu backend real
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!res.ok) throw new Error("Error al agregar el producto");
      setSuccess(true);
      setForm({
        name: "",
        price: "",
        description: "",
        sizes: "",
        color: "",
        image: "",
      });
    } catch (err: any) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          className="border p-2 rounded"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Precio"
          type="number"
          min="0"
          step="0.01"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
          className="border p-2 rounded"
          required
        />
        <input
          name="sizes"
          value={form.sizes}
          onChange={handleChange}
          placeholder="Talles (separados por coma, ej: S,M,L,XL)"
          className="border p-2 rounded"
          required
        />
        <input
          name="color"
          value={form.color}
          onChange={handleChange}
          placeholder="Color"
          className="border p-2 rounded"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="URL de la imagen"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-zinc-900 text-white py-2 rounded hover:bg-zinc-800"
          disabled={loading}
        >
          {loading ? "Agregando..." : "Agregar producto"}
        </button>
        {success && <p className="text-green-600">¡Producto agregado correctamente!</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};