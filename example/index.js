import { h, app } from 'hyperapp';
import { Slider } from '../src';
import devtools from 'hyperapp-redux-devtools';

const state = {
  slider: Slider.state({ min: 20, max: 60, value: 50 }),
  sliderTwo: Slider.state({ min: 120, max: 122, value: 121 })
};
const actions = {
  slider: Slider.actions,
  sliderTwo: Slider.actions
};

const view = (state, actions) => (
  <div>
    <div>Value: {state.slider.value}</div>
    <Slider state={state.slider} actions={actions.slider} />
    <div>Value: {state.sliderTwo.value}</div>
    <Slider state={state.sliderTwo} actions={actions.sliderTwo} />
  </div>
);

devtools(app)(state, actions, view, document.querySelector('#app'));
