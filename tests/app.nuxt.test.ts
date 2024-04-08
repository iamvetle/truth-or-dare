import { describe, expect, test } from "vitest";
import app from "~/app.vue";
import { mountSuspended } from "@nuxt/test-utils/runtime"
// import { mockNuxtImport } from '@nuxt/test-utils/runtime'


describe("testing the main app", async () => {
    
    
    test("existence", async () => {
        const component = await mountSuspended(app)
        expect(component.html()).toMatchInlineSnapshot(`
          "<div class="bg-[#F0EDCC] w-full min-h-screen pt-12 px-2 flex flex-col mx-auto">
            <div class="space-y-2 w-fit mx-auto">
              <h1 class="text-3xl text-[#02343F] text-center font-bold"> Truth or dare? </h1>
              <div></div>
            </div>
            <div class="w-96 mx-auto mt-10 flex flex-col flex-1 justify-between">
              <div>
                <div class="flex mb-2"><button class="text-sm"> Language: <span class="hover:cursor-pointer text-sm">english</span></button></div>
                <div class="mx-auto bg-white rounded-lg flex items-center justify-start h-64 w-full px-4">
                  <!-- <p>{{ mode }}</p> -->
                  <p class="w-full text-center text-lg">...</p><!-- <p v-if="theQuestion" class="break-words">{{ questionText }}</p> -->
                </div>
                <div class="text-[#02343F] flex justify-between space-x-2 mt-7 text-sm"><button class="flex space-x-1 items-center"><svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9ZM12 0C7.03 0 3 4.03 3 9H0L4 13L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.49 16 9.09 15.51 7.94 14.7L6.52 16.14C8.04 17.3 9.94 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0Z" fill="#02343F"></path>
                    </svg><span>Back</span></button><button class="flex space-x-1 items-center"><span>Forward</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.71C15.68 8.32 15.68 7.69 15.29 7.3L8.71 0.700001C8.32 0.310001 7.69 0.310001 7.3 0.700001C6.91 1.09 6.91 1.72 7.3 2.11L12.17 7H1C0.45 7 0 7.45 0 8C0 8.55 0.45 9 1 9Z" fill="#02343F"></path>
                    </svg></button></div>
              </div>
              <div class="mb-56 buttons mt-14 flex justify-between"><button class="font-medium text-[#50586C] bg-[#DCE2F0] w-40 h-16 rounded-md shadow-sm">Truth</button><button class="font-medium text-[#9000FF] bg-[#FFE8F5] w-40 h-16 rounded-md shadow-sm">Dare</button></div>
            </div><!-- <pre>{{ theQuestion }}</pre> -->
          </div>"
        `)

        console.log(component.html())
    })

})
