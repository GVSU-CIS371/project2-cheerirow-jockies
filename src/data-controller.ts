import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    const mainDiv = document.getElementById("main-container");
    const parser = new DOMParser();

    prods.forEach(product => {
        const storeItem = generateProductHTML(product);
        const parsed = parser.parseFromString(storeItem, "text/html");        
        mainDiv?.appendChild(parsed?.querySelector('.store-item')!);
    });
}

function getByCategory(category: string): void {
    console.log(document.getElementById(category));

}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };