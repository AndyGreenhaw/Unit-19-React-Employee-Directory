import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Employees from './friends.json';

class App extends React.Component {

  state = {
    friendsArr: Employees
  }

  filterArray = (id) => {
    // This ID matches the friend card based on the code at the bottom of index
    console.log(id);

    // modify the array in state, and filer out whatever match id is passed in
    const filteredArray = this.state.friendsArr.filter( friend => friend.id !== id )
    console.log(filteredArray)

    this.setState({friendsArr: filteredArray})
  }

  render(){
    return (
      <div className="container">

          <div className="row">
            <div className="col-12">
              <Title>Friends List</Title>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <table>
                {this.state.friendsArr.map(friend => (
                  <FriendCard key={friend.id} {...friend} filterArray={this.filterArray}/>
                ))}
              </table>
            </div>
          </div>

        </div>
  
    );
  }
}

export default App;
