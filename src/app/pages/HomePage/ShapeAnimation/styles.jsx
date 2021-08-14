import styled, { keyframes, css } from 'styled-components/macro';

export const Container = styled.div`
  width: 40%;
  height: 0;
  padding-bottom: 40%;
  position: relative;
  margin: 64px 0;
`;

export const Common = styled.div`
  width: 50%;
  height: 50%;
  overflow: hidden;
  position: absolute;
`;

export const Pie1 = styled(Common)`
  overflow: hidden;
  left: 0;
  top: 0;
  > div {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.violet};
    border-top-left-radius: 100%;
    transform-origin: bottom right;
    opacity: ${props => (props.visible ? 1 : 0.3)};
    transform: ${props => (props.visible ? 'rotate(0)' : 'rotate(-90deg)')};
    transition: transform 0.8s ease-out, opacity 0.5s ease-out;
    transition-delay: 0.4s;
  }
`;

export const Pie2 = styled(Pie1)`
  top: unset;
  bottom: 0;
  transform: rotate(-90deg);
  > div {
    background-color: ${props => props.theme.red};
    transition-duration: 0.8s;
    transition-delay: 0.2s;
  }
`;

export const Rect1 = styled(Common)`
  background-color: ${props => props.theme.violet};
  right: 0;
  bottom: 0;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0)')};
  transform-origin: bottom left;
  opacity: ${props => (props.visible ? 1 : 0.01)};
  transition: transform 0.5s ease-out, opacity 0.2s ease-out;
`;

export const Rect2 = styled(Rect1)`
  height: 120%;
  background-color: #f3a09b;
  bottom: 50%;
  transform-origin: top right;
  transition-duration: 0.7s;
`;

export const Rect3 = styled(Rect1)`
  height: 120%;
  background-color: #e4f4f3;
  bottom: 50%;
  left: 0;
  right: unset;
  transition-duration: 0.7s;
`;

const style = css`
  position: absolute;
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0.2)')};
  transition: transform 0.4s cubic-bezier(0.02, 0.09, 0.55, 1.38),
    opacity 0.3s linear;
`;

export const Circle = styled.div`
  ${style};
  width: 16%;
  height: 16%;
  right: 17%;
  bottom: -5%;
  border-radius: 50%;
  background-color: ${props => props.theme.red};
  transition-delay: 1s;
`;

export const Laptop = styled.img`
  ${style};
  height: 90%;
  top: 5%;
  left: -10%;
  transition-delay: 0.7s;
`;
