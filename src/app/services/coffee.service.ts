import { Injectable, signal } from "@angular/core";

export interface Coffee {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
}

@Injectable({
	providedIn: "root",
})
export class CoffeeService {
	private coffeeData = signal<Coffee[]>([
		{
			id: 1,
			name: "Lungo Coffee",
			description: "A delicious coffee drink creamy and sweet",
			price: 199,
			image: "images/lungo.webp",
		},
		{
			id: 2,
			name: "Dalgona Coffee",
			description: "Whipped coffee made using instant coffee",
			price: 159,
			image: "images/dalgona.webp",
		},
		{
			id: 3,
			name: "Iced Coffee",
			description: "Iced coffee is a coffee beverage served cold",
			price: 149,
			image: "images/iced.jpg",
		},
		{
			id: 4,
			name: "Filter Coffee",
			description: "This coffee and 20% chicory freshly roasted",
			price: 99,
			image: "images/filter.webp",
		},
	]);

	private filteredCoffee = signal<Coffee[]>(this.coffeeData());

	getCoffee() {
		return this.filteredCoffee;
	}

	getOriginalCoffee() {
		return this.coffeeData;
	}

	searchCoffee(term: string) {
		if (!term.trim()) {
			this.filteredCoffee.set(this.coffeeData());
			return;
		}

		const filtered = this.coffeeData().filter((coffee) =>
			coffee.name.toLowerCase().includes(term.toLowerCase()),
		);
		this.filteredCoffee.set(filtered);
	}
}
