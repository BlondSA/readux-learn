import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = (props) => {
	const { count, dec, inc, rnd } = props;
	return (
		<div className="jumbotron jumbotron-icon">
			<h1>{count}</h1>
			<button onClick={dec} type="button" className="btn btn-primary">
				DEC
			</button>
			<button onClick={inc} type="button" className="btn btn-primary">
				INC
			</button>
			<button onClick={rnd} type="button" className="btn btn-primary">
				RND
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { count: state.value };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
