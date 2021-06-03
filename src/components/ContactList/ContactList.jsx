import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ul className={styles.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={styles.item}>
                    <span className={styles.textName}>{name}:</span>
                    <span className={styles.textNumber}>{number}</span>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => deleteContact(id)}
                    >Delete</button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    deleteContact: PropTypes.func,
};

export default ContactList;