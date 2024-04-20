# Project

Project finished

---

### Tests

The tests are using the '@nuxt/test-utils/runtime' and 'vitest'. Also a few tests that check for emits/events use '@testing-library/vue'.

I have unit tests for all/most components. I test for events. I am following best testing practices.

I also have a end-to-end test with '@nuxt/test-utils/e2e' and playwright.

**Coverage report from v8**

File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------------------------------------
All files                 |   76.29 |    69.23 |   66.66 |   76.29 | 
 truth-or-dare            |   70.42 |    57.89 |      60 |   70.42 | 
  app.vue                 |   69.11 |    52.94 |      60 |   69.11 | 104-111,119-124,132-153,160-166,170-177,179-190
  nuxt.config.ts          |     100 |      100 |     100 |     100 | 
 truth-or-dare/components |     100 |      100 |     100 |     100 | 
  BackButton.vue          |     100 |      100 |     100 |     100 | 
  BackSVGIcon.vue         |     100 |      100 |     100 |     100 | 
  DareButton.vue          |     100 |      100 |     100 |     100 | 
  ForwardButton.vue       |     100 |      100 |     100 |     100 | 
  ForwardSVGIcon.vue      |     100 |      100 |     100 |     100 | 
  Language.vue            |     100 |      100 |     100 |     100 | 
  TheQuestion.vue         |     100 |      100 |     100 |     100 | 
  TruthButton.vue         |     100 |      100 |     100 |     100 | 
 truth-or-dare/utils      |   33.33 |      100 |       0 |   33.33 | 
  fetchDareQuestions.ts   |   33.33 |      100 |       0 |   33.33 | 7-18
  fetchTruthQuestions.ts  |   33.33 |      100 |       0 |   33.33 | 7-18

---

### Dockerization

I am able to dockerize the app. I have a Dockerfile that works, and that I can use to dockerize the application. It is possible for me to deploy it on Google Cloud. (I think I have it deployed on google cloud).

---

### Production

I can generate the app as a static website, and deploy it on for example vercel. (Which I think I have done)