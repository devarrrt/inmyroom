
export interface IProductType {
	title: string, 
	rating: number,
	price: {
		new: number,
		old: number,
		hot?: boolean
	},
	color: string,
	material: string,
	size: string,
	mechanism: string,
	seller: string
}