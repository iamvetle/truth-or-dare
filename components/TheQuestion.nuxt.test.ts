import { test, describe, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import TheQuestion from './TheQuestion.vue';

let textProp = "Some test question"

describe('TheQuestion', async () => {
    
    test('Should match snapshot', async () => {
        const wrapper = await mountSuspended(TheQuestion)
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<div data-testid="questionP-test" class="flex" id="questionP">
            <!-- <p>{{ mode }}</p> -->
            <p class="flex text-center mx-auto text-lg">...</p>
          </div>"
        `)
    })
    
    test('Should render prop if prop is specified', async () => {
        const wrapper = await mountSuspended(TheQuestion, {
            props: {
                text:textProp
            }
        })
        
        expect(wrapper.text()).toBe(textProp)
    })
    test('Should render ... if no text prop', async () => {
        const wrapper = await mountSuspended(TheQuestion)
        expect(wrapper.text()).not.toContain(textProp)        
        expect(wrapper.text()).toBe("...")
    })
})