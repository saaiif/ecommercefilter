import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts, freeShipping } from '../actions/productActions';
const pointer = {
	cursor: 'pointer',
}

class Filter extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
				<div className="col-md-4">
					<label>
						Order by
						<select style={pointer}
							className="form-control"
							value={this.props.sort}
							onChange={(event) => {
								this.props.sortProducts(this.props.filteredProducts, event.target.value);
							}}
						>
							<option value="">Select</option>
							<option value="lowestprice">Lowest to highest</option>
							<option value="highestprice">Highest to lowest</option>
						</select>
					</label>
				</div>

				{/* Freeshipping */}

				<div className="col-md-4" >
					<label >
						Free Shipping ?
						<select style={pointer}
							className="form-control"
							value={this.props.freeshipping}
							onChange={(event) => {
								this.props.freeShipping(this.props.products, event.target.value);
							}}
						>
							<option value="">Select</option>
							<option value="true">YES</option>
							<option value="undefined">NO</option>
						</select>
					</label>
				</div>
				<div className="col-md-4">
					<label>
						{' '}
						Filter Size
						<select style={pointer}
							className="form-control"
							value={this.props.size}
							onChange={(event) => {
								this.props.filterProducts(this.props.products, event.target.value);
							}}
						>
							<option value="">ALL</option>
							<option value="x">XS</option>
							<option value="s">S</option>
							<option value="m">M</option>
							<option value="l">L</option>
							<option value="xl">XL</option>
							<option value="xxl">XXL</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	products: state.products.items,
	filteredProducts: state.products.filteredItems,
	size: state.products.size,
	sort: state.products.sort,
	freeshipping:state.products.freeshipping
});
export default connect(mapStateToProps, { filterProducts, sortProducts, freeShipping })(Filter);
