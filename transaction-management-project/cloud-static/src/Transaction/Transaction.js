import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class Transaction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
        }
    }

    render() {
        return (
            <div></div>
        );
    }

}

export default Transaction;