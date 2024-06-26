import { test, describe, vi, expect } from 'vitest';
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime';
import { screen } from '@testing-library/vue';
import ForwardButton from './ForwardButton.vue';


describe("ForwardButton", () => {

    test("Should match snapshot", async () => {
        const wrapper = await mountSuspended(ForwardButton)
        
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<button id="forward-button" class="flex space-x-1 items-center"><span>Forward</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.71C15.68 8.32 15.68 7.69 15.29 7.3L8.71 0.700001C8.32 0.310001 7.69 0.310001 7.3 0.700001C6.91 1.09 6.91 1.72 7.3 2.11L12.17 7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9Z" fill="#02343F"></path>
            </svg></button>"
        `)
    })
    test("Should emit when button is clicked", async () => {
        const wrapper = await mountSuspended(ForwardButton)
        const button = wrapper.find("button")
        await button.trigger("click")

        expect(wrapper.emitted()).toHaveProperty("forward")
    })
})