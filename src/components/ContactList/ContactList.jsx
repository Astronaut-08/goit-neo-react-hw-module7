import style from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'


const ContactList = () => {
    const dispatch = useDispatch()
    const contactList = useSelector((state) => state.contacts.items)
    const filter = useSelector((state) => state.filters.name)

    const filteredList = contactList.filter((cont) => (
        cont.name.toLowerCase().includes(filter.toLowerCase())
    ))

    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
    };

    return (
        <div className={style['phonebook-container']}>
            <ul className={style['phonebook-list']}>
                {filteredList.map((contacts) => {
                    return (
                        <Contact 
                        key={contacts.id} 
                        id={contacts.id} 
                        name={contacts.name} 
                        number={contacts.number}
                        onDelete={handleDeleteContact}/>
                    )
                })}
            </ul>
        </div>
        
    )
}

export default ContactList