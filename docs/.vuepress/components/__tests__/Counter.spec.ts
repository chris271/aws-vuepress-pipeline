import 'jest';
import { mount } from '@vue/test-utils';
// @ts-ignore
import Counter from '../Counter';

describe('Counter Test Suite', () => {

    it('Display Counter Count', () => {
        const wrapper = mount(Counter, {});
        expect(wrapper.find('#counter-count').text())
            .toContain('0');
    });

});
