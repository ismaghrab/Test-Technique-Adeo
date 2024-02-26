import { execSync } from 'child_process';

describe('Filter End to end test ', () => {

    it('should return correct data for filter=ry', () => {
        const consoleOutput = execSync('node app.js --filter="ry"', { encoding: 'utf-8' });
        expect(consoleOutput).toContain('[\n' +
            '  {\n' +
            '    "name": "Uzuzozne",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Lillie Abbott",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "John Dory"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Satanwi",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Anthony Bruno",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Oryx"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            ']')
    });

    it('should return correct data for filter=RY in uppercase', () => {
        const consoleOutput = execSync('node app.js --filter="RY"', { encoding: 'utf-8' });
        expect(consoleOutput).toContain('[\n' +
            '  {\n' +
            '    "name": "Uzuzozne",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Lillie Abbott",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "John Dory"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  },\n' +
            '  {\n' +
            '    "name": "Satanwi",\n' +
            '    "people": [\n' +
            '      {\n' +
            '        "name": "Anthony Bruno",\n' +
            '        "animals": [\n' +
            '          {\n' +
            '            "name": "Oryx"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    ]\n' +
            '  }\n' +
            ']')
    });

    it('should return an empty array if filter doesnt match', () => {
        const consoleOutput = execSync('node app.js --filter="xyz"', { encoding: 'utf-8' });
        expect(consoleOutput).toContain("Sorry, theirs is no animals include theirs name 'xyz'")
    });

    it('should return an error for empty  filter ', () => {
        const consoleOutput = execSync('node app.js --filter=""', { encoding: 'utf-8' });
        expect(consoleOutput).toContain('Their is no result for ""')
    }); 
    it('should return an error if filter is a number ', () => {
        const consoleOutput = execSync('node app.js --filter="5"', { encoding: 'utf-8' });
        expect(consoleOutput).toContain('Please enter a valid argument for filter')
    });
})