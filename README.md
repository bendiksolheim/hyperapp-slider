# hyperapp-slider

Slider/range component for [Hyperapp](https://github.com/hyperapp/hyperapp).

## Usage

```
import { h, app } from 'hyperapp';
import { Slider } from 'hyperapp-slider';

const state = {
    mySlider: Slider.state({min: 0, max: 100, value: 50})
};

const actions = {
    mySlider: Slider.actions
};

const view = (state, actions) => (
    <div>
        <div>Value: {state.mySlider.value}</div>
        <Slider state={state.mySlider} actions={actions.mySlider} />
    </div>
);

app(state, actions, view, document.body);
```

There is no default styling. You can style based on the classes `.slider`, `.slider__track` and `.slider__handle`. Alternatively, you can passe your own "base" class with `baseClass="my-slider"` and get `.my-slider`, `.my-slider__track` and `.my-slider__handle`.

See `example/index.html` and `example/index.js` for a working example.

**NOTE:** don’t update values owned by hyperapp-slider manually, things will get out of sync.


## Development

- `npm i`
- `npm run watch`
- `open http://localhost:1234`

