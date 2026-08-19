
// Vad har användaren lagt i kundvagnen
export interface CartItem extends Burger {
	count: number;
}

// Vad finns på menyn
export interface Burger {
	burgerId: string;
	burgerName: string;
	burgerPrice: number;
}
