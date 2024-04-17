export default function analyzeArray (input) {
    
    function findAverage() {
        let sum = 0;
        for (let i = 0; i < input.length; i++) {
            sum += input[i];
        };
        return Math.floor(sum / input.length);
    }

    function findMinMax () {
        let min = input[0];
        let max = input[0];
        for (let i = 1; i < input.length; i++) {
            if (input[i] < min) {
                min = input[i];
            } else if (input[i] > max) {
                max = input[i];
            }
        };
        return {min, max};
    }

    
    return {
        average: findAverage(),
        min: findMinMax().min,
        max: findMinMax().max,
        length: 'test'
    }
}