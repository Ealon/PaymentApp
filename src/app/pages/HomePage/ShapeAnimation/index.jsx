import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import {
  Container,
  Rect1,
  Rect2,
  Rect3,
  Pie1,
  Pie2,
  Laptop,
  Circle,
} from './styles';
import laptop from './laptop.svg';

const ShapeAnimation = () => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <Container>
          <Rect3 visible={isVisible} />
          <Pie1 visible={isVisible}>
            <div />
          </Pie1>
          <Pie2 visible={isVisible}>
            <div />
          </Pie2>
          <Rect1 visible={isVisible} />
          <Rect2 visible={isVisible} />
          <Circle visible={isVisible} />
          <Laptop visible={isVisible} src={laptop} alt="laptop" />
        </Container>
      )}
    </VisibilitySensor>
  );
};

export default ShapeAnimation;
