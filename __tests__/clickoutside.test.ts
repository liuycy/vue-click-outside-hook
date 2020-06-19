import 'jsdom-global/register';
import { mount } from '@vue/test-utils';
import single from '../examples/single';
import fragment from '../examples/fragment';

describe('trigger callback', () => {
    test('when clicking outside the single root component', async () => {
        const wrapper = mount(single, {
            attachTo: 'body',
        });
        expect(wrapper.find('#inner').text()).toContain('default');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('#inner').text()).toContain('outside');
    });

    test('when clicking outside the fragment root component', async () => {
        const wrapper = mount(fragment, {
            attachTo: 'body',
        });
        expect(wrapper.find('#inner').text()).toContain('default');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('#inner').text()).toContain('outside');
    });
});

describe('not trigger callback', () => {
    test('when clicking the single root component itself', async () => {
        const wrapper = mount(single, {
            attachTo: 'body',
        });
        expect(wrapper.find('#inner').text()).toContain('default');
        await wrapper.find('#inner').trigger('click');
        expect(wrapper.find('#inner').text()).toContain('default');
    });
    test('when clicking the fragment component itself', async () => {
        const wrapper = mount(fragment, {
            attachTo: 'body',
        });
        expect(wrapper.find('#inner').text()).toContain('default');
        await wrapper.find('#inner').trigger('click');
        expect(wrapper.find('#inner').text()).toContain('default');
    });
});
