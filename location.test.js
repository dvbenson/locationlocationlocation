const updateRemoteStudents = require('../location.js');

describe('updateRemoteStudents', () => {
    test('function passes arrays', () => {
      
      const testArray = [];
      
      expect(typeof updateRemoteStudents(testArray)).toBe('object');
      expect(Array.isArray(updateRemoteStudents(testArray))).toBe(true);
    })
    
    test('passes an array of objects', () => {
     
      const testArray = [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Tao', age: 47, location: 'manchester' }
      ];
      expect(updateRemoteStudents(testArray)).toEqual([
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Tao', age: 47, location: 'manchester' }
      ]);
    })
    
    test('takes an array of objects and returns it with location added where missing', () => {

      const testArray = [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22 },
        { name: 'Tao', age: 47, location: 'manchester' }
      ];
      expect(updateRemoteStudents(testArray)).toEqual([
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22, location: 'remote' },
        { name: 'Tao', age: 47, location: 'manchester' }
      ]);
    })
    
    test('the function should not mutate the original array', () => {
      

      const testArray = [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22 },
        { name: 'Tao', age: 47, location: 'manchester' }
        ];
      const newOutput = [
        { name: 'Hypatia', age: 31, location: 'leeds' },
        { name: 'Ramanujan', age: 22 },
        { name: 'Tao', age: 47, location: 'manchester' }
        ];

      expect(updateRemoteStudents(testArray)).not.toBe(newOutput);
    })
    
})


