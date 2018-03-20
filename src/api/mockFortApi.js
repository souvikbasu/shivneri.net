import delay from './delay';

const forts = [
    {
        "_id": "59f86e918d336e87de8f20ec",
        "fortImage_url": "http://placehold.it/120",
        "fortName": "Golconda",
        "fortPlace": "Hyderabad - Telangana",
        "fortConstructedYear": 1500
    },
    {
        "_id": "59f86e918d336e87de8f20ed",
        "fortImage_url": "https://placehold.it/120",
        "fortName": "Kamlah Fort",
        "fortPlace": "Kamlah - Himachal Pradesh",
        "fortConstructedYear": 1625
    },
    {
        "_id": "59f86e918d336e87de8f20ee",
        "fortImage_url": "http://placehold.it/120",
        "fortName": "Golconda",
        "fortPlace": "Hyderabad - Telangana",
        "fortConstructedYear": 1500
    },
    {
        "_id": "59f86e918d336e87de8f20ef",
        "fortImage_url": "https://placehold.it/120",
        "fortName": "Kamlah Fort",
        "fortPlace": "Kamlah - Himachal Pradesh",
        "fortConstructedYear": 1625
    },
    {
        "_id": "59f86f5d8d336e87de8f20f0",
        "fortImage_url": "http://placehold.it/120",
        "fortName": "Golconda",
        "fortPlace": "Hyderabad - Telangana",
        "fortConstructedYear": 1500
    },
    {
        "_id": "59f86f5d8d336e87de8f20f1",
        "fortImage_url": "https://placehold.it/120",
        "fortName": "Kamlah Fort",
        "fortPlace": "Kamlah - Himachal Pradesh",
        "fortConstructedYear": 1625
    },
    {
        "_id": "59f86f5d8d336e87de8f20f2",
        "fortImage_url": "http://placehold.it/120",
        "fortName": "Golconda",
        "fortPlace": "Hyderabad - Telangana",
        "fortConstructedYear": 1500
    },
    {
        "_id": "59f86f5d8d336e87de8f20f3",
        "fortImage_url": "https://placehold.it/120",
        "fortName": "Kamlah Fort",
        "fortPlace": "Kamlah - Himachal Pradesh",
        "fortConstructedYear": 1625
    },
    {
        "_id": "59fac22778a99efad9ae87f6",
        "fortImage_url": "http://placehold.it/120",
        "fortName": "Golconda",
        "fortPlace": "Hyderabad - Telangana",
        "fortConstructedYear": 1500
    },
    {
        "_id": "59fac2a478a99efad9ae87f7",
        "fortImage_url": "http://placehold.it/120",
        "fortName": "Golconda",
        "fortPlace": "Hyderabad - Telangana",
        "fortConstructedYear": 1500
    }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (fort) => {
  return replaceAll(fort.fortName, ' ', '-');
};

class FortApi {
    static getAllForts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], forts));
            }, delay);
        });
    }

    static saveFort(fort) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (fort.fortName.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (fort._id) {
          const existingFortIndex = forts.findIndex(a => a._id == fort._id);
          forts.splice(existingFortIndex, 1, fort);
        } else {
          fort._id = generateId(fort);
          forts.push(fort);
        }

        resolve(Object.assign({}, fort));
      }, delay);
    });
  }
}

export default FortApi;
