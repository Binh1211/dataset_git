import React from 'react';

class ClassBasedProfile extends React.Component<{ userId: string }> {
  // Nhiều state (không bắt)
  state = {
    user: null,
    loading: true,
    name: '',
    email: '',
    bio: '',
    editMode: false,
  };

  // API call (không bắt)
  componentDidMount() {
    fetch(`/api/users/${this.props.userId}`)
      .then(res => res.json())
      .then(data => this.setState({ user: data, name: data.name, email: data.email, bio: data.bio, loading: false }));
  }

  render() {
    return (
      <div>
        {/* Nesting sâu → bắt complex-jsx */}
        <div><div><div><div><div><div>Nesting 6</div></div></div></div></div></div>
        {/* 8 props → bắt too-many-props */}
        <ProfileActions
          onEdit={() => {}}
          onDelete={() => {}}
          onShare={() => {}}
          onExport={() => {}}
          onPrint={() => {}}
          onRefresh={() => {}}
          onLock={() => {}}
          onUnlock={() => {}}
        />
        {/* Chỉ 2 inline → không bắt inline-overuse */}
        <button onClick={() => alert('click')}>Click</button>
        <input onChange={() => console.log('change')} />
      </div>
    );
  }
}

function ProfileActions(props: any) { return <div>ProfileActions</div>; }
export default ClassBasedProfile;