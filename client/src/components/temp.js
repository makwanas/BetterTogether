<Button 
                    color="dark" 
                    style={{marginBottom: '2rem'}}
                    onClick={ () => {
                        const name = prompt ('Enter the event name');
                        const price = prompt ('Enter the price');
                        const place = prompt ('Enter the place of the event');
                        const host_name = prompt ('Enter the name of the host');
                        const host_contactno = prompt('Enter the contact number of the host');
                        const host_email = prompt ('Enter the email id of the host for contact');
                        const bio=prompt('Enter some suitable bio for the event');
                        const people=prompt("Enter the list of people who'll be attending this event")

                        if (name){
                            this.setState(
                                state=>({
                                    events: [...state.events, {id: uuid(), name, price, place, host_name, host_contactno, host_email, bio, people}]
                                })
                            )
                        }
                    }

                    }
                    >
                    Add Event
                </Button>

                