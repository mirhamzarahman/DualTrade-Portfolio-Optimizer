/**
 * DualTrade Portfolio Optimizer
 *
 * Calculates the maximum possible return from
 * up to two sequential investment transactions.
 *
 * Concept:
 * Dynamic Programming State Optimization
 */

function calculateMaximumReturn(stockPrices) {
    // Best result after first buying action
    let firstPurchase = -Infinity;

    // Best profit after first selling action
    let firstSale = 0;

    // Best result after second buying action
    let secondPurchase = -Infinity;

    // Best final profit after second selling action
    let secondSale = 0;

    for (const currentPrice of stockPrices) {
        // First investment decision
        firstPurchase = Math.max(
            firstPurchase,
            -currentPrice
        );

        // Complete first investment
        firstSale = Math.max(
            firstSale,
            firstPurchase + currentPrice
        );

        // Reinvest profit from first investment
        secondPurchase = Math.max(
            secondPurchase,
            firstSale - currentPrice
        );

        // Complete second investment
        secondSale = Math.max(
            secondSale,
            secondPurchase + currentPrice
        );
    }

    return secondSale;
}


// Example portfolio analysis

const marketHistory = [3, 3, 5, 0, 0, 3, 1, 4];

const maximumReturn = calculateMaximumReturn(marketHistory);

console.log(
    `Maximum Portfolio Return: ${maximumReturn}`
);
