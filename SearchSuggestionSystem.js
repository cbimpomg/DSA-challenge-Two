class SearchSuggestionSystem {
    constructor(products) {
        this.products = products.slice().sort();
    }

    getSuggestions(searchWord) {
        const result = [];
        let prefix = '';
        for (let i = 0; i < searchWord.length; i++) {
            prefix += searchWord[i];
            const suggestions = [];
            for (let product of this.products) {
                if (product.startsWith(prefix)) {
                    suggestions.push(product);
                    if (suggestions.length === 3) break;
                }
            }
            result.push(suggestions);
        }
        return result;
    }
}

// Example usage:
// const system = new SearchSuggestionSystem(["mobile","mouse","moneypot","monitor","mousepad"]);
// console.log(system.getSuggestions("mouse"));

module.exports = SearchSuggestionSystem;