export function enumKeys<T extends object>(enumObj: T): T[keyof T][] {
	return Object.values(enumObj).filter((value) => typeof value !== 'number') as T[keyof T][];
}
