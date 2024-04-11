import { test, describe, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import DareButton from './DareButton.vue';

describe("The back button", async () => {

    test("Should match snapshot", async () => {
        const wrapper = await mountSuspended(DareButton)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.html()).toMatchInlineSnapshot(`"<button id="dare-choice-button" data-testid="dare-choice-button-test" class="">Dare</button>"`)
    })
    test("Should emit when button is clicked", async () => {
        const wrapper = await mountSuspended(DareButton)
        const button = wrapper.find("button")
        await button.trigger("click")

        expect(wrapper.emitted()).toHaveProperty("dare")
    })
})