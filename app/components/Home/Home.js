import React, { Component } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: 'null',
    })
      .then(res => {
        // products = res.data;
        this.setState({ products: res.data });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  render() {
    // console.log('render');
    const { products } = this.state;
    // products.map((value) => (console.log(value))
    return (
      <React.Fragment>
         <h1>Trang chủ</h1>
        <MaterialTable
          title="Multiple Actions Preview"
          columns={[
            { title: 'Id', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'Username', field: 'username' },
            { title: 'Email', field: 'email' },
            { title: 'Detail', field: 'detail' },
          ]}
          data={products.map(product => product)}
        />
      </React.Fragment>
    );
  }
}

export default Home;