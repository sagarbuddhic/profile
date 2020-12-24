// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";

export const container = css`
  background-color: white;
`;

export const appHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const content = css`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 2fr;
`;

export const linksContainer = css`
  padding: 15px 20px;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 5px;
`;

export const banner = css`
  width: 100%;
  height: 250px;
  background-color: #3500d3;
  border-radius: 0px 0px 0px 50px;
`;

export const button = css`
  background-color: #f7941d;
  padding: 10px 20px;
  box-shadow: 0 0 10px 2px rgba(184, 184, 184, 0.5);
  border-radius: 4px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;

  :hover {
    background-color: #f1b42f;
  }
`;

export const links = css`
  text-decoration: none;
  font-weight: bold;
  color: whitesmoke;
`;

export const circle = css`
  background: white;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const textAnimate = keyframes`
  0% { bottom: -0.2em; opacity: 1; }
  50% { bottom: 0.2em; }
  100% { bottom: 0; opacity: 1; }
`;

export const imageWrapper = css`
  display: grid;
  grid-gap: 50px;
  grid-auto-flow: row;
`;

export const name = css`
  color: lightcyan;
  font-size: 30px;
  font-weight: bold;
  padding-left: 25px;
  font-style: oblique;
`;

export const nameLetters = (index) => css`
  animation: ${textAnimate} 0.75s forwards;
  animation-delay: ${0.5 + index / 10 + "s"};
  position: relative;
  opacity: 0;
`;
