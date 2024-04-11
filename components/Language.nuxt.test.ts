import { test, describe, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Language from './Language.vue';

let languageProp = "norsk"

describe("The back button", async () => {

    test("Should match snapshot", async () => {
        const wrapper = await mountSuspended(Language)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.html()).toMatchInlineSnapshot(`"<div><button class="text-sm"> Language: <span class="hover:cursor-pointer text-sm">english</span></button></div>"`)
    })
    test("Should emit when button is clicked", async () => {
        const wrapper = await mountSuspended(Language)
        const button = wrapper.find("button")
        await button.trigger("click")

        expect(wrapper.emitted()).toHaveProperty("switchLanguage")
    })
    test("Should display the language that is specified in prop. Else display the default value - english.", async () => {
        let wrapper = await mountSuspended(Language, {
            props:{
                language:languageProp
            }
        })

        console.log(wrapper.text());
        
        expect(wrapper.text()).toContain(languageProp)
        wrapper.unmount()

        wrapper = await mountSuspended(Language)
        expect(wrapper.text()).not.toContain(languageProp)
        expect(wrapper.text()).toContain("english")
    })
})