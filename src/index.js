import { h } from 'hyperapp';
import { Handle } from './handle';
import { Track } from './track';

function isUndefined(v) {
  return typeof v === 'undefined';
}

function Slider({ baseClass, state, actions, onChange }) {
  const cls = !isUndefined(baseClass) ? baseClass : 'slider';

  return (
    <div class={cls}>
      <Track cls={cls} setWidth={actions.setDomWidth} />
      <Handle
        cls={cls}
        min={state.min}
        max={state.max}
        value={state.value}
        setMovementX={actions.setMovementX}
      />
    </div>
  );
}

Slider.state = function({ min, max, value }) {
  return {
    min,
    max,
    value,
    dom: {
      width: 0,
      value: 0
    }
  };
};

Slider.actions = {
  setValue: value => state => ({ value }),
  setMovementX: movementX => (state, actions) => {
    const newDomValue = Math.max(
      0,
      Math.min(state.dom.value + movementX, state.dom.width)
    );
    const ratio = newDomValue / state.dom.width;
    const newValue = state.min + ratio * (state.max - state.min);
    actions.setValue(newValue);
    actions.dom.setValue(newDomValue);
  },
  setDomWidth: width => (state, actions) => {
    actions.dom.setWidth(width);
    actions.setMovementX(0);
  },
  dom: {
    setWidth: width => state => ({ width }),
    setValue: value => state => ({ value })
  }
};

export { Slider };