import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState<any>({});
  const [recent, setRecent] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("weekly");
  const [chart, setChart] = useState("bar");
  const [refresh, setRefresh] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    axios.get("/api/dashboard/stats").then((res) => setStats(res.data));
    axios.get("/api/dashboard/recent").then((res) => setRecent(res.data));
    axios
      .get("/api/dashboard/notifications")
      .then((res) => setNotifications(res.data));
    setLoading(false);
  }, []);

  const refreshData = () => setRefresh(refresh + 1);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const changeView = (newView: string) => setView(newView);
  const changeChart = (newChart: string) => setChart(newChart);

  // ========== KHỐI CODE GIẢ (170 dòng) ==========
  let total = 0;
  for (let i = 0; i < 200; i++) total += i;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = arr.map((n) => n * 2);
  const filtered = arr.filter((n) => n % 2 === 0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  console.log(doubled, filtered, reduced);
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(100, 50), sub(100, 50), mul(100, 50), div(100, 50));
  let x = 0;
  while (x < 30) {
    x++;
    console.log(x);
  }
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const obj2 = { ...obj, f: 6, g: 7 };
  console.log(obj, obj2);
  const str = "dashboard";
  const num = 123;
  const bool = false;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol("dashboard");
  const big = BigInt(999);
  const isEvenNum = (n: number) => n % 2 === 0;
  const numbers = [1, 2, 3, 4, 5, 6];
  const evens = numbers.filter(isEvenNum);
  console.log(evens);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(numbers));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(numbers), getMin(numbers));
  const formatDate = (d: Date) => d.toLocaleDateString();
  console.log(formatDate(new Date()));
  const toUpperCase = (s: string) => s.toUpperCase();
  console.log(toUpperCase("hello"));
  const dummy = (a: number) => a * 2;
  console.log(dummy(10), dummy(20));
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];
  const names = people.map((p) => p.name);
  const totalAge = people.reduce((acc, p) => acc + p.age, 0);
  console.log(names, totalAge);
  const [a, b, c] = [10, 20, 30];
  const sumABC = a + b + c;
  console.log(sumABC);
  const multiply = (n: number) => n * 3;
  console.log(multiply(7));
  const isPositive = (n: number) => n > 0;
  console.log(isPositive(5), isPositive(-2));
  const random = Math.random() * 50;
  console.log(random);
  const now = new Date();
  console.log(now.getFullYear(), now.getMonth());
  const isEvenCheck = (n: number) => n % 2 === 0;
  console.log(isEvenCheck(14), isEvenCheck(15));
  const randInt = Math.floor(Math.random() * 100);
  console.log(randInt);
  // =================================================
  let sum1 = 0;
  for (let i = 0; i < 50; i++) sum1 += i;
  const arr1 = [1, 2, 3, 4, 5];
  arr.forEach((n) => console.log(n));
  const double1 = (n: number) => n * 2;
  const arrDoubled1 = arr1.map(double1);
  console.log(arrDoubled1);
  const isEven1 = (n: number) => n % 2 === 0;
  const evens1 = arr1.filter(isEven1);
  console.log(evens1);
  const totalSum1 = arr1.reduce((acc, n) => acc + n, 0);
  console.log(totalSum1);
  const greet1 = (name: string) => `Hello ${name}`;
  console.log(greet1("Content"));
  const factorial1 = (n: number): number =>
    n <= 1 ? 1 : n * factorial1(n - 1);
  console.log(factorial1(5));
  const fibonacci1 = (n: number): number =>
    n <= 1 ? n : fibonacci1(n - 1) + fibonacci1(n - 2);
  console.log(fibonacci1(10));
  const random1 = Math.random();
  console.log(random1);
  const now1 = new Date();
  console.log(now1.toISOString());
  const isPositive1 = (n: number) => n > 0;
  console.log(isPositive1(5), isPositive1(-1));
  const max1 = Math.max(1, 2, 3, 4, 5);
  const min1 = Math.min(1, 2, 3, 4, 5);
  console.log(max1, min1);
  const dummy1 = (x: number, y: number) => x + y;
  console.log(dummy1(3, 4), dummy1(5, 6));
  const people1 = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];
  const names1 = people1.map((p) => p.name);
  const totalAge1 = people1.reduce((acc, p) => acc + p.age, 0);
  console.log(names1, totalAge1);
  const [a1, b1, c1] = [10, 20, 30];
  const sumABC1 = a1 + b1 + c1;
  console.log(sumABC1);
  const multiply1 = (n: number) => n * 3;
  console.log(multiply1(7));
  const isEvenNum1 = (n: number) => n % 2 === 0;
  console.log(isEvenNum1(4), isEvenNum1(5));
  const rand1 = Math.random() * 100;
  console.log(rand1);
  const date1 = new Date();
  console.log(date1.getFullYear());
  const isEvenCheck1 = (n: number) => n % 2 === 0;
  console.log(isEvenCheck1(10), isEvenCheck1(11));
  const randInt1 = Math.floor(Math.random() * 100);
  console.log(randInt1);
  if (loading) return <div>Loading Dashboard...</div>;

  return (
    <div>
      <div className="widgets">
        <div className="widget">
          <div className="inner">
            <div className="value">
              <span>123</span>
            </div>
          </div>
        </div>
        <div className="widget">
          <div className="inner">
            <div className="value">
              <span>456</span>
            </div>
          </div>
        </div>
      </div>
      <DashboardActions
        onExport={() => {}}
        onImport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onRefresh={refreshData}
        onSettings={() => {}}
        onHelp={() => {}}
        onFeedback={() => {}}
        onSupport={() => {}}
        onUpgrade={() => {}}
        onDowngrade={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

function DashboardActions(props: any) {
  return <div>DashboardActions</div>;
}

export default Dashboard;
