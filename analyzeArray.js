export default function analyzeArray (input) {
    
    function findAverage() {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input[i];
        };
        return Math.floor(sum / input.length);
    }

    
    return {
        average: findAverage(),
        min: 'test',
        max: 'test',
        length: 'test'
    }
}