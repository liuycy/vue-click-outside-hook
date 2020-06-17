import { getCurrentInstance, onMounted, onUnmounted } from 'vue';

export default function onClickOutside(
  hook: (e?: Event) => any,
  target = getCurrentInstance()
) {
  function handleEvent(e: Event) {
    // not support IE now
    const path: EventTarget[] = (e as any).path ?? e.composedPath();

    const nodes: any[] = [];

    if (typeof target!.subTree.type === 'symbol') {
      // Fragment
      Array.prototype.map.call(target!.subTree.children, ({ el }) => {
        nodes.push(el);
      });
    } else {
      // Single root
      nodes.push(target!.subTree.el);
    }

    const isNotClickOutside = nodes.some((el) => ~path.indexOf(el));

    if (isNotClickOutside) return;

    hook.call(null, e);
  }

  onMounted(() => {
    if (!target) return;
    if (!target.subTree.children) return;
    window.addEventListener('click', handleEvent);
    window.addEventListener('touchend', handleEvent);
  });

  onUnmounted(() => {
    window.removeEventListener('click', handleEvent);
    window.removeEventListener('touchend', handleEvent);
  });
}
