# api
## element creation and class toggling
```js
type Classes = (Classmap | Classlist | Classname)

type Classmap  = { [Classname]: any }
type Classlist = Classname[]
type Classname = string


import $element from 'blade/element'

$element (tag: string, classes: ?Classes, content: ?string): Element
$element (tag: string, classes: ?Classes, content: ?Element[]): Element
$element (tag: string, classes: ?Classes, content: ?Element): Element

$element ([ ns: string, tag: string ], classes: ?Classes, content: ?string): Element
$element ([ ns: string, tag: string ], classes: ?Classes, content: ?Element[]): Element
$element ([ ns: string, tag: string ], classes: ?Classes, content: ?Element): Element


import tcl from 'blade/tcl'

curried tcl<T: Element> (element: T, classname: Classname, state: any): T
curried tcl<T: Element> (any combination of element classname and state): T

tcls<T: Element> (element: T, classes: Classes, state: ?any): T
tc<T: Element> (element: T, classname: Classname, state: any): T
```

## event capturing and emitting
```js
type Disposer = () => void

import on from 'blade/event'

on (target: EventTarget, eventname: string, listener: EventListener): Disposer

let delegate = [ target: EventTarget, delegated selector: string ]
on (delegate, eventname: string, listener: EventListener): Disposer


import { emit } from 'blade/event'

emit<T: EventTarget> (target: T, eventname: string, detail data: any): T
```

## put element to another element

## arbitary html constructing

## other
```ts
import empty from 'blade/empty'

empty<T: Node> (node: T): T


import { html } from 'blade/inner'

curried html<T: Element> (T, string): T
curried html<T: Element> (string, T): T


import { html } from 'blade/inner'

curried text<T: Node> (T, string): T
curried text<T: Node> (string, T): T
```
