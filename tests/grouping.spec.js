import{test, except} from '@playwright/test'

test.beforeAll(async()=>{
console.log('This is before all hooks')
})

test.afterAll(async()=>{
    console.log('This is after all hooks')
    })

test.beforeEach(async()=>{
    console.log('This is before each hooks')
    })


test.afterEach(async()=>{
    console.log('This is after each hooks')
    })

test.describe.skip('Grouping1',()=>{
    test('Test1',async({page})=>{
        console.log('test1.....')
    })
    test('Test2',async({page})=>{
        console.log('test1.....')
    })
})

test.describe('Grouping2',()=>{
    test('Test3',async({page})=>{
        console.log('test3.....')
    })
    test('Test4',async({page})=>{
        console.log('test4.....')
    })
})