import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
    return (
        <>
            <h2>Mailboxes</h2>
            {mailboxes.length === 0 ? (
                <p>No mailboxes yet. Create one now! <Link to='/mailboxes/new-mailbox'>New Mailbox</Link></p>
            ) : (
            <ul>
                {mailboxes.map((box) => (
                    <li key={box._id}>
                        <Link to={`/mailboxes/${box._id}`}>
                            Mailbox {box._id}
                        </Link>
                    </li>
                ))}
            </ul>
            )}
        </>
    )
}

export default MailboxList;