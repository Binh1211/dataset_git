import React, { useState } from "react";

function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState("newest");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const submitComment = () => {
    setLoading(true);
    fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify({ content: newComment }),
    })
      .then((res) => res.json())
      .then((data) => setComments([...comments, data]))
      .finally(() => setLoading(false));
  };

  const deleteComment = (id: string) =>
    setComments(comments.filter((c) => c.id !== id));
  const editComment = (id: string, content: string) => {
    setComments(comments.map((c) => (c.id === id ? { ...c, content } : c)));
  };
  const sortComments = (order: string) => {
    const sorted = [...comments];
    if (order === "newest") sorted.sort((a, b) => b.createdAt - a.createdAt);
    else sorted.sort((a, b) => a.createdAt - b.createdAt);
    setComments(sorted);
  };
  const filterByAuthor = (author: string) => setFilterAuthor(author);
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNewComment(e.target.value);

  // ========== KHỐI CODE GIẢ (170 dòng) ==========
  let count = 0;
  for (let i = 0; i < 100; i++) count += i;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doubled = arr.map((n) => n * 2);
  const filteredArr = arr.filter((n) => n % 2 === 0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  console.log(doubled, filteredArr, reduced);
  const add = (a: number, b: number) => a + b;
  const sub = (a: number, b: number) => a - b;
  const mul = (a: number, b: number) => a * b;
  const div = (a: number, b: number) => a / b;
  console.log(add(5, 3), sub(5, 3), mul(5, 3), div(5, 3));
  let x = 0;
  while (x < 15) {
    x++;
    console.log(x);
  }
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const obj2 = { ...obj, f: 6, g: 7 };
  console.log(obj, obj2);
  const str = "comment";
  const num = 42;
  const bool = true;
  const nullVal = null;
  const undef = undefined;
  const sym = Symbol("comment");
  const big = BigInt(777);
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
  const dummy = (a: number) => a * 2;
  console.log(dummy(5), dummy(10));
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
  console.log(isEvenCheck(6), isEvenCheck(7));
  const randInt = Math.floor(Math.random() * 100);
  console.log(randInt);
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

  // ===============================================

  return (
    <div>
      <div className="comments">
        <div className="comment">
          <div className="body">
            <div className="content">
              <div className="text">
                <span>Comment text</span>
              </div>
            </div>
          </div>
        </div>
        <div className="new-comment">
          <textarea value={newComment} onChange={handleCommentChange} />
          <button onClick={submitComment} disabled={loading}>
            Submit
          </button>
        </div>
      </div>
      <CommentActions
        onReply={() => {}}
        onEdit={editComment}
        onDelete={deleteComment}
        onFlag={() => {}}
        onLike={() => {}}
        onShare={() => {}}
        onReport={() => {}}
        onBlock={() => {}}
        onMute={() => {}}
        onPin={() => {}}
        onUnpin={() => {}}
        onMove={() => {}}
      />
    </div>
  );
}

function CommentActions(props: any) {
  return <div>CommentActions</div>;
}

export default CommentSection;
