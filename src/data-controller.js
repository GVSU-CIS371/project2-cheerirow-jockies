"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.renderProducts = renderProducts;
exports.getByCategory = getByCategory;
exports.getByRating = getByRating;
var data_1 = require("./data");
Object.defineProperty(exports, "products", { enumerable: true, get: function () { return data_1.products; } });
function generateProductHTML(product) {
    return "<div class=\"store-item\">\n              <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" />\n              <p>").concat(product.name, "</p>\n              <p>").concat(product.description, "</p>\n              <span>").concat(product.rating, "/5</span><span>$").concat(product.price, "</span><span>stock ").concat(product.stock, "</span>\n            </div>");
}
function renderProducts(prods) {
    var mainDiv = document.getElementById("main-container");
    if (!mainDiv) {
        console.error("Main container not found");
        return;
    }
    mainDiv.innerHTML = ""; // Clear existing content
    prods.forEach(function (product) {
        var storeItemHTML = generateProductHTML(product);
        mainDiv.innerHTML += storeItemHTML;
    });
}
function getByCategory(category) {
    var filteredProducts = data_1.products.filter(function (product) { return product.category === category; });
    renderProducts(filteredProducts);
}
function getByRating(minRating) {
    var filteredProducts = data_1.products.filter(function (product) { return product.rating > minRating; });
    renderProducts(filteredProducts);
}
