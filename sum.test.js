const sum = require('./sum')
test('Add numbers',()=>{
    expect(sum(1,3)).toBe(4)
})