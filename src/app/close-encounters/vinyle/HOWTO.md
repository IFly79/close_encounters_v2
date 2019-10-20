# Adding the vinyle

## In the \<parent>.component.ts

Import `VinyleModule`:

```ts
  imports: [
    // other imports
    VinyleModule
  ],
```

Declare the vinyleBool:

```ts
export class CloseEncountersComponent implements OnInit {
  // other variables
  public vinyleBool: boolean;
}
```

and intialize it in the constructor:

```ts
constructor() {
  // other initializations
  this.vinyleBool = false;
}
```

Pass either `true` or `false` to the vinyle component to toggle rotation state:

```ts
vinyleState(vinyleBool){
  this.vinyleBool = vinyleBool;
}
```

## In the \<parent>.component.html

You should add the `app-vinyle` tag to the component:

```html
<app-vinyle [vinyleBool]="vinyleBool"></app-vinyle>
```

### Triggering the rotation

Add a click handler on the play button

```html
(click)="vinyleState(true)"
```

and a click handler on the stop button

```html
(click)="vinyleState(false)"
```
