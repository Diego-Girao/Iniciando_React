import React from 'react';
import  './ContactForm.css';


class ContactForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentContact: {
                name: "Diego",
                email: "diego@test.com",
                phone: "123456789"
            }
        }
    }

    onChangeHandler = (event) => {
        const target = event.target;
        const key = target.id;
        const value = target.value;
        let contact = {...this.state.currentContact,[key]:value}
        //this.state.currentContact[key] = value; // nunca nunca fazer isso !!!
        this.setState ({
        currentContact:contact
        })
    }
    render () {
        console.log('renderizando...', this.state.currentContact)
        return (
            <form>
            <label>Nome</label>
            <input id="name" value={this.state.currentContact.name} onChange={this.onChangeHandler}/>
            <label>Email</label>
            <input id="email" value={this.state.currentContact.email} onChange={this.onChangeHandler}/>
            <label>Telefone</label>
            <input id="phone" value={this.state.currentContact.phone} onChange={this.onChangeHandler}/>
            <button type="submit">Salvar</button>
            </form>
        )
    }
}

export default ContactForm;