import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryManager() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("/api/categories", { params: { search, sort, page } })
      .then((res) => {
        setCategories(res.data.items);
        setTotal(res.data.total);
        setLoading(false);
      });
  }, [search, sort, page]);

  // ========== KHỐI CODE GIẢ (170 dòng) ==========
  const d1 = 1;
  const d2 = 2;
  const d3 = 3;
  const d4 = 4;
  const d5 = 5;
  const d6 = 6;
  const d7 = 7;
  const d8 = 8;
  const d9 = 9;
  const d10 = 10;
  const d11 = 11;
  const d12 = 12;
  const d13 = 13;
  const d14 = 14;
  const d15 = 15;
  const d16 = 16;
  const d17 = 17;
  const d18 = 18;
  const d19 = 19;
  const d20 = 20;
  const d21 = 21;
  const d22 = 22;
  const d23 = 23;
  const d24 = 24;
  const d25 = 25;
  const d26 = 26;
  const d27 = 27;
  const d28 = 28;
  const d29 = 29;
  const d30 = 30;
  const d31 = 31;
  const d32 = 32;
  const d33 = 33;
  const d34 = 34;
  const d35 = 35;
  const d36 = 36;
  const d37 = 37;
  const d38 = 38;
  const d39 = 39;
  const d40 = 40;
  const d41 = 41;
  const d42 = 42;
  const d43 = 26;
  const d44 = 27;
  const d45 = 28;
  const d46 = 29;
  const d47 = 30;
  const d48 = 31;
  const d49 = 32;
  const d50 = 33;
  const d51 = 34;
  const d52 = 35;
  const d53 = 36;
  const d54 = 37;
  const d55 = 38;
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(10, 5), sub(10, 5), mul(10, 5), div(10, 5));
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = arr.filter((n) => n % 2 === 0);
  const odd = arr.filter((n) => n % 2 !== 0);
  console.log(even, odd);
  let x = 0;
  while (x < 20) {
    x++;
    console.log(x);
  }
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const obj2 = { ...obj, f: 6, g: 7 };
  console.log(obj, obj2);
  const str = "category";
  const num = 42;
  const bool = true;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol("category");
  const big = BigInt(123);
  const toUpper = (s: string) => s.toUpperCase();
  console.log(toUpper("hello"));
  const isEvenNum = (n: number) => n % 2 === 0;
  const nums = [1, 2, 3, 4, 5];
  const evens = nums.filter(isEvenNum);
  console.log(evens);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(nums));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(nums), getMin(nums));
  const formatDate = (d: Date) => d.toISOString();
  console.log(formatDate(new Date()));
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
  const [a, b, c] = [5, 10, 15];
  const sum = a + b + c;
  console.log(sum);
  const multiply = (n: number) => n * 3;
  console.log(multiply(7));
  const isPositive = (n: number) => n > 0;
  console.log(isPositive(5), isPositive(-2));
  const random = Math.random() * 50;
  console.log(random);
  const now = new Date();
  console.log(now.getFullYear(), now.getMonth());
  const isEvenCheck = (n: number) => n % 2 === 0;
  console.log(isEvenCheck(8), isEvenCheck(9));
  const randInt = Math.floor(Math.random() * 100);
  console.log(randInt);
  // =================================================

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
      <CategoryActions
        onAdd={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
        onExport={() => {}}
        onImport={() => {}}
        onPrint={() => {}}
        onShare={() => {}}
        onSettings={() => {}}
      />
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

function CategoryActions(props: any) {
  return <div>CategoryActions</div>;
}
export default CategoryManager;
