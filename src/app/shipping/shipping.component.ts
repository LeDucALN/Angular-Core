/** @format */

import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Observable } from "rxjs";

interface Shipping {
	type: string;
	price: number;
}

@Component({
	selector: "app-shipping",
	templateUrl: "./shipping.component.html",
	styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
	shipping: Shipping = {
		type: "",
		price: 0,
	};
	constructor(private cartService: CartService) {}
	shippingCosts!: Observable<{ type: string; price: number }[]>;

	ngOnInit(): void {
		this.shippingCosts = this.cartService.getShippingPrices();
		this.shippingCosts.forEach((element) => {
			console.log(element);
		});
	}
}
