# `vue-click-outside-hook`

A hook function triggered when clicking outside the component, used like lifecycle hooks.

## Usage 

#### `onClickOutside`

```js
export default {
  setup() {
    onClickOutside(e => {
      // after clicking outside the component
      // this callback will be triggered
    })
  }
}
```

