Object.defineProperty(
    String.prototype,
    'toJadenCase',
    {value :
        function toJadenCase() {
            const words = this.split ('');
            const jadenCaseWords = words.map(word => {
                if (word.length === 0) {
                    return '';
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });
            return jadenCaseWords.join('');
        }
    }
)