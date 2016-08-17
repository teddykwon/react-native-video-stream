/**
 * Created by buhe on 16/4/29.
 */
import React, {PropTypes, Component} from 'react';
import {requireNativeComponent, Dimensions, NativeModules, View} from 'react-native';
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
const { width , height } = Dimensions.get('window');

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
		landscape: PropTypes.bool.isRequired,

		onReady: PropTypes.func,
		onPending: PropTypes.func,
		onStart: PropTypes.func,
		onError: PropTypes.func,
		onStop: PropTypes.func,
		...View.propTypes,
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
		let style = this.props.style;
		if(this.props.style){
			if(this.props.landscape){
				style = {
					...this.props.style,
					transform:[{rotate:'270deg'}],
					width:height,
					height:width
				};
			}else{
				style = {
					width: width,
					height: height,
					...this.props.style
				}
			}
		}
		const nativeProps = {
			onReady: this._onReady,
			onPending: this._onPending,
			onStart: this._onStart,
			onError: this._onError,
			onStop: this._onStop,
			...this.props,
			style: {
				...style
			}
		};

		return (
			<RCTStream
				{...nativeProps}
			/>
		)
	}
}

const RCTStream = requireNativeComponent('RCTStream', Stream);

module.exports = Stream;