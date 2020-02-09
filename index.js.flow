/* @flow */

declare module 'blade/element'
{
	import type { Classes } from 'blade/tcl'

	declare export function $element (string, ?Classes, ?string): Element
	declare export function $element (string, ?Classes, ?Element[]): Element
	declare export function $element (string, ?Classes, ?Element): Element

	declare export function $element ([ string, string ], ?Classes, ?string): Element
	declare export function $element ([ string, string ], ?Classes, ?Element[]): Element
	declare export function $element ([ string, string ], ?Classes, ?Element): Element

	declare export default typeof $element

	declare export function $div (?Classes, ?string): HTMLDivElement
	declare export function $div (?Classes, ?Element[]): HTMLDivElement
	declare export function $div (?Classes, ?Element): HTMLDivElement

	declare export function $span (?Classes, ?string): HTMLSpanElement
	declare export function $span (?Classes, ?Element[]): HTMLSpanElement
	declare export function $span (?Classes, ?Element): HTMLSpanElement

	declare export function $svg (string, ?Classes, ?string): Element
	declare export function $svg (string, ?Classes, ?Element[]): Element
	declare export function $svg (string, ?Classes, ?Element): Element
}

declare module 'blade/empty'
{
	declare export default <T: Node>(T) => T
}

declare module 'blade/event'
{
	declare type Disposer = () => void

	declare type ListenerTo<Event> = (Event) => mixed

	declare type Listener<Event> =
	{
		handleEvent: ListenerTo<Event>
	}
	| ListenerTo<Event>

	declare function on<Type, Listener> (EventTarget, Type, Listener): Disposer
	declare function on<Type, Listener> ([ EventTarget, string ], Type, Listener): Disposer

	declare export default typeof on

	declare function emit<T: EventTarget> (T, string, any): T
}

declare module 'blade/html'
{
	declare export function $html (html: string): Element

	declare export default typeof $html

	declare export function $$html (html: string): DocumentFragment

	declare export function $text (text: string): Text
}

declare module 'blade/inner'
{
	declare function html<T: Element> (T, string):     T
	declare function html<T: Element> (T): (string) => T

	declare function text<T: Node> (T, string):     T
	declare function text<T: Node> (T): (string) => T
}

declare module 'blade/put'
{
	declare function put<T: Node> (Node, T):     T
	declare function put<T: Node> (Node): (T) => T

	declare export default typeof put
}

declare module 'blade/tcl'
{
	declare export type Classes = (Classmap | Classlist | Classname)

	declare export type Classmap  = { [Classname]: any }
	declare export type Classlist = Classname[]
	declare export type Classname = string


	declare function tcl<T: Element> (T): (Classname) => (any) => T
	declare function tcl<T: Element> (T): (Classname) => (any) => T
	declare function tcl<T: Element> (Classname): (any) => (T) => T
	declare function tcl<T: Element> (Classname): (T) => (any) => T
	declare function tcl<T: Element> (any): (Classname) => (T) => T
	declare function tcl<T: Element> (any): (T) => (Classname) => T

	declare function tcl<T: Element> (T): (Classname, any) => T
	declare function tcl<T: Element> (T): (Classname, any) => T
	declare function tcl<T: Element> (Classname): (any, T) => T
	declare function tcl<T: Element> (Classname): (T, any) => T
	declare function tcl<T: Element> (any): (Classname, T) => T
	declare function tcl<T: Element> (any): (T, Classname) => T

	declare function tcl<T: Element> (T, Classname): (any) => T
	declare function tcl<T: Element> (T, any): (Classname) => T
	declare function tcl<T: Element> (Classname, T): (any) => T
	declare function tcl<T: Element> (Classname, any): (T) => T
	declare function tcl<T: Element> (any, T): (Classname) => T
	declare function tcl<T: Element> (any, Classname): (T) => T

	declare function tcl<T: Element> (T, Classname, any): T
	declare function tcl<T: Element> (T, any, Classname): T
	declare function tcl<T: Element> (Classname, T, any): T
	declare function tcl<T: Element> (Classname, any, T): T
	declare function tcl<T: Element> (any, T, Classname): T
	declare function tcl<T: Element> (any, Classname, T): T

	declare export default typeof tcl

	declare export function tcls<T: Element> (T, Classes, ?any): T

	declare export function tc<T: Element> (T, Classname, any): T
}
