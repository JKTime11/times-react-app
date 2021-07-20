
export default function Message(props) {
    let message, css;
    if(props.saved) {
        message = 'User Details saved successfully!';
        css='btn btn-success';
    }
    else {
        message = 'User details are not saved!';
        css='btn btn-danger';
    }
    return (
        <div className={css}>{message}</div>
    );
}