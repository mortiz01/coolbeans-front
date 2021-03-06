import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './DiscoverResult.css'

class DiscoverResult extends Component {
	render() {
		let coffees = this.props.discoverResults.map((coffee, index) => {
			return (
				<div key={index} className="coffee">
					<Link to={`/coffees/${coffee._id}`}>
						<div className="coffee-img">
							<img src={coffee.imgUrl} alt={coffee.name} />
						</div>
						<h2>
							{coffee.name}{' '}
							<span className="coffee-notes">
								{coffee.flavorProfile[0].notes.isFruity ? 'Fruity ' : ''}
								{coffee.flavorProfile[0].notes.isSour ? 'Sour ' : ''}
								{coffee.flavorProfile[0].notes.isVeggie ? 'Earthy ' : ''}
								{coffee.flavorProfile[0].notes.isRoasted ? 'Roasted ' : ''}
								{coffee.flavorProfile[0].notes.isSpicy ? 'Spicy ' : ''}
								{coffee.flavorProfile[0].notes.isNuttyCocoa
									? 'Nutty / Chocolatey '
									: ''}
								{coffee.flavorProfile[0].notes.isSweet ? 'Sweet ' : ''}
								{coffee.flavorProfile[0].notes.isFloral ? 'Floral ' : ''}
								{coffee.flavorProfile[0].notes.isWeird ? 'Weird ' : ''}
							</span>
						</h2>
					</Link>
				</div>
			)
		})

		return (
			<div className="discover-results">
				{this.props.discoverResults.length > 0 ? (
					<div>
						<h2> Results ({this.props.discoverResults.length})</h2>
						<div className="coffees">{coffees}</div>
					</div>
				) : (
					<h2> No results match your search criteria </h2>
				)}
			</div>
		)
	}
}

DiscoverResult.propTypes = {
	discoverResults: PropTypes.array.isRequired
}

export default DiscoverResult
