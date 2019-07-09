import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos',
            data: 'null'
        }).then(res => {
            console.log(res);
            // products = res.data;
            this.setState({products: res.data});
        }).catch(err => {
            console.log(err);                                                                                             k
        });
    }
    render() {
        console.log('render');
        var { products } = this.state;
        return (
            <React.Fragment>
                <h1>Nơi Dữ liệu đổ ra</h1>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Title</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.products.map((product, index) => 
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{product.id}</TableCell>
                                    <TableCell align="right">{product.title}</TableCell>
                                </TableRow>
                            )}
                                
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}

export default Home;


