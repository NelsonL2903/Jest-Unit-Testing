const axios = require('axios');
const Users = require('../users');

// sets all functions which use axios to a custom predefined output.
jest.mock('axios');

test('should fetch users', () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }];

    const resp = { data : users };

    // axios.get.mockImplementation defines what functions which use axios will output since we are creating mock implementations
    // of the function. Promise.resolve(resp)) is a Promise object with has been resolved with 'resp' as the
    // success object/message/response.
    axios.get.mockImplementation(() => Promise.resolve(resp));

    // Users.all() is a Promise based function, and because we mock axios functions using jest, Users.all() will return 'resp
    // as the success object and the .then method will be used to test that users are equal.
    Users.all().then(resp => expect(resp.data).toEqual(users));
});