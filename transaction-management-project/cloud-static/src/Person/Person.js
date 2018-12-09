import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons : [],
        }
    }

    // createCORSRequest(method, url) {
    //     var xhr = new XMLHttpRequest();
    //     if ("withCredentials" in xhr) {
    //         // XHR for Chrome/Firefox/Opera/Safari.
    //         xhr.open(method, url, true);
    //     }
    //     // else if (typeof XDomainRequest != "undefined") {
    //     //     // XDomainRequest for IE.
    //     //     xhr = new XDomainRequest;
    //     //     xhr.open(method, url);
    //     // }
    //     else {
    //         // CORS not supported.
    //         xhr = null;
    //     }
    //     return xhr;
    // }

    // getTitle(text) {
    //     return text.match('<title>(.*)?</title>')[1];
    // }
    //
    // componentDidMount() {
    //     var url = 'http://localhost:8080/transaction/';
    //
    //     var xhr = this.createCORSRequest('GET', url);
    //     if (!xhr) {
    //         alert('CORS not supported');
    //         return;
    //     }
    //
    //     xhr.send();
    // }


    componentDidMount() {

        fetch('http://localhost:8080/', {
            accept: 'application/json',
            'accept-language' : 'en-us',
            'content-type': 'application/json',
            withCredentials: true,
            auth: {
                username: "urvimaru@gmail.com",
                password: "1234",
            },
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        persons: result,
                    });
                },
                (error) => {
                        alert(error);
                }
            )

            // axios.get('http://localhost:8080/', {
            //     accept: 'application/json',
            //     'accept-language' : 'en-us',
            //     'content-type': 'application/json',
            //     withCredentials: true,
            //     auth: {
            //         username: "urvimaru@gmail.com",
            //         password: "1234",
            //     },
            //     headers: {
            //         "Access-Control-Allow-Origin": "*"
            //     }
            // })
            //     .then(res => {
            //         if(res.status === 200) {
            //             this.setState({
            //                 persons: res
            //             })
            //         } else {
            //             this.setState({
            //                 error: true,
            //             });
            //         }
            //     });
    }


    render(){
        const {persons} = this.state;
        return (
            <div align="left">
                <table border="5" aria-setsize="10">
                    <thead>
                    <tr>
                    <th>Id</th>
                    <th>User Name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {persons.map(person => (
                            <tr key={person.personId}>
                                <td>{person.personId}</td>
                                <td>{person.personEmail}</td>
                                <td><Link to={'/transaction/'+person.personId}><i>View Transactions>></i> </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
            </div>
        );
    }

}

export default Person;
