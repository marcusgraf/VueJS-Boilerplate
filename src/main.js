// Import main style definitions.
import './styles/main.scss';
// Importing main Scripts.
import Vue from 'vue';
import Root from './container/Root.vue';


// Load our vue App including its main component.
new Vue({
	el: '#app',
	render: h => h(Root)
});