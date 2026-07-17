import React from 'react';
import axios from 'axios';

class ClassBasedOrder extends React.Component<{ orderId: string }> {
  state = { order: null, status: 'pending', loading: true, error: null };

  componentDidMount() {
    axios.get(`/api/orders/${this.props.orderId}`)
      .then(res => this.setState({ order: res.data, loading: false }))
      .catch(err => this.setState({ error: err.message, loading: false }));
  }

  render() {
    return (
      <div>
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        <OrderActions
          onCancel={() => {}}
          onReturn={() => {}}
          onRefund={() => {}}
          onPrint={() => {}}
          onEmail={() => {}}
          onDownload={() => {}}
          onShare={() => {}}
          onReview={() => {}}
        />
        <button onClick={() => {}}>Update</button>
      </div>
    );
  }
}

function OrderActions(props: any) { return <div>OrderActions</div>; }
export default ClassBasedOrder;