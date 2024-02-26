

/**
 * Filters people from a country based on a given filter.
 *
 * @param {function} filter - The filter function to apply.
 * @return {Array} An array of countries with filtered people.
 */
export default function filterPeopleFromCountry(filter, data) {
    const countries = data.reduce((country, c) => {
        const people = filterAnimalsFromPeople(filter, c.people)
        if (people.length > 0) {
            country.push({ ...c, people })
        }
        return country
    }, [])
    return countries
}

/**
 * Reduces the array of people to a new array containing only the people who have animals that match the given filter.
 *
 * @param {string} filter - The filter to apply on the animal names.
 * @param {Array} people - The array of people with their animals. Defaults to an empty array.
 * @return {Array} The new array containing the filtered people and their matching animals.
 */
function filterAnimalsFromPeople(filter, people = []) {
    return people.reduce((arr, p) => {
        const animals = (p.animals).filter(
            animal => new RegExp(filter).test(animal.name)
        );
        if (animals.length > 0) {
            arr.push({ ...p, animals })
        }
        return arr
    }, [])
}

