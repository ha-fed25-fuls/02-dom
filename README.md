# 02-DOM

DOM-manipulation (Vanilla JS) med TypeScript.

För vanlig DOM-manipulation använder vi funktionerna:
+ querySelector
+ createElement

När vi plockat ut ett element kan vi använda:
+ innerText
+ innerHTML
+ className
+ addEventListener()
+ remove()
+ append()

querySelector returnerar antingen `null` eller ett element. Alla element har ett HTML???Element interface. Om vi vet att vi alltid kommer få ett element skriver vi:

```typescript
const myButton = document.querySelector<HTMLButtonElement>('#my-button')
```

Finns det minsta osäkerhet skriver vi:
```typescript
const maybeButton = document.querySelector<HTMLButtonElement | null>('#my-button')
if( !maybeButton ) {
	// maybeButton är null, querySelector hittade inte elementet
	return
} else {
	// maybeButton existerar, querySelector hittade
}

```
