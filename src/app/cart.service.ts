/** @format */

import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class CartService {
	constructor(private http: HttpClient) {}
	item: Product[] = [];

	addToCart(product: Product) {
		this.item.push(product);
	}

	getItems() {
		return this.item;
	}

	clearCart() {
		this.item = [];
		return this.item;
	}

	getShippingPrices() {
		return this.http.get<{ type: string; price: number }[]>(
			"/assets/shipping.json"
		);
	}
}
