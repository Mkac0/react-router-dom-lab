import { useState } from "react";
import { useNavigate } from 'react-router';

const initialState = {
    boxSize: 0,
    boxOwner: '',
}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData();
        navigate('/mailboxes');
    }

    return (
        <main onSubmit={handleSubmit}>
            <h2>New-Mailbox</h2>
            <form>
                <label htmlFor="boxSize"> Box Size</label>
                <input
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="boxOwner"> Box Owner</label>
                <input
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {props.selected ? 'Update Mailbox' : 'Add New Mailbox'}
                </button>
            </form>
        </main>
    )
}

export default MailboxForm;