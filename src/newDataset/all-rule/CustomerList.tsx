import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomerList() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get("/api/customers", { params: { search, filter, sort, page } })
      .then((res) => setCustomers(res.data))
      .finally(() => setLoading(false));
  }, [search, filter, sort, page]);

  // ========== KHỐI CODE GIẢ (170 dòng) ==========
  let total = 0;
  for (let i = 0; i < 100; i++) total += i;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = arr.map((n) => n * 2);
  const filtered = arr.filter((n) => n % 2 === 0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  console.log(doubled, filtered, reduced);
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(20, 10), sub(20, 10), mul(20, 10), div(20, 10));
  let x = 0;
  while (x < 25) {
    x++;
    console.log(x);
  }
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const obj2 = { ...obj, f: 6, g: 7 };
  console.log(obj, obj2);
  const str = "customer";
  const num = 100;
  const bool = false;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol("customer");
  const big = BigInt(555);
  const toLower = (s: string) => s.toLowerCase();
  console.log(toLower("CUSTOMER"));
  const isEvenNum = (n: number) => n % 2 === 0;
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const evens = nums.filter(isEvenNum);
  console.log(evens);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(nums));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(nums), getMin(nums));
  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
  console.log(formatCurrency(99.99));
  const greet = (name: string) => `Hello ${name}`;
  console.log(greet("Customer"));
  const dummy = () => console.log("dummy");
  dummy();
  dummy();
  dummy();
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
  console.log(isEvenCheck(12), isEvenCheck(13));
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
      <CustomerActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onBlock={() => {}}
        onUnblock={() => {}}
        onExport={() => {}}
        onPrint={() => {}}
        onEmail={() => {}}
      />
      <button onClick={() => setPage(page + 1)}>Next</button>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
      </select>
    </div>
  );
}

function CustomerActions(props: any) {
  return <div>CustomerActions</div>;
}
export default CustomerList;
