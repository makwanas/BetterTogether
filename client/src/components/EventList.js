import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getEvents, deleteEvent } from '../actions/eventActions';

import Proptypes from 'prop-types';

class EventList extends Component {

    static propTypes = {
        getEvents: Proptypes.func.isRequired,
        event: Proptypes.object.isRequired,
        isAuthenticated: Proptypes.bool
    };

    componentDidMount() {
        this.props.getEvents()
    }

    onDeleteClick = (id) => {
        this.props.deleteEvent(id);
    }

    render() {
        const { events } = this.props.event;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="event-list">
                        {
                            events.map(({ _id, name }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        {this.props.isAuthenticated ? <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >&times;</Button> : null}

                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            )
                            )
                        }

                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}



const mapStateToProps = (state) => ({
    event: state.event,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { getEvents, deleteEvent })(EventList);