import { useState } from "react";
import { useNavigate } from 'react-router';

const MailboxForm = ({ addBox }) => {
    const initialState = {
        boxSize: 'Small',
        boxOwner: '',
    }

    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    }

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize"> Box Size</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                    required
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>

                <label htmlFor="boxOwner"> Box Owner</label>
                <input
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Create Mailbox
                </button>
            </form>
        </main>
    )
}

export default MailboxForm;