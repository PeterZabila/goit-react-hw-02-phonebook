import styled from 'styled-components';
import ContactListEl from "../ContactListEl/ContactListEl";

export default function ContactList({list, onDeleteContact}) {
    return (

           <ListItems>
                { list.map(contact => (
                    <ContactListEl
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                    />
                ))}
        </ListItems>
    )
}

const ListItems = styled.ul`
    width: 300px;
    padding: 10px;
`