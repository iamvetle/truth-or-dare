import { defineVitestConfig
} from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        // dont know why this is recommended
        globals:true,
        // alias: {
        //     "/":"~/public"
        // }
    },
    
//  any custom Vitest config you require
})