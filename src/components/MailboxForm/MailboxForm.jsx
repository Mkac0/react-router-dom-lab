import { useState } from "react";
import { useNavigate } from 'react-router';

const MailboxForm = (props) => {
    const [formData, setFormData] = useState();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData();
        navigate('/mailboxes');
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }

    return (
        <main>
            <h2>New-Mailbox</h2>
            
        </main>
    )
}