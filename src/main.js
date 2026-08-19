import './style.css';
// i en React-app hade detta funnits i state eller Zustand store
const cart = [
    {
        burgerId: 'abq23',
        burgerName: 'Arrayburgare',
        burgerPrice: 125,
        count: 1
    }
];
function renderCart() {
    // vi kan skriva ! efter querySelector - men det förutsätter att vi verkligen vet vad vi gör - risk att programmet kraschar
    // Det är inte garanterat att .cart-items hittar något element!
    const cartItemsDiv = document.querySelector('.cart-items');
    // cartItems kan vara null, ifall querySelector inte hittar den - uteslut möjligheten med hjälp av if-sats
    if (cartItemsDiv === null) {
        return;
    }
    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
			<h3> Burger name </h3>
			<p class="price-tag"> ?? kr </p>
			<p class="count"> ? beställa </p>
			<button class="add"> +Fler </button>
			<button class="remove"> -Färre </button>
		`;
        // Eftersom vi skapar h3-elementet här, är det ok att använda "!"
        div.querySelector('h3').innerText = item.burgerName;
        // console.log('Finns elementet?', div.querySelector<HTMLParagraphElement>('.price-tag'))
        div.querySelector('.price-tag').innerText = `${item.burgerPrice} kr`;
        cartItemsDiv.append(div);
    });
}
// Rendera när programmet startar
renderCart();
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
