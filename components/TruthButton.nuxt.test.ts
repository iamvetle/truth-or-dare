import { test, describe, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import TruthButton from './TruthButton.vue';

describe("The back button", async () => {

    test("Should match snapshot", async () => {
        const wrapper = await mountSuspended(TruthButton)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.html()).toMatchInlineSnapshot(`"<button id="truth-choice-button" data-testid="truth-choice-button-test" class="">Truth</button>"`)
    })
    test("Should emit when button is clicked", async () => {
        const wrapper = await mountSuspended(TruthButton)
        const button = wrapper.find("button")
        await button.trigger("click")

        expect(wrapper.emitted()).toHaveProperty("truth")
    })
})



