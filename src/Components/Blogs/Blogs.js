import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h4>Difference between authorization and authentication</h4>
                <p>Authorization means Giving permission to someone to let it use a particular resource or do some tasks and Authentication means giving insurance of something that is claimed as a authentic one. Authentication is always done before the authorization process because once the user is assured of the validity of its credentials only then it gets authorized to the system inside</p>
            </div>
            <div>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>I am using Firebase to implement authorization and authentication system on my website. I am also using it for hosting my site on this platform. Apart from Firebase, other options like Auth0, Okta also allow to implement authentication</p>
            </div>
            <div>
                <h4>What other services does firebase provide other than authentication</h4>
                <p>Firebase also provides Database system, Cloud Messaging, Hosting service, Cloud Storage etc. </p>
            </div>
        </div>
    );
};

export default Blogs;