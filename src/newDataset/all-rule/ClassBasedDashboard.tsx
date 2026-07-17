import React from 'react';
import axios from 'axios';

class ClassBasedDashboard extends React.Component {
  state = {
    stats: {},
    recent: [],
    notifications: [],
    loading: true,
    view: 'weekly',
    chart: 'bar',
    refresh: 0,
    theme: 'light',
  };

  componentDidMount() {
    axios.get('/api/dashboard/stats').then(res => this.setState({ stats: res.data }));
    axios.get('/api/dashboard/recent').then(res => this.setState({ recent: res.data }));
    axios.get('/api/dashboard/notifications').then(res => this.setState({ notifications: res.data, loading: false }));
  }

  // Hàm helper
  refreshData = () => this.setState({ refresh: this.state.refresh + 1 });
  toggleTheme = () => this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });

  render() {
    let total = 0;
    for (let i = 0; i < 150; i++) total += i;
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const doubled = arr.map(n => n*2);
    const filtered = arr.filter(n => n%2===0);
    const reduced = arr.reduce((acc, n) => acc + n, 0);
    console.log(doubled, filtered, reduced);
    const add = (a: number, b: number) => a + b;
    const sub = (a: number, b: number) => a - b;
    const mul = (a: number, b: number) => a * b;
    const div = (a: number, b: number) => a / b;
    console.log(add(30,15), sub(30,15), mul(30,15), div(30,15));
    let x = 0;
    while (x < 40) { x++; console.log(x); }
    const obj = { a: 1, b: 2, c: 3 };
    const obj2 = { ...obj, d: 4 };
    const str = 'class-dashboard';
    const num = 999;
    const bool = false;
    const nullVal = null;
    const undef = undefined;
    const sym = Symbol('class-dashboard');
    const big = BigInt(333);
    const toUpper = (s: string) => s.toUpperCase();
    console.log(toUpper('dashboard'));
    const isEvenNum = (n: number) => n % 2 === 0;
    const nums = [1,2,3,4,5,6];
    const evens = nums.filter(isEvenNum);
    console.log(evens);
    const sumAll = (nums: number[]) => nums.reduce((acc, n) => acc + n, 0);
    console.log(sumAll(nums));
    const getMax = (nums: number[]) => Math.max(...nums);
    const getMin = (nums: number[]) => Math.min(...nums);
    console.log(getMax(nums), getMin(nums));
    const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
    console.log(formatCurrency(49.99));
    const greet = (name: string) => `Hello ${name}`;
    console.log(greet('Dashboard'));

    const { loading } = this.state;
    if (loading) return <div>Loading Dashboard...</div>;

    return (
      <div>
        <div className="dashboard">
          <div className="widgets">
            <div className="widget">
              <div className="inner">
                <span>Value</span>
              </div>
            </div>
          </div>
        </div>
        <DashboardActions
          onExport={() => {}}
          onImport={() => {}}
          onPrint={() => {}}
          onShare={() => {}}
          onRefresh={this.refreshData}
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
}

function DashboardActions(props: any) { return <div>DashboardActions</div>; }

export default ClassBasedDashboard;