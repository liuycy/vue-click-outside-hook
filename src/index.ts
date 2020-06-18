import { getCurrentInstance, onMounted, onUnmounted } from 'vue';

interface ChromeEvent extends Event {
    path: EventTarget[];
}

export default function onClickOutside(
    hook: (e?: Event) => void,
    target = getCurrentInstance()
): void {
    function handleEvent(e: Event) {
        if (!target) return;

        // not support IE now
        const path: EventTarget[] = (e as ChromeEvent).path ?? e.composedPath();

        const nodes: EventTarget[] = [];

        if (typeof target.subTree.type === 'symbol') {
            // Fragment
            Array.prototype.map.call(target.subTree.children, ({ el }) => {
                nodes.push(el);
            });
        } else {
            // Single root
            nodes.push(target.subTree.el as EventTarget);
        }

        const isNotClickOutside = nodes.some((el) => ~path.indexOf(el));

        if (isNotClickOutside) return;

        hook.call(null, e);
    }

    onMounted(() => {
        if (!target?.subTree.children) return;
        window.addEventListener('click', handleEvent);
        window.addEventListener('touchend', handleEvent);
    });

    onUnmounted(() => {
        window.removeEventListener('click', handleEvent);
        window.removeEventListener('touchend', handleEvent);
    });
}
