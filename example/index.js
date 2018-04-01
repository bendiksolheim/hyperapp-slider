import { h, app } from 'hyperapp';
import { Slider } from '../src';
import devtools from 'hyperapp-redux-devtools';

const state = {
  slider: Slider.state({ min: 0, max: 100, value: 100 })
};
const actions = {
  slider: Slider.actions
};

const view = (state, actions) => (
  <Slider state={state.slider} actions={actions.slider} />
);

devtools(app)(state, actions, view, document.querySelector('#app'));
