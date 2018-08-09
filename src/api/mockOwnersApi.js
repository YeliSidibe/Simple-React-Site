import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (customer) => {
  return customer.firstName.toLowerCase() + '-' + customer.lastName.toLowerCase();
};

class CustomerApi {
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static saveCustomer(customer) {
	customer = Object.assign({}, customer); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (customer.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (customer.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (customer.id) {
          const existingAuthorIndex = customers.findIndex(a => a.id == customer.id);
          customers.splice(existingAuthorIndex, 1, customer);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          customer.id = generateId(customer);
          customers.push(customer);
        }

        resolve(customer);
      }, delay);
    });
  }

  static deleteCustomer(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCustomerToDelete = customers.findIndex(customer => {
          customer.id == customerId;
        });
        customers.splice(indexOfCustomerToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CustomerApi;