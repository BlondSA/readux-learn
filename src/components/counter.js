import React from "react";
import { connect } from "react-redux";
import { inc, dec, rnd } from "../actions";

const Counter = (props) => {
	const { count, onDecrease, onIncrease, onRandom } = props;
	return (
		<div className="jumbotron jumbotron-icon">
			<h1>{count}</h1>
			<button
				onClick={onDecrease}
				type="button"
				className="btn btn-primary"
			>
				DEC
			</button>
			<button
				onClick={onIncrease}
				type="button"
				className="btn btn-primary"
			>
				INC
			</button>
			<button
				onClick={onRandom}
				type="button"
				className="btn btn-primary"
			>
				RND
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { count: state.value };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrease: () => dispatch(dec()),
		onIncrease: () => dispatch(inc()),
		onRandom: (value) => dispatch(rnd(value)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
