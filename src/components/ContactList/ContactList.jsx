

export default function ContactList({list, onDeleteContact}) {
    return (
       
        <ul>
           { list.map(({name, number, id}) => (
                <div key={id}><span>{name} : {number}</span><button type="button" onClick={() => {onDeleteContact(id)}}>Delete contact</button> </div>
            ))
            }
        </ul>
    )
}