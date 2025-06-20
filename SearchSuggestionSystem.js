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


const system = new SearchSuggestionSystem(["havana","Mobile","Fish","Cow","Dove","Joy","Mango","Milk","Moneypot","Monitor","Mousepad"]);
console.log(system.getSuggestions("havana"));
