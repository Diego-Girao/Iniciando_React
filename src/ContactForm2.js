import React from 'react';
import  './ContactForm.css';


class ContactForm2 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentContact: {
                name: "Diego",
                email: "diego@test.com",
                phone: "123456789"
            }
        }
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.phoneEl = React.createRef();
    }

    onSaveHandler = (event) => {
        event.preventDefault();
        console.log(this.nameEl.current.value);
        console.log(this.emailEl.current.value);
        console.log(this.phoneEl.current.value);
    }

    render () {
        console.log('renderizando...', this.state.currentContact)
        return (
            <form onSubmit = {this.onSaveHandler}>
            <label>Nome</label>
            <input id="name" defaultValue={this.state.currentContact.name} ref={this.nameEl}/>
            <label>Email</label>
            <input id="email" defaultValue={this.state.currentContact.email} ref={this.emailEl}/>
            <label>Telefone</label>
            <input id="phone" defaultValue={this.state.currentContact.phone} ref={this.phoneEl}/>
            <button type="submit">Salvar</button>
            </form>
        )
    }
}

export default ContactForm2;