import { execSync } from 'child_process';

describe('Main', () => {
    it('should return an error for wrong argument', () => {
        const consoleOutput = execSync('node app.js --filtrage="ry"', { encoding: 'utf-8' });
        expect(consoleOutput).toContain(`Please enter a valid argument --filter='' or --count`)
    });

    it('should return an error for missing argument', () => {
        const consoleOutput = execSync('node app.js ', { encoding: 'utf-8' });
        expect(consoleOutput).toContain(`Please enter an argument`)
    });
})