import { h, app } from 'hyperapp';
import { Slider } from '../src';
import devtools from 'hyperapp-redux-devtools';

const state = {
  slider: Slider.state({ min: 20, max: 60, value: 50, step: 3 }),
  sliderTwo: Slider.state({ min: 120, max: 122, value: 121 }),
  anySlider: Slider.state({ min: 0, max: 10, value: 5, step: 'any' })
};
const actions = {
  slider: Slider.actions,
  sliderTwo: Slider.actions,
  anySlider: Slider.actions
};

const view = (state, actions) => (
  <div>
    <div>Value: {state.slider.value}</div>
    <Slider state={state.slider} actions={actions.slider} />
    <div>Value: {state.sliderTwo.value}</div>
    <Slider state={state.sliderTwo} actions={actions.sliderTwo} />
    <div>Value: {state.anySlider.value}</div>
    <Slider state={state.anySlider} actions={actions.anySlider} />
  </div>
);

devtools(app)(state, actions, view, document.querySelector('#app'));
