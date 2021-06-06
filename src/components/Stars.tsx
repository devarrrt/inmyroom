import React from 'react'
import star from '../assets/star.png'

interface IStars { 
	count?: number
}


const Stars: React.FC<IStars> = ({ count }) => {
	return (
		<div className="stars">
		{ Array( count ).fill( count ).map( index => (
			<img src={ star  } alt="star" key={ index } />
		)) }
		</div>
	)
}


export default Stars
