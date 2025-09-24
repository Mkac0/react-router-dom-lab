import { useParams, Link } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
    console.log(mailboxes);

    const { mailboxId } = useParams();
    const id = Number(mailboxId);
    const mailbox = mailboxes.find(mailbox => mailbox._id === id);

    return (
        <>
            <h2>Mailbox Details</h2>
            <ul>
                <li>Box Number: {mailbox._id}</li>
                <li>Box Owner: {mailbox.boxOwner}</li>
                <li>Box Size: {mailbox.boxSize}</li>
            </ul>
            <p><Link to='/mailboxes'>Back to Mailboxes</Link></p>
        </>
    );
}

export default MailboxDetails;