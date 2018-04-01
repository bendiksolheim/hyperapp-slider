import { h } from 'hyperapp';

const eventContainer = window.document;

let mouseMoveHandler = null;
let mouseUpHandler = null;

const onMouseMove = setMovementX => e => {
  setMovementX(e.movementX);
};

const onMouseUp = e => {
  eventContainer.removeEventListener('mousemove', mouseMoveHandler);
  eventContainer.removeEventListener('mouseup', mouseUpHandler);
};

const onMouseDown = setMovementX => e => {
  mouseMoveHandler = onMouseMove(setMovementX);
  mouseUpHandler = onMouseUp;
  eventContainer.addEventListener('mousemove', mouseMoveHandler);
  eventContainer.addEventListener('mouseup', mouseUpHandler);
};

const Handle = ({ cls, min, max, value, setMovementX }) => {
  const offset = value / (max - min) * 100;
  const style = {
    position: 'absolute',
    left: `${offset}%`
  };

  return (
    <div
      class={`${cls}__handle`}
      tabIndex="0"
      style={style}
      onmousedown={onMouseDown(setMovementX)}
    />
  );
};

export { Handle };