

/**
 * Maps the data to add a count of people for each country and updates the people array for each country.
 *
 * @param {Array} data - The array of country objects
 * @return {Array} - The updated array of country objects
 */
export default function countCountry(data) {
    const countries = data.map(country => ({
        ...country,
        name: `${country.name} [${country.people ? country.people.length : 0}]`,
        people: countPeople(country.people)
    }))
    return countries
}

/**
 * Maps the array of people to update their names with the count of animals they own.
 *
 * @param {Array} people - The array of people
 * @return {Array} The updated array of people with modified names
 */
function countPeople(people = []) {
    return people.map((person) => ({
        ...person,
        name: `${person.name} [${person.animals ? person.animals.length : 0}]`,
    }))
}
