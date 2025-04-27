import { Component, input, output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-product-card",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./product-card.component.html",
	styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
	product = input.required<{
		id: number;
		name: string;
		description: string;
		price: number;
		image: string;
	}>();

	selectProduct = output<string>();
	isFavorite = false;

	orderNow() {
		this.selectProduct.emit(this.product().name);
	}

	toggleFavorite() {
		this.isFavorite = !this.isFavorite;
	}
}
