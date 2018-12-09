import React, {Component} from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row
} from 'reactstrap';

class PersonDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: {},
            personId: props.match.params.id,
            activeTab : 1,
        }
    }

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
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader tag="h3">{account.accountName}</CardHeader>
                            <CardBody>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === '1'
                                            })}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}
                                        >
                                            Details
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === '2'
                                            })}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}
                                        >
                                            Contacts
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({
                                                active: activeTab === '3'
                                            })}
                                            onClick={() => {
                                                this.toggle('3');
                                            }}
                                        >
                                            Environments
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PersonDetails;