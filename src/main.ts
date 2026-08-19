import './style.css'
import type { CartItem } from './types.ts'

// i en React-app hade detta funnits i state eller Zustand store
const cart: CartItem[] = [
	{
		burgerId: 'abq23',
		burgerName: 'Arrayburgare',
		burgerPrice: 125,
		count: 0
	},
	{
		burgerId: 'oto32',
		burgerName: 'Objektburgare',
		burgerPrice: 135,
		count: 0
	}
]


function renderCart(): void {
	// vi kan skriva ! efter querySelector - men det förutsätter att vi verkligen vet vad vi gör - risk att programmet kraschar
	// Det är inte garanterat att .cart-items hittar något element!
	const cartItemsDiv: HTMLDivElement | null = document.querySelector('.cart-items')
	// cartItems kan vara null, ifall querySelector inte hittar den - uteslut möjligheten med hjälp av if-sats
	// samma sak med .total-sum
	if( cartItemsDiv === null ) {
		return
	}
	renderSum()

	function renderSum(): void {
		const sumPara: HTMLParagraphElement | null = document.querySelector('.total-sum')
		if( !sumPara ) { return }

		let totalSum: number = 0
		cart.forEach(item => {
			totalSum += item.count * item.burgerPrice
		})
		sumPara.innerText = `Summa: ${totalSum} kr`

	}

	cart.forEach(item => {
		const div: HTMLDivElement = document.createElement('div')

		div.innerHTML = `
			<h3> Burger name </h3>
			<p class="price-tag"> ?? kr </p>
			<p class="count"> Antal: ? </p>
			<button class="add"> +Fler </button>
			<button class="remove"> -Färre </button>
		`
		div.className = 'item'

		const add: HTMLButtonElement = div.querySelector<HTMLButtonElement>('.add')!
		const remove: HTMLButtonElement = div.querySelector<HTMLButtonElement>('.remove')!

		// Eftersom vi skapar h3-elementet här, är det ok att använda "!"
		div.querySelector('h3')!.innerText = item.burgerName
		// console.log('Finns elementet?', div.querySelector<HTMLParagraphElement>('.price-tag'))
		div.querySelector<HTMLParagraphElement>('.price-tag')!.innerText = `${item.burgerPrice} kr`
		renderCount()


		function renderCount(): void {
			const pCount: HTMLParagraphElement = div.querySelector<HTMLParagraphElement>('.count')!
			pCount.innerText = `Antal: ${item.count}`
		}

		add.addEventListener('click', () => {
			item.count++
			renderCount()
			renderSum()
		})
		remove.addEventListener('click', () => {
			if( item.count > 0 ) {
				item.count--
				renderCount()
				renderSum()
			}
		})

		cartItemsDiv.append(div)

	})

}

// Rendera när programmet startar
renderCart()

/*
expression!
expression?

Utropstecken betyder "lita på mig TypeScript, jag vet att den här grejen inte är null"
Frågetecken betyder "om grejen är null, strunta i allt som står efter frågetecknet"

x!.y  ->  x.y
x?.y  ->  (x !== null ? x.y : null)

Jag tycker bättre om:
if( !x ) { return }
x.y  // Här vet vi att x inte är null eller undefined
*/

/*
innerText vs innerHTML?
innerText är säker - strängen visas som text
innerHTML är dangerous - strängen omvandlas till HTML-element, därför sårbar för INJECTION-attacker
*/
