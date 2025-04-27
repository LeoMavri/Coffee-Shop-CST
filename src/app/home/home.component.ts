import { Component, inject, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "../product-card/product-card.component";
import { CoffeeService } from "../services/coffee.service";
import { DessertService } from "../services/dessert.service";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "../app.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, ProductCardComponent, FormsModule],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
	coffeeService = inject(CoffeeService);
	dessertService = inject(DessertService);
	appComponent = inject(AppComponent);

	searchTerm = "";
	desserts = this.dessertService.getDesserts();
	isHeaderScrolled = false;

	searchCoffee() {
		this.coffeeService.searchCoffee(this.searchTerm);
	}

	onSelectProduct(productName: string) {
		this.appComponent.updateSelectedCoffee(productName);
	}

	@HostListener("window:scroll")
	onWindowScroll() {
		this.isHeaderScrolled = window.scrollY > 50;
		const header = document.querySelector(".header");
		if (header) {
			if (this.isHeaderScrolled) {
				header.classList.add("scrolled");
			} else {
				header.classList.remove("scrolled");
			}
		}
	}
}
