import 'jsdom-global/register';
import { mount } from '@vue/test-utils';
import single from '../../examples/single';

describe('trigger click  ', () => {
    test('outside the single root component', async () => {
        const wrapper = mount(single, {
            attachTo: 'window',
        });
        expect(wrapper.find('#inner').text()).toContain('default');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('#inner').text()).toContain('outside');
    });

    test('outside the fragment root component', () => {});
});
