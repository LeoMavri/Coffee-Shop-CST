import { Injectable } from "@angular/core";

export interface Dessert {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
}

@Injectable({
	providedIn: "root",
})
export class DessertService {
	private desserts: Dessert[] = [
		{
			id: 1,
			name: "Gulab Jamun",
			description: "Made with milk solids, sugar syrup water & rose",
			price: 199,
			image: "images/gulab.jpg",
		},
		{
			id: 2,
			name: "Chocolate Tiramisu",
			description: "Coffee-flavoured dessert with mascarpone cheese",
			price: 250,
			image: "images/tiramisu.jpg",
		},
		{
			id: 3,
			name: "Churros",
			description: "Sweet snack made with choux pastry and cinnamon",
			price: 170,
			image: "images/churros.webp",
		},
		{
			id: 4,
			name: "Australian Lamingtons",
			description: "Sponge cake cubes with chocolate sauce & coconut",
			price: 280,
			image: "images/lamingtons.jpg",
		},
	];

	getDesserts() {
		return this.desserts;
	}
}
