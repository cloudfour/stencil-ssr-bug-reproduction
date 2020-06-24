import { Component, h} from "@stencil/core";

@Component({
  tag: "c4-page",
})
export class C4Page {
  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
