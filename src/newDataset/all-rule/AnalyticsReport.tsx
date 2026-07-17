import React, { useState } from "react";

function AnalyticsReport() {
  const [data, setData] = useState<any[]>([]);
  const [period, setPeriod] = useState("weekly");
  const [metric, setMetric] = useState("revenue");
  const [chartType, setChartType] = useState("bar");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReport = () => {
    setLoading(true);
    fetch(`/api/report?period=${period}&metric=${metric}`)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  // ========== KHỐI CODE GIẢ (170 dòng) ==========
  const dummy1 = 1;
  const dummy2 = 2;
  const dummy3 = 3;
  const dummy4 = 4;
  const dummy5 = 5;
  const dummy6 = 6;
  const dummy7 = 7;
  const dummy8 = 8;
  const dummy9 = 9;
  const dummy10 = 10;
  const dummy11 = 11;
  const dummy12 = 12;
  const dummy13 = 13;
  const dummy14 = 14;
  const dummy15 = 15;
  const dummy16 = 16;
  const dummy17 = 17;
  const dummy18 = 18;
  const dummy19 = 19;
  const dummy20 = 20;
  const dummy21 = 21;
  const dummy22 = 22;
  const dummy23 = 23;
  const dummy24 = 24;
  const dummy25 = 25;
  const dummy26 = 26;
  const dummy27 = 27;
  const dummy28 = 28;
  const dummy29 = 29;
  const dummy30 = 30;
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(1, 2), sub(3, 4), mul(5, 6), div(7, 8));
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = arr.filter((n) => n % 2 === 0);
  const odd = arr.filter((n) => n % 2 !== 0);
  const doubled = arr.map((n) => n * 2);
  const tripled = arr.map((n) => n * 3);
  console.log(even, odd, doubled, tripled);
  let counter = 0;
  for (let i = 0; i < 50; i++) counter += i;
  while (counter < 100) counter++;
  if (counter > 50) console.log("counter > 50");
  else console.log("counter <= 50");
  switch (counter % 3) {
    case 0:
      console.log("divisible by 3");
      break;
    case 1:
      console.log("remainder 1");
      break;
    default:
      console.log("remainder 2");
  }
  const greet = (name: string) => `Hello, ${name}`;
  console.log(greet("Analytics"));
  const isEvenNum = (n: number) => n % 2 === 0;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evens = numbers.filter(isEvenNum);
  const odds = numbers.filter((n) => !isEvenNum(n));
  console.log(evens, odds);
  const addOne = (n: number) => n + 1;
  const incremented = numbers.map(addOne);
  console.log(incremented);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(numbers));
  const multiplyAll = (nums: number[], factor: number) =>
    nums.map((n) => n * factor);
  console.log(multiplyAll(numbers, 3));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(numbers), getMin(numbers));
  const dummyFunction1 = () => console.log("dummy1");
  const dummyFunction2 = () => console.log("dummy2");
  const dummyFunction3 = () => console.log("dummy3");
  dummyFunction1();
  dummyFunction2();
  dummyFunction3();
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const obj2 = { ...obj, f: 6, g: 7 };
  console.log(obj, obj2);
  const str = "hello world";
  const upper = str.toUpperCase();
  const lower = str.toLowerCase();
  const length = str.length;
  console.log(upper, lower, length);
  const isPositive = (n: number) => n > 0;
  console.log(isPositive(10), isPositive(-5));
  const random = Math.random() * 100;
  const rounded = Math.round(random);
  console.log(random, rounded);
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  console.log(year, month, day);
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];
  const names = people.map((p) => p.name);
  const totalAge = people.reduce((acc, p) => acc + p.age, 0);
  console.log(names, totalAge);
  const [x, y, z] = [10, 20, 30];
  const sumXYZ = x + y + z;
  console.log(sumXYZ);
  const multiplyByTwo = (n: number) => n * 2;
  const result = multiplyByTwo(5);
  console.log(result);
  const isEvenCheck = (n: number) => n % 2 === 0;
  console.log(isEvenCheck(4), isEvenCheck(5));
  const randInt = Math.floor(Math.random() * 100);
  console.log(randInt);
  const dateStr = new Date().toISOString();
  console.log(dateStr);
  // ===============================================

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>Nesting 6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportActions
        onExport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onRefresh={() => {}}
        onSave={() => {}}
        onLoad={() => {}}
        onDelete={() => {}}
        onSettings={() => {}}
      />
      <button onClick={() => fetchReport()}>Fetch</button>
      <button onClick={() => setPeriod("monthly")}>Monthly</button>
      <select onChange={(e) => setPeriod(e.target.value)}>
        <option value="weekly">Weekly</option>
      </select>
      <input onChange={(e) => setMetric(e.target.value)} />
    </div>
  );
}

function ReportActions(props: any) {
  return <div>ReportActions</div>;
}
export default AnalyticsReport;
