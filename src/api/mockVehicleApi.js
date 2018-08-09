import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const vehicles = [
   {
      Id:"chevrolet-chevelle-malibu",
      Name:"chevrolet chevelle malibu",
      Miles_per_Gallon:18,
      Cylinders:8,
      Displacement:307,
      Horsepower:130,
      Weight_in_lbs:3504,
      Acceleration:12,
      Year:1970,
      Origin:"USA",
      CustomerId:"cory-house",
      watchHref:"http://www.pluralsight.com/courses/1"
   },
   {
      Id:"buick-skylark 320",
      Name:"buick skylark 320",
      Miles_per_Gallon:15,
      Cylinders:8,
      Displacement:350,
      Horsepower:165,
      Weight_in_lbs:3693,
      Acceleration:11.5,
      Year:1970,
      Origin:"USA",
      CustomerId:"cory-house",
      watchHref:"http://www.pluralsight.com/courses/2"
   },
   {
      Id:"plymouth-satellite",
      Name:"plymouth satellite",
      Miles_per_Gallon:18,
      Cylinders:8,
      Displacement:318,
      Horsepower:150,
      Weight_in_lbs:3436,
      Acceleration:11,
      Year:1970,
      Origin:"USA",
      CustomerId:"cory-house",
      watchHref:"http://www.pluralsight.com/courses/3"
   },
   {
      Id:"amc-rebel-sst",
      Name:"amc rebel sst",
      Miles_per_Gallon:16,
      Cylinders:8,
      Displacement:304,
      Horsepower:150,
      Weight_in_lbs:3433,
      Acceleration:12,
      Year:1970,
      Origin:"USA",
      CustomerId:"scott-allen",
      watchHref:"http://www.pluralsight.com/courses/4"
   },
   {
      Id:"ford-torino",
      Name:"ford torino",
      Miles_per_Gallon:17,
      Cylinders:8,
      Displacement:302,
      Horsepower:140,
      Weight_in_lbs:3449,
      Acceleration:10.5,
      Year:1970,
      Origin:"USA",
      CustomerId:"scott-allen",
      watchHref:"http://www.pluralsight.com/courses/5"
   },
   {
      Id:"ford-galaxie-500",
      Name:"ford galaxie 500",
      Miles_per_Gallon:15,
      Cylinders:8,
      Displacement:429,
      Horsepower:198,
      Weight_in_lbs:4341,
      Acceleration:10,
      Year:1970,
      Origin:"USA",
      CustomerId:"dan-wahlin",
      watchHref:"http://www.pluralsight.com/courses/6"
   },
   {
      Id:"chevrolet-impala",
      Name:"chevrolet impala",
      Miles_per_Gallon:14,
      Cylinders:8,
      Displacement:454,
      Horsepower:220,
      Weight_in_lbs:4354,
      Acceleration:9,
      Year:1970,
      Origin:"USA",
      CustomerId:"dan-wahlin",
      watchHref:"http://www.pluralsight.com/courses/7"
   }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (vehicle) => {
  return replaceAll(vehicle.Name, ' ', '-');
};

class VehicleApi {
  static getAllVehicles() {  
    return new Promise((resolve, reject) => {
      setTimeout(() => {          
        resolve(Object.assign([], vehicles));
      }, delay);
    });
  }

  static saveVehicle(vehicle) {    
    vehicle = Object.assign({}, vehicle); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;        
        if (vehicle.Name.length < minCourseTitleLength) {
          reject(`Name must be at least ${minCourseTitleLength} characters.`);
        }

        if (vehicle.Id) {
          const existingVehicleIndex = vehicles.findIndex(a => a.Id == vehicle.Id);
          vehicles.splice(existingVehicleIndex, 1, vehicle);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          vehicle.Id = generateId(vehicle);
          vehicle.watchHref = 'http://www.pluralsight.com/courses/1';
          vehicles.push(vehicle);
        }

        resolve(vehicle);
      }, delay);
    });
  }

  static deleteCourse(vehicleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVehicleToDelete = vehicles.findIndex(vehicle => {
          vehicle.Id == vehicleId;
        });
        vehicles.splice(indexOfVehicleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VehicleApi;