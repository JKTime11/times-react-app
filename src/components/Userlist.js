export default function Userlist() {
    return (
        <div>
            {/* add class table */}
            <table className="table table-bordered table-hover table-responsive">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sandeep</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}