/** @jsx h */
import { h, app } from "hyperapp";

const state = {
  count: 0
};

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
};

const view = (state, actions) =>
  h("div", {}, [
    h("h1", {}, state.count),
    h("button", { onclick: () => actions.down(1) }, "-"),
    h("button", { onclick: () => actions.up(1) }, "+")
  ]);

export const main = app(state, actions, view, document.body);
