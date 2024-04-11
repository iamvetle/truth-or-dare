import { test, describe, expect, assert, expectTypeOf } from 'vitest';
import { fetchDareQuestions } from './fetchDareQuestions';

describe('fetchDareQuestions', () => {
    
    test('Should be (the function) defined', () => {
        expect(fetchDareQuestions).toBeDefined()
    })
    test('Should not throw an array', async () => {
        expect(fetchDareQuestions).not.toThrow()
    })
    test('Should return an array', async () => {
        const response = await fetchDareQuestions()
        expectTypeOf(response).toBeArray()
    })
    
    // test('Should have a length/some items (over three)', async () => {
    //     const response = await fetchDareQuestions()
    //     expect(response.length).toBeGreaterThan(3)        
    // })
})