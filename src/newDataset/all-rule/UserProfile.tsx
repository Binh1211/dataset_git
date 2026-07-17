import React, { useState, useEffect } from 'react';

// Component hiển thị thông tin người dùng
function UserProfile({ userId }: { userId: string }) {
  // 7 useState → too-many-states
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  // API call (fetch) trong useEffect → mixed-responsibility
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setName(data.name);
        setEmail(data.email);
        setBio(data.bio);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  // Hàm cập nhật (không liên quan đến render)
  const handleSave = () => {
    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({ name, email, bio }),
    });
  };

  // Các hàm helper và logic để tăng số dòng
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid = () => name.length > 0 && validateEmail(email);
  const handleCancel = () => setEditMode(false);
  const toggleEdit = () => setEditMode(!editMode);
  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBio(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  // Biến và hàm giả để tăng số dòng
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
  const sum = (a: number, b: number) => a + b;
  const diff = (a: number, b: number) => a - b;
  const product = (a: number, b: number) => a * b;
  const quotient = (a: number, b: number) => a / b;
  console.log(sum(1, 2), diff(3, 4), product(5, 6), quotient(7, 8));
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = arr.filter(n => n % 2 === 0);
  const odd = arr.filter(n => n % 2 !== 0);
  const doubled = arr.map(n => n * 2);
  const tripled = arr.map(n => n * 3);
  console.log(even, odd, doubled, tripled);
  const userData = { id: userId, name, email, bio };
  const adminData = { ...userData, role: 'admin' };
  const guestData = { ...userData, role: 'guest' };
  console.log(adminData, guestData);
  let counter = 0;
  for (let i = 0; i < 50; i++) counter += i;
  while (counter < 100) counter++;
  if (counter > 50) console.log('counter > 50');
  else console.log('counter <= 50');
  switch (counter % 3) {
    case 0: console.log('divisible by 3'); break;
    case 1: console.log('remainder 1'); break;
    default: console.log('remainder 2');
  }
  const greet = (name: string) => `Hello, ${name}`;
  const message = greet('John');
  console.log(message);
  const isEvenNum = (n: number) => n % 2 === 0;
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evens = numbers.filter(isEvenNum);
  const odds = numbers.filter(n => !isEvenNum(n));
  console.log(evens, odds);
  const addOne = (n: number) => n + 1;
  const incremented = numbers.map(addOne);
  console.log(incremented);
  const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
  console.log(sumAll(numbers));
  const multiplyAll = (nums: number[], factor: number) => nums.map(n => n * factor);
  console.log(multiplyAll(numbers, 3));
  const getMax = (nums: number[]) => Math.max(...nums);
  const getMin = (nums: number[]) => Math.min(...nums);
  console.log(getMax(numbers), getMin(numbers));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="profile">
      <header>
        <h1>User Profile</h1>
      </header>
      <section>
        <div className="info">
          <div className="field">
            <label>Name:</label>
            <input value={name} onChange={handleNameChange} />
          </div>
          <div className="field">
            <label>Email:</label>
            <input value={email} onChange={handleEmailChange} />
          </div>
          <div className="field">
            <label>Bio:</label>
            <textarea value={bio} onChange={handleBioChange} />
          </div>
        </div>
        {/* JSX nesting sâu 6 cấp → complex-jsx */}
        <div className="actions">
          <div className="buttons">
            <div className="group">
              <div className="inner">
                <div className="item">
                  <button onClick={handleSave}>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Component con với nhiều props (12) → too-many-props */}
        <ProfileActions
          onEdit={toggleEdit}
          onDelete={() => {}}
          onShare={() => {}}
          onExport={() => {}}
          onPrint={() => {}}
          onRefresh={() => {}}
          onLock={() => {}}
          onUnlock={() => {}}
          onArchive={() => {}}
          onRestore={() => {}}
          onDuplicate={() => {}}
          onMove={() => {}}
        />
      </section>
    </div>
  );
}

// Component con chỉ để minh họa
function ProfileActions(props: any) {
  return <div>Actions</div>;
}

export default UserProfile;