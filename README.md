# 📈 DualTrade Portfolio Optimizer

A dynamic investment analysis engine that helps determine the maximum possible return from sequential trading decisions while allowing up to two complete buy-and-sell cycles.

---

## 🚀 Project Overview

**DualTrade Portfolio Optimizer** is a conceptual financial analysis system designed to simulate investment planning. It evaluates historical stock prices and identifies the most profitable sequence of investment actions.

The project demonstrates how algorithmic decision-making can be applied to real-world portfolio optimization problems using efficient state management and dynamic programming.

---

## 🌍 Real-World Conceptual Scenario

Investment platforms often need systems that analyze market history and recommend optimized trading strategies.

This project represents a simplified portfolio assistant that:

- Tracks possible buying opportunities
- Calculates selling opportunities
- Optimizes multiple investment cycles
- Reduces unnecessary computation during analysis

---

## 🧠 Core Concept

The system uses **state-based dynamic programming** to maintain the best possible financial outcome after each investment stage.

Instead of checking every possible combination of trades, the optimizer continuously updates the best decision state while scanning market data once.

---

## ⚙️ How the System Works

The optimizer maintains four financial states:

| State | Description |
|---|---|
| First Purchase | Best balance after the first investment |
| First Sale | Maximum profit after completing first trade |
| Second Purchase | Best balance after reinvesting profit |
| Second Sale | Maximum final return after second trade |

Each stock price updates these states and improves the overall strategy.

---

## 🔍 Algorithm Used

### Dynamic Programming with State Optimization

The algorithm tracks:

```
firstBuy
firstSell
secondBuy
secondSell
```

Each state stores the best possible result at that point.

---

## 🪜 Step-by-Step Logic

1. Initialize four investment states.
2. Scan stock prices from beginning to end.
3. Decide whether buying today improves the first investment.
4. Decide whether selling today increases first profit.
5. Use earned profit to calculate a second investment.
6. Calculate the best final selling opportunity.
7. Return the highest achievable portfolio value.

---

## ✨ Key Features

- 📊 Maximum return calculation
- 🔄 Supports two sequential investments
- ⚡ Single-pass market analysis
- 🧠 Dynamic programming optimization
- 💾 Constant memory usage
- 📈 Real-world portfolio simulation concept

---

## 📌 Example Use Case

### Market Data

```text
Prices:
[3, 3, 5, 0, 0, 3, 1, 4]
```

### Investment Strategy

```
Buy at 0 → Sell at 3
Profit = 3

Buy at 1 → Sell at 4
Profit = 3
```

### Final Output

```text
Maximum Return = 6
```

---

## ⏱️ Complexity Analysis

| Metric | Value |
|---|---|
| Time Complexity | O(n) |
| Space Complexity | O(1) |

The system processes each market price only once while maintaining constant memory.

---

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Dynamic Programming
- Algorithmic State Management
- Node.js Runtime

---

## 📁 Project Structure

```
DualTrade-Portfolio-Optimizer/
│
├── src/
│   └── portfolioOptimizer.js
│
├── README.md
│
├── package.json
│
└── LICENSE
```

---

## ▶️ How to Run

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/dualtrade-portfolio-optimizer.git
```

### Navigate into Project

```bash
cd dualtrade-portfolio-optimizer
```

### Run the Application

```bash
node src/portfolioOptimizer.js
```

---

## 📚 Learning Outcomes

Through this project, I explored:

- Applying dynamic programming to practical problems
- Designing state-based optimization systems
- Improving algorithm efficiency
- Converting mathematical logic into real software concepts
- Managing complex decision processes with minimal memory usage

---

## 🔮 Future Improvements

Possible enhancements:

- Add real-time stock market API integration
- Support unlimited transaction modes
- Include risk analysis metrics
- Build visualization dashboards
- Add AI-based investment prediction models

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.
