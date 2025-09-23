import { useParams } from "react-router";

const MailboxDetails = (props) => {
    console.log(props);

    const { mailboxId } = useParams();
    console.log('mailboxId:', mailboxId);

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    console.log('Mailbox Selection', selectedBox);

    return (
        <>
            <h2>{selectedBox.name}</h2>
            <dl>
                <dt>Box Size:</dt>
                    <dd>{singleMailbox.boxSize}</dd>
                <dt>Box Owner</dt>
                    <dd>{singleMailbox.boxOwner}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails;