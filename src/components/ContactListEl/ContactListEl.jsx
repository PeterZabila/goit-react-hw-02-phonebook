import styled from 'styled-components';

export default function ContactListEl({ contact, onDeleteContact }) {
  return (
    <Element>
    <p>
      {contact.name}: {contact.number}
    </p>
    <Button type="button" onClick={() => onDeleteContact(contact.id)}>
      Delete
    </Button>
  </Element>

  )
};


const Element = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: blue;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
`;