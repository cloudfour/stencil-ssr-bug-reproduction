import { Component, h } from "@stencil/core";

@Component({
  tag: "c4-button",
  styleUrl: 'c4-button.css',
  shadow: true,
})
export class C4Button {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
