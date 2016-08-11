/**
 * Created by buhe on 16/4/29.
 */
import React, {PropTypes, Component} from 'react';
import {requireNativeComponent, NativeModules, View} from 'react-native';
//
// class Stream extends Component {
// 	static propTypes = {
//
// 	};
//
// 	render() {
// 		return (
// 			<RCTStream
// 				{...this.props}
// 			/>
// 		)
// 	}
// }

class Stream extends Component {
	constructor(props, context){
		super(props, context);
		this._onReady = this._onReady.bind(this);
		this._onPending = this._onPending.bind(this);
		this._onStart = this._onStart.bind(this);
		this._onError = this._onError.bind(this);
		this._onStop = this._onStop.bind(this);
	}

	static propTypes = {
		started: PropTypes.bool,
		cameraFronted: PropTypes.bool,
		url: PropTypes.string.isRequired,

		onReady: PropTypes.func,
		onPending: PropTypes.func,
		onStart: PropTypes.func,
		onError: PropTypes.func,
		onStop: PropTypes.func
	}

	static defaultProps= {
		cameraFronted: true
	}

	_onReady(event){
		this.props.onReady && this.props.onReady(event.nativeEvent);
	}

	_onPending(event) {
		this.props.onPending && this.props.onPending(event.nativeEvent);
	}

	_onStart(event) {
		this.props.onStart && this.props.onStart(event.nativeEvent);
	}

	_onError(event) {
		this.props.onError && this.props.onError(event.nativeEvent);
	}

	_onStop(event) {
		this.props.onStop && this.props.onStop(event.nativeEvent);
	}

	render() {
		const nativeProps = {
			onReady: this._onReady,
			onPending: this._onPending,
			onStart: this._onStart,
			onError: this._onError,
			onStop: this._onStop
		};
		return (
			<RCTStream
				{...nativeProps}
				{...this.props}
				style={{
					width:300,
					height:200
				}}
			/>
		)
	}
}

const RCTStream = requireNativeComponent('RCTStream', Stream);

module.exports = Stream;