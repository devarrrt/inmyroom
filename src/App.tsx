import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Product } from './components';
import { IProductType } from './types';

interface IApp { }


let products: IProductType[] = Array(30)
	.fill(0)
	.map(() => ({
		title: 'Тумба прикроватная с ящиками',
		rating: Number((Math.random() * 5 + 1).toFixed(2)),
		price: {
			new: Math.round(Math.random() * 100000),
			old: Math.round(Math.random() * 100000),
			hot: !!Math.round(Math.random() * 1)
		},
		color: 'Черный ',
		material: 'Экокожа',
		size: 'ш. 397 х в. 324 х г. 323',
		mechanism: 'Раскладной',
		seller: 'Laska Family'
	}))



const App: React.FC<IApp> = () => {
	const [maxCount, setMaxCount] = useState<number>(5)
	const wrapperRef = useRef<HTMLDivElement>(null)


	const onScroll = useCallback((e: any) => {
		if ( e.target ) {
			const isEnd = e.target.scrollWidth - e.target.scrollLeft - 250 <= e.target.clientWidth
			if ( isEnd ) {
				setMaxCount( count => count + 1 )
			} //если достигли конца прокрутки, то к продуктам добавляем еще продукт
		}
	}, [] )

	useEffect(()=> {
		const current = wrapperRef.current
			current?.addEventListener( 'scroll', onScroll )
			return () => {
				current?.removeEventListener( 'scroll', onScroll )
			}
	}, [onScroll] )
	

	useEffect( ()=> {//если количесвто проскроленных эл-тов больше или равно кол-ва продуктов (30), то удалеяем скролл 
		if ( wrapperRef.current && maxCount >= products.length ) {
			wrapperRef.current.removeEventListener( 'scroll', onScroll )
		}
	}, [maxCount, onScroll])







	return (
		<div className="wrapper" ref={wrapperRef}>
			<ul className="columns columns--first">
				<li></li>
				<li> Рейтинг </li>
				<li> Цена </li>
				<li> Цвет </li>
				<li> Материал </li>
				<li> Размеры </li>
				<li> Механизм </li>
				<li> Продавец </li>
			</ul>
			{ products.slice(0, maxCount).map((product: IProductType, index: number) => <Product {...product} key={index} />)}
		</div>
	)
}

export default App
