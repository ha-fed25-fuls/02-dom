
function listify<T>(a: T, b: T, c: T): Array<T> {
	return [a, b, c]
}
function listifyNumber(a: number, b: number, c: number): Array<number> {
	return [a, b, c]
}
// function listifyAny(a: any, b: any, c: any): Array<any> {
// 	return [a, b, c]
// }


listify(1, 2, 5)   // T är number
listify('a', 'b', 'e')  // T är string
listifyNumber(1, 2, 5)
// listifyAny(1, 2, 5)


// Vi måste inte ange HTMLParagraphElement på båda ställena
const counterEl1: HTMLParagraphElement = document.querySelector<HTMLParagraphElement>('#clicki-counter')!

// Davids rekommendation:
const counterEl2: HTMLParagraphElement = document.querySelector('#clicki-counter')!

const counterEl3 = document.querySelector<HTMLParagraphElement>('#clicki-counter')!


if( counterEl1 || counterEl2 || counterEl3 ) {}