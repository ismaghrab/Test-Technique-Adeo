import filterPeopleFromCountry from '../../src/filter/filter';

describe('Filtering function', () => {
  const testData = [
    {
      name: 'Country1',
      people: [
        { name: 'Person1', animals: [{ name: 'Cat' }, { name: 'Dog' },{name: 'Oryx'}] },
        { name: 'Person2', animals: [{ name: 'Bird' }, { name: 'Rabbit' }] }
      ]
    },
    {
      name: 'Country2',
      people: [
        { name: 'Person3', animals: [{ name: 'Lion' }, { name: 'Tiger' },{name: 'John Dory'}] },
        { name: 'Person4', animals: [{ name: 'Elephant' }, { name: 'Snake' }] }
      ]
    }
  ];

  it('should filter animals containing "ry"', () => {
    const expectResultRy = [
      {
        "name": "Country1",
        "people": [
          {
            "name": "Person1",
            "animals": [
              {
                "name": "Oryx"
              }
            ]
          }
        ]
      },
      {
        "name": "Country2",
        "people": [
          {
            "name": "Person3",
            "animals": [
              {
                "name": "John Dory"
              }
            ]
          }
        ]
      }
    ]
    const filteredData = filterPeopleFromCountry('ry', testData);
    expect(filteredData).toEqual(expectResultRy);
  });
  it('should filter animals containing "og"', () => {
    const expectedDataOg = [
      {
        name: 'Country1',
        people: [
          { name: 'Person1', animals: [{ name: 'Dog' }] }
        ]
      }
    ]
    const filteredData = filterPeopleFromCountry('og', testData);
    expect(filteredData).toEqual(expectedDataOg);
  });

  it('should return all data for empty filter', () => {
    const filteredData = filterPeopleFromCountry('', testData);
    expect(filteredData).toEqual(testData);
  });

  it('should return empty array if filter does not match any animal', () => {
    const filteredData = filterPeopleFromCountry('xyz', testData);
    expect(filteredData).toEqual([]);
  });


});
