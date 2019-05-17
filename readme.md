# api
## `$element` & `tcl`
```js
type Classes = (Classmap | Classlist | Classname)

type Classmap  = { [Classname]: any }
type Classlist = Classname[]
type Classname = string

$element (tag: string, classes: ?Classes, content: ?string): Element
$element (tag: string, classes: ?Classes, content: ?Element[]): Element
$element (tag: string, classes: ?Classes, content: ?Element): Element

$element ([ ns: string, tag: string ], classes: ?Classes, content: ?string): Element
$element ([ ns: string, tag: string ], classes: ?Classes, content: ?Element[]): Element
$element ([ ns: string, tag: string ], classes: ?Classes, content: ?Element): Element

curried tcl<T: Element> (element: T, classname: Classname, state: any): T
curried tcl<T: Element> (any combination of element classname and state): T

tcls<T: Element> (element: T, classes: Classes, state: ?any): T
tc<T: Element> (element: T, classname: Classname, state: any): T
```

## event

## put

## html constructor

## other
```js
empty<T: Node> (node: T): T

curried html<T: Element> (T, string): T
curried html<T: Element> (string, T): T

curried text<T: Node> (T, string): T
curried text<T: Node> (string, T): T
```
