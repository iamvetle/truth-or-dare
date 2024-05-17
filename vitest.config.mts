import { defineVitestConfig
} from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        // dont know why this is recommended
        globals:true,
        exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*', '**/play-tests/**' ]
        // alias: {
        //     "/":"~/public"
        // }
    },
    
//  any custom Vitest config you require
})