# `vue-click-outside-hook`

A hook function triggered when clicking outside the component, used like lifecycle hooks.

## Install
use `yarn`
```sh
yarn add vue-click-outside-hook
```

or use `npm`
```sh
npm install vue-click-outside-hook
```

## Usage 

#### for Vue 3.x use `onClickOutside` in `setup()`

```vue
<script>
import { defineComponent } from 'vue'
import onClickOutside from 'vue-click-outside-hook';

export default defineComponent({
  setup() {
    onClickOutside(e => {
      // after clicking outside the component
      // this callback will be triggered
    })
  }
})
</script>
```

