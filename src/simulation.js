import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const MemoryManagementSim = () => {
  const [memoryConfig, setMemoryConfig] = useState({
    totalMemory: 128,
    pageSize: 4,
    frames: Array(256).fill(null),
    segments: [],
    replacementAlgorithm: "FIFO",
  });

  const [pageFaults, setPageFaults] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState([]);
  const [segmentUsage, setSegmentUsage] = useState([]);
  const [virtualMemory, setVirtualMemory] = useState([]);
  const [pageHits, setPageHits] = useState(0); // New state for page hits
  const [executionTime, setExecutionTime] = useState(0);

  const handleConfigChange = (e) => {
    setMemoryConfig({
      ...memoryConfig,
      [e.target.name]: Number(e.target.value),
    });
  };

  const startPagingSimulation = () => {
    let startTime = performance.now();
    let newFrames = [];
    let faults = 0;
    let hits = 0;
    let recentPages = [];

    for (let i = 0; i < memoryConfig.frames.length; i++) {
      let page = Math.floor(Math.random() * 100);

      if (newFrames.includes(page)) {
        hits++; // counting as a hit
      } else {
        faults++;
        if (newFrames.length >= memoryConfig.frames.length) {
          if (memoryConfig.replacementAlgorithm === "FIFO") {
            newFrames.shift();
          } else if (memoryConfig.replacementAlgorithm === "LRU") {
            recentPages.shift();
          }
        }
        newFrames.push(page);
      }

      if (memoryConfig.replacementAlgorithm === "LRU") {
        recentPages = newFrames.filter(Boolean);
      }
    }

    let endTime = performance.now();
    let executionDuration = (endTime - startTime).toFixed(2);

    setMemoryUsage(newFrames.map((frame, index) => ({ index, value: frame ?? 0 })));
    setPageFaults(faults);
    setPageHits(hits);
    setExecutionTime(executionDuration);
  };


  const startSegmentationSimulation = () => {
    let segments = [
      { name: "Code", value: 200 },
      { name: "Stack", value: 100 },
      { name: "Heap", value: 150 },
      { name: "Data", value: 150 },
    ];
    setSegmentUsage(segments);
  };

  const startVirtualMemorySimulation = () => {
    let vm = Array(10).fill(null).map((_, index) => ({ page: index, loaded: Math.random() > 0.5 ? 1 : 0 }));
    setVirtualMemory(vm);
  };
  

  const runAllSimulations = () => {
    startPagingSimulation();
    startSegmentationSimulation();
    startVirtualMemorySimulation();
  };
};

export default MemoryManagementSim;

document.getElementById("root").innerHTML = "<h1>Hello, This is OS Assignment!</h1>";
