import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';



class EventModal extends Component {
    state = {
        modal: false,
        name: '',
        price: 0,
        place: '',
        host_name: '',
        host_contactno: 0,
        host_email: '',
        bio: '',
        people: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        clearErrors: PropTypes.func.isRequired
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            price,
            place,
            host_name,
            host_contactno,
            host_email,
            bio,
            people
        } = this.state;

        const newEvent = {
            name,
            price,
            place,
            host_name,
            host_contactno,
            host_email,
            bio,
            people
        }

        //Add item via addItem action
        this.props.addEvent(newEvent);

        //Close Modal
        this.toggle();
    }

    render() {
        return (
            <div>

                {this.props.isAuthenticated ?
                    <div>
                        <h4 className="mb-3 ml-4">Let's add or delete events now</h4>
                        <Button
                            color="dark"
                            style={{ marginBottom: '2rem' }}
                            onClick={this.toggle}
                        >
                            Add Event
                    </Button>
                    </div> : <h4 className="mb-3 ml-4">Please login to add or delete events</h4>}

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Event Details</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="event">Event's Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="event"
                                    placeholder="Add event's name here"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event's Price</Label>
                                <Input
                                    type="number"
                                    name="price"
                                    id="event"
                                    placeholder="Enter the estimated amount of the event's cost"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event's Place</Label>
                                <Input
                                    type="text"
                                    name="place"
                                    id="event"
                                    placeholder="Enter the place where the vent wil be hosted"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event's Host Name</Label>
                                <Input
                                    type="text"
                                    name="host_name"
                                    id="event"
                                    placeholder="Add the name of the event's host"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event's Host Contact Number</Label>
                                <Input
                                    type="number"
                                    name="host_contactno"
                                    id="event"
                                    placeholder="Enter the contact number of the event's host"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event's Host Email id</Label>
                                <Input
                                    type="text"
                                    name="host_email"
                                    id="event"
                                    placeholder="Enter the email id of the event's host"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event</Label>
                                <Input
                                    type="text"
                                    name="bio"
                                    id="event"
                                    placeholder="Add some bio for the event"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Label for="event">Event Participants</Label>
                                <Input
                                    type="array"
                                    name="people"
                                    id="event"
                                    placeholder="Add people who'll be joining you!"
                                    className="mb-3"
                                    onChange={this.onChange}></Input>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2 rem' }}
                                    block>
                                    Add event details
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event: state.event,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addEvent })(EventModal)