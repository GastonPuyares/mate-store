// src/pages/HomePage.jsx
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function HomePage() {
	return (
		<div className="w-full min-h-screen">
			{/* Hero - Presentación breve */}
			<section className="w-full bg-gradient-to-r from-emerald-700 to-emerald-500 text-white py-16 text-center">
				<h1 className="text-4xl font-bold mb-4">Bienvenido a Mate Store</h1>
				<p className="max-w-3xl mx-auto text-lg">
					Somos una tienda dedicada a los mejores mates y accesorios para que
					disfrutes del ritual como nunca antes.
				</p>
			</section>

			{/* Imágenes destacadas de productos */}
			<section className="w-full py-12 px-6">
				<h2 className="text-2xl font-semibold text-center mb-8">
					Productos Destacados
				</h2>
				<div className="flex flex-wrap gap-6 justify-center w-full">
					{[1, 2, 3].map((item) => (
						<Card key={item} className="shadow-md rounded-2xl overflow-hidden flex-1 min-w-[250px] max-w-[350px]">
							<img
								src={`https://mateslaplatausa.com/cdn/shop/files/DSC_0773.jpg?v=1753374610&width=713`}
								alt={`Producto ${item}`}
								className="w-full h-48 object-cover"
							/>
							<CardContent className="p-4">
								<h3 className="font-semibold text-lg">Producto {item}</h3>
								<p className="text-sm text-gray-600">
									Breve descripción del producto destacado.
								</p>
								<Button className="mt-4 w-full">Ver más</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>

			{/* Ofertas / Recomendados */}
			<section className="w-full bg-gray-100 py-12 px-6">
				<h2 className="text-2xl font-semibold text-center mb-8">
					Ofertas y Recomendados
				</h2>
				<div className="flex flex-wrap gap-6 justify-center w-full">
					{[4, 5, 6, 7].map((item) => (
						<Card key={item} className="shadow-md rounded-2xl overflow-hidden flex-1 min-w-[200px] max-w-[300px]">
							<img
								src={`https://acdn-us.mitiendanube.com/stores/002/214/302/products/018069-ed6f79fbe9415b8cc217467132616075-1024-1024.webp`}
								alt={`Oferta ${item}`}
								className="w-full h-40 object-cover"
							/>
							<CardContent className="p-4">
								<h3 className="font-semibold text-lg">Oferta {item}</h3>
								<p className="text-sm text-gray-600">
									Producto en descuento o recomendado.
								</p>
								<Button className="mt-4 w-full">Comprar</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
