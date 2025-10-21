// Polyfills necesarios para MQTT en React Native
import 'react-native-get-random-values';

// Buffer polyfill
import { Buffer } from 'buffer';
global.Buffer = global.Buffer || Buffer;

// Events polyfill
import { EventEmitter } from 'events';
global.EventEmitter = global.EventEmitter || EventEmitter;

// Process polyfill
global.process = global.process || {};
global.process.nextTick = global.process.nextTick || setImmediate;
