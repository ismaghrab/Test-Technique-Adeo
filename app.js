import filterPeopleFromCountry from './src/filter/filter.js';
import countCountry from './src/count/count.js';
import data from './src/data/data.js';


main()

function main() {
    const argvcommand = process.argv.slice(2)
    const option = argvcommand[0]
    switch (true) {
        case !option:
            console.log("Please enter an argument");
            break;
        case option.startsWith("--filter="):
            const filter = option.split('=')[1];
            if (filter == "") {
                console.log('Their is no result for ""')
                return
            }
            if (isNaN(filter)) {
                console.log(JSON.stringify(filterPeopleFromCountry(filter.toLowerCase(), data), null, 2))
                return
            } else {
                console.log("Please enter a valid argument for filter");
            }
            break;
        case option == "--count":
            console.log(JSON.stringify(countCountry(data), null, 2));
            break;
        default:
            console.log("Please enter a valid argument --filter='' or --count");
            break;
    }
}
