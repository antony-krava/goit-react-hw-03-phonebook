import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    }

    handlerChenge = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({
        [name]: value,
        });
    };

    reset = () => {
        this.setState({ name: "", number: "" });
    };

    hendlerSubmit = (event) => {
        event.preventDefault();

        this.props.addContact(this.state);
        this.reset();
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={styles.contactForm} onSubmit={this.hendlerSubmit}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    className={styles.input}
                    value={name}
                    onChange={this.handlerChenge}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                <label className={styles.labelNumber}>Number</label>
                <input
                    type="tel"
                    className={styles.input}
                    value={number}
                    onChange={this.handlerChenge}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
                <button type="submit" className={styles.button}>Add contact</button>
            </form>
        );
    }
}

export default ContactForm;