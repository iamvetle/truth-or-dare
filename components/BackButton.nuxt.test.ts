import { test, describe, vi, expect } from 'vitest';
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime';
import { screen } from '@testing-library/vue';
import BackButton from './BackButton.vue';

describe("The back button", async () => {

    test("Should match snapshot", async () => {
        const wrapper = await mountSuspended(BackButton)
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<button id="back-button" class="flex space-x-1 items-center"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z" fill="#02343F"></path>
            </svg><span>Back</span></button>"
        `)
    })

    test("Should match snapshot - the same as above, just with renderSuspended object deconstructed instead", async () => {
        // ? what difference does "route" make
        const { html } = await renderSuspended(BackButton, {route:"/"})
        expect(html()).toMatchInlineSnapshot(`
          "<div id="test-wrapper"><button id="back-button" class="flex space-x-1 items-center"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z" fill="#02343F"></path>
              </svg><span>Back</span></button></div>"
        `)
    })

    test("Should match snapshot - renderSuspended html.html", async () => {
        const html = await renderSuspended(BackButton, )
        expect(html.html()).toMatchInlineSnapshot(`
          "<div id="test-wrapper"><button id="back-button" class="flex space-x-1 items-center"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z" fill="#02343F"></path>
              </svg><span>Back</span></button></div>"
        `)
    })

    test("Should match snapshot - renderSuspended as html OBJECT", async () => {
        const html = await renderSuspended(BackButton, )
        expect(html).toMatchInlineSnapshot(`
          {
            "baseElement": <body>
              <div
                data-v-app=""
                id="__nuxt"
              >
                <!---->
              </div>
              <div>
                <div
                  id="test-wrapper"
                >
                  <button
                    class="flex space-x-1 items-center"
                    id="back-button"
                  >
                    <svg
                      fill="none"
                      height="18"
                      viewBox="0 0 21 18"
                      width="21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z"
                        fill="#02343F"
                      />
                    </svg>
                    <span>
                      Back
                    </span>
                  </button>
                </div>
              </div>
            </body>,
            "container": <div>
              <div
                id="test-wrapper"
              >
                <button
                  class="flex space-x-1 items-center"
                  id="back-button"
                >
                  <svg
                    fill="none"
                    height="18"
                    viewBox="0 0 21 18"
                    width="21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z"
                      fill="#02343F"
                    />
                  </svg>
                  <span>
                    Back
                  </span>
                </button>
              </div>
            </div>,
            "debug": [Function],
            "emitted": [Function],
            "findAllByAltText": [Function],
            "findAllByDisplayValue": [Function],
            "findAllByLabelText": [Function],
            "findAllByPlaceholderText": [Function],
            "findAllByRole": [Function],
            "findAllByTestId": [Function],
            "findAllByText": [Function],
            "findAllByTitle": [Function],
            "findByAltText": [Function],
            "findByDisplayValue": [Function],
            "findByLabelText": [Function],
            "findByPlaceholderText": [Function],
            "findByRole": [Function],
            "findByTestId": [Function],
            "findByText": [Function],
            "findByTitle": [Function],
            "getAllByAltText": [Function],
            "getAllByDisplayValue": [Function],
            "getAllByLabelText": [Function],
            "getAllByPlaceholderText": [Function],
            "getAllByRole": [Function],
            "getAllByTestId": [Function],
            "getAllByText": [Function],
            "getAllByTitle": [Function],
            "getByAltText": [Function],
            "getByDisplayValue": [Function],
            "getByLabelText": [Function],
            "getByPlaceholderText": [Function],
            "getByRole": [Function],
            "getByTestId": [Function],
            "getByText": [Function],
            "getByTitle": [Function],
            "html": [Function],
            "queryAllByAltText": [Function],
            "queryAllByDisplayValue": [Function],
            "queryAllByLabelText": [Function],
            "queryAllByPlaceholderText": [Function],
            "queryAllByRole": [Function],
            "queryAllByTestId": [Function],
            "queryAllByText": [Function],
            "queryAllByTitle": [Function],
            "queryByAltText": [Function],
            "queryByDisplayValue": [Function],
            "queryByLabelText": [Function],
            "queryByPlaceholderText": [Function],
            "queryByRole": [Function],
            "queryByTestId": [Function],
            "queryByText": [Function],
            "queryByTitle": [Function],
            "rerender": [Function],
            "unmount": [Function],
          }
        `)
    })

    test("Should emit when button is clicked", async () => {
        const wrapper = await mountSuspended(BackButton)
        const button = wrapper.find("button")
        await button.trigger("click")

        expect(wrapper.emitted()).toHaveProperty("back")
    })
})