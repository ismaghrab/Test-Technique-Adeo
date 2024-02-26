import countCountry from '../../src/count/count.js';

const testData = [
  {
    name: 'Country1',
    people: [
      { name: 'Person1', animals: [{ name: 'Cat' }, { name: 'Dog' }] },
      { name: 'Person2', animals: [{ name: 'Bird' }, { name: 'Rabbit' }] }
    ]
  },
  {
    name: 'Country2',
    people: [
      { name: 'Person3', animals: [{ name: 'Lion' }, { name: 'Tiger' }] },
      { name: 'Person4', animals: [{ name: 'Elephant' }, { name: 'Snake' }] }
    ]
  }
];
describe('Counting function', () => {

  it('should count people and animals in each country', () => {
    const countedData = countCountry(testData);
    expect(countedData).toEqual([
      {
        name: 'Country1 [2]',
        people: [
          { name: 'Person1 [2]', animals: [{ name: 'Cat' }, { name: 'Dog' }] },
          { name: 'Person2 [2]', animals: [{ name: 'Bird' }, { name: 'Rabbit' }] }
        ]
      },
      {
        name: 'Country2 [2]',
        people: [
          { name: 'Person3 [2]', animals: [{ name: 'Lion' }, { name: 'Tiger' }] },
          { name: 'Person4 [2]', animals: [{ name: 'Elephant' }, { name: 'Snake' }] }
        ]
      }
    ]);
  });

  it('should return empty array for empty data', () => {
    const countedData = countCountry([]);
    expect(countedData).toEqual([]);
  });

  it('should append counts even if there is only one person in each country', () => {
    const testDataWithSinglePerson = [
      {
        name: 'Country1',
        people: [{ name: 'Person1', animals: [{ name: 'Cat' }] }]
      },
      {
        name: 'Country2',
        people: [{ name: 'Person2', animals: [{ name: 'Dog' }] }]
      }
    ];
    const countedData = countCountry(testDataWithSinglePerson);
    expect(countedData).toEqual([
      {
        name: 'Country1 [1]',
        people: [{ name: 'Person1 [1]', animals: [{ name: 'Cat' }] }]
      },
      {
        name: 'Country2 [1]',
        people: [{ name: 'Person2 [1]', animals: [{ name: 'Dog' }] }]
      }
    ]);
  });
  it('should append counts even if there is no person in country', () => {
    const testDataWithSinglePerson = [
      {
        name: 'Country1',
        people: []
      },
      {
        name: 'Country2',
        people: [{ name: 'Person2', animals: [{ name: 'Dog' }] }]
      }
    ];
    const countedData = countCountry(testDataWithSinglePerson);
    expect(countedData).toEqual([
      {
        name: 'Country1 [0]',
        people : []
      },
      {
        name: 'Country2 [1]',
        people: [{ name: 'Person2 [1]', animals: [{ name: 'Dog' }] }]
      }
    ]);
  });

  it('should append counts even if there is no animal in people', () => {
    const testDataWithSinglePerson = [
      {
        name: 'Country1',
        people: []
      },
      {
        name: 'Country2',
        people: [{ name: 'Person2' }]
      }
    ];
    const countedData = countCountry(testDataWithSinglePerson);
    expect(countedData).toEqual([
      {
        name: 'Country1 [0]',
        people : []
      },
      {
        name: 'Country2 [1]',
        people: [{ name: 'Person2 [0]'}]
      }
    ]);
  });


});
