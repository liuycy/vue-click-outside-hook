import { defineComponent, ref } from 'vue';
import onClickOutside from '../src/index';

const InnerComponent = defineComponent({
    template:
        '<div id="inner" style="width: 200px; height: 200px;">{{ boxText }}</div>',

    setup() {
        const boxText = ref('default');

        onClickOutside(() => {
            boxText.value = 'outside';
        });

        return { boxText };
    },
});

export default defineComponent({
    components: { InnerComponent },

    template: `\
    <div id="wrapper" style="width: 400px; height: 400px;">
        <inner-component />
        <button>test</button>
    </div>`,
});
