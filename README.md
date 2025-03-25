# Dynamic-Memory-Management-Visualizer
A visualization tool for dynamic memory management techniques like paging, segmentation, and page replacement algorithms

### 🔥 Simulate & Visualize Paging, Segmentation, and Virtual Memory  

![Memory Management Simulation](https://your-image-link.com) *(Replace with actual screenshot/image)*  

---

## 🚀 Overview  
This **Memory Management Simulator** is an interactive tool designed to help users understand how operating systems manage memory using:  

✅ **Paging** (Fixed-size memory blocks, Page Tables, TLB, Page Replacement Algorithms)  
✅ **Segmentation** (Variable-sized memory blocks, Segment Tables, Fragmentation Analysis)  
✅ **Virtual Memory** (Demand Paging, Page Faults, RAM-Disk Swapping)  

🔧 **Features:**  
- Define **custom memory configurations** (RAM size, Page size, Segment details)  
- **Simulate page faults & replacements** (FIFO, LRU, Optimal Algorithm)  
- **Visualize memory allocation** in real-time  
- **Analyze performance metrics** (Hit Ratio, Page Fault Rate, Memory Utilization)  

---

## 🎯 How It Works  

### 1️⃣ Select a Simulation Mode  
- **Paging:** Fixed-size pages, Address Translation, Page Tables  
- **Segmentation:** Variable-size memory blocks, Segment Tables  
- **Virtual Memory:** Page Swapping, Demand Paging, Page Replacement  

### 2️⃣ Configure Memory  
- **Physical Memory Size**  
- **Virtual Memory Size**  
- **Page Size / Segment Details**  
- **Replacement Algorithm (FIFO, LRU, OPT)**  

### 3️⃣ Run the Simulation  
- View **Page Table / Segment Table updates**  
- Track **Page Faults & Replacements**  
- Analyze **Memory Usage & Performance**  

---

## 🎨 Visualization  
✔ **Memory Table:** Displays current state of memory allocation  
✔ **Page Table:** Tracks page mappings and TLB hits/misses  
✔ **Segment Table:** Shows base & limit values of segments  
✔ **Graphical Analysis:** Page Fault Rate, TLB Hit Ratio  

---

## ⚡ Tech Stack  
🔹 **Frontend:** React.js (UI & Interactive Visualization)  
🔹 **Backend:** Python / Node.js (Memory Management Logic)  
🔹 **WebSockets:** Real-time updates  
🔹 **Visualization:** D3.js / Chart.js (Graphs & Memory Tables)  

---

## 📥 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/memory-management-simulator.git
cd memory-management-simulator
```

# Dynamic Memory Management Visualizer

A web-based interactive visualization tool for simulating different memory management techniques, including Paging, Segmentation, and Virtual Memory.

## Features
- **Paging Simulation**: Visualizes memory frames and page replacements using FIFO and LRU algorithms.
- **Segmentation Simulation**: Demonstrates memory allocation based on segments like Code, Stack, Heap, and Data.
- **Virtual Memory Simulation**: Simulates page loading into RAM.
- **Interactive Graphs**: Uses `recharts` for graphical representation.
- **User Configurable**: Allows setting total memory, page size, and replacement algorithms.

## Folder Structure
```
DynamicMMVisualizer/
│-- public/
│-- src/
│   │-- components/
│   │-- pages/
│   │-- styles/
│   │-- simulation.js  # Main simulation logic
│   │-- App.js         # Main entry component
│   │-- index.js       # React entry point
│-- package.json
│-- README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/DynamicMMVisualizer.git
   cd DynamicMMVisualizer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Technologies Used
- React.js
- Tailwind CSS
- Recharts

## Usage
1. Set memory configuration (total memory, page size, replacement algorithm).
2. Click on **Start Paging**, **Start Segmentation**, or **Start Virtual Memory**.
3. View the visualized memory management process.
4. Click **Run All Simulations** to execute all at once.

## Contributing
Feel free to fork this project and submit pull requests with improvements!

## License
This project is open-source and available under the MIT License.

---
💻 **Developed by CodeByAshuu**
