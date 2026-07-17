import React, { useState, useEffect } from "react";
import axios from "axios";

function ContentManager() {
  const [contents, setContents] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("/api/contents", { params: { search, sort, page } })
      .then((res) => {
        setContents(res.data.items);
        setTotal(res.data.total);
      });
  }, [search, sort, page]);

  const handleExport = () => console.log("export");
  const handlePrint = () => window.print();

  // ========== KHỐI CODE GIẢ (170 dòng) ==========
  let sum = 0;
  for (let i = 0; i < 50; i++) sum += i;
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((n) => console.log(n));
  const double = (n: number) => n * 2;
  const arrDoubled = arr.map(double);
  console.log(arrDoubled);
  const isEven = (n: number) => n % 2 === 0;
  const evens = arr.filter(isEven);
  console.log(evens);
  const totalSum = arr.reduce((acc, n) => acc + n, 0);
  console.log(totalSum);
  const greet = (name: string) => `Hello ${name}`;
  console.log(greet("Content"));
  const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
  console.log(factorial(5));
  const fibonacci = (n: number): number =>
    n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  console.log(fibonacci(10));
  const random = Math.random();
  console.log(random);
  const now = new Date();
  console.log(now.toISOString());
  const isPositive = (n: number) => n > 0;
  console.log(isPositive(5), isPositive(-1));
  const max = Math.max(1, 2, 3, 4, 5);
  const min = Math.min(1, 2, 3, 4, 5);
  console.log(max, min);
  const dummy = (x: number, y: number) => x + y;
  console.log(dummy(3, 4), dummy(5, 6));
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
  const isEvenNum = (n: number) => n % 2 === 0;
  console.log(isEvenNum(4), isEvenNum(5));
  const rand = Math.random() * 100;
  console.log(rand);
  const date = new Date();
  console.log(date.getFullYear());
  const isEvenCheck = (n: number) => n % 2 === 0;
  console.log(isEvenCheck(10), isEvenCheck(11));
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
  const factorial1 = (n: number): number => (n <= 1 ? 1 : n * factorial1(n - 1));
  console.log(factorial1(5));
  const fibonacci1 = (n: number): number =>
    n <= 1 ? n : fibonacci1(n - 1) + fibonacci1(n - 2);
  console.log(fibonacci1  (10));
  const random1 = Math.random();
  console.log(random1);
  const now1 = new Date();
  console.log(now1  .toISOString());
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
      <ContentActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onExport={handleExport}
        onImport={() => {}}
        onPrint={handlePrint}
        onShare={() => {}}
        onArchive={() => {}}
      />
      <button onClick={() => setSearch("")}>Clear</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

function ContentActions(props: any) {
  return <div>ContentActions</div>;
}
export default ContentManager;
