import { Product, products } from "./data.ts";

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
    if (!mainDiv) {
        console.error("Main container not found");
        return;
    }

    mainDiv.innerHTML = ""; // Clear existing content

    prods.forEach(product => {
        const storeItemHTML = generateProductHTML(product);
        mainDiv.innerHTML += storeItemHTML;
    });
}

function getByCategory(category: string): void {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    const filteredProducts = products.filter(product => product.rating > minRating);
    renderProducts(filteredProducts);
}

export { renderProducts, getByCategory, getByRating };