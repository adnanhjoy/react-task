import React, { useState } from 'react';

const Problem1 = () => {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState('all');
    const activeUserData = userData.filter((user) => user.status.toLowerCase() === "active");
    const completedUserData = userData?.filter((user) => user?.status.toLowerCase() === "completed");


    const handleClick = (val) => {
        setShow(val);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;
        const data = {
            name,
            status
        }
        setUserData([...userData, data]);
        e.target.reset();
    }


    function sortUserDataByStatus(a, b) {
        const statusOrder = { active: 1, completed: 2, pending: 3, other: 4 };
        return statusOrder[a.status.toLowerCase()] - statusOrder[b.status.toLowerCase()];
    }

    const sortedUserData = userData.sort(sortUserDataByStatus);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            show === 'all' &&
                            sortedUserData?.map((user, idx) =>
                                <tr key={idx}>
                                    <td>{user?.name}</td>
                                    <td>{user?.status}</td>
                                </tr>
                            )
                        }
                        {
                            show === 'active' &&
                            activeUserData?.map((user, idx) =>
                                <tr key={idx}>
                                    <td>{user?.name}</td>
                                    <td>{user?.status}</td>
                                </tr>
                            )
                        }
                        {
                            show === 'completed' &&
                            completedUserData?.map((user, idx) =>
                                <tr key={idx}>
                                    <td>{user?.name}</td>
                                    <td>{user?.status}</td>
                                </tr>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;