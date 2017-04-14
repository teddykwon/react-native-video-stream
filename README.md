# react-native-video-stream

[![NPM Version][npm-image]][npm-url]

# Info
This library based [react-native-pili](https://github.com/buhe/react-native-pili)
Add Stream based [LFLiveKit](https://github.com/LaiFengiOS/LFLiveKit/issues)

**Only Support iOS**

## Add it to your project

Run `npm install --save react-native-video-stream`

### iOS

1. Add RCTLFLiveKit.xcodeproj to Libraries

2. Your project Click

3. Go to General -> Embedded Binaries and add LFLiveKit.framework

4. Linked Frameworks and Libraries add LFLiveKit.framework

## Usage

```javascript
    <Stream
        started={false} // start your stream
        cameraFronted={true} // camera front or back
        url="rtmp://xxx" // your rtmp publish url
        landscape={false} // landscape mode
        onReady={() => {}} // streaming ready
        onPending={() => {}} // streaming ready to start
        onStart={() => {}} // streaming start
        onError={() => {}} // straming error
        onStop={() => {}} // streaming stop
        />
```
# Updates
- React-Native 0.40.0+ ( Thanks @alex-mcleod )

# License
MIT

[npm-image]: https://img.shields.io/npm/v/react-native-video-stream.svg
[npm-url]: https://www.npmjs.com/package/react-native-video-stream
