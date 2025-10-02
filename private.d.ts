type DeepReadonly<T> = Readonly<{
	[K in keyof T]:
		T[K] extends (number | string | symbol)
			? Readonly<T[K]>
			: T[K] extends readonly (infer A)[]
				? ReadonlyArray<DeepReadonly<A>>
				: DeepReadonly<T[K]>
}>
type VboInfo = Readonly<{
	count: number
	stride: number
	vbo: WebGLBuffer
}>