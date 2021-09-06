"use strict";
const Teacher = class {
    constructor() {
        this.data = new Set();
        this.count = 1;
    }
    add(object) {
        let date = object.dateOfBirth;
        let mydate = new Date(date);
        let str = mydate.toDateString();
        object.dateOfBirth = str.substr(str.indexOf(' ') + 1);
        object.id = this.count++;
        this.data.add(object);
        return object.id;
    }
    read(id) {
        let object;
        this.data.forEach((value) => {
            if (value.id === id) {
                object = value;
            }
        });
        if (typeof object === 'undefined') {
            throw new Error('this kind of id does not exist');
        }
        return object;
    }
    update(id, value) {
        let object;
        this.data.forEach((value) => {
            if (value.id === id) {
                object = value;
            }
        });
        if (typeof object === 'undefined') {
            throw new Error('id does not exist');
        }
        const NewObject = value;
        for (const [key, value] of Object.entries(NewObject)) {
            if (typeof object[key] === 'undefined') {
                throw new Error('value in object does not exists');
            }
            object[key] = value;
        }
        this.add(object);
        object.id = id;
        return object.id;
    }
    remove(id) {
        let object;
        this.data.forEach((value) => {
            if (value.id === id) {
                object = value;
            }
        });
        this.data.delete(object);
    }
};
const teachers = new Teacher();
const data = {
    "name": {
        "first": "John",
        "last": "Doe"
    },
    "image": "string",
    "dateOfBirth": "04 11 1985",
    "emails": [
        {
            "email": "johndoe@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "111111111",
            "primary": true
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "math"
        }
    ],
    "description": "string",
};
const data2 = {
    "name": {
        "first": "Jasper",
        "last": "Collins"
    },
    "image": "string",
    "dateOfBirth": "07 24 1989",
    "emails": [
        {
            "email": "jaspercollins@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "554234455",
            "primary": true
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "chemistry"
        }
    ],
    "description": "string",
};
const data3 = {
    "name": {
        "first": "Raphael",
        "last": "Richardson"
    },
    "image": "string",
    "dateOfBirth": "5 08 1991",
    "emails": [
        {
            "email": "raphrichardson@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "354234544",
            "primary": true
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "art"
        }
    ],
    "description": "string",
};
const data4 = {
    "name": {
        "first": "Elias",
        "last": "Brown"
    },
    "image": "string",
    "dateOfBirth": "11 20 1975",
    "emails": [
        {
            "email": "eliasbrown@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "555888777",
            "primary": true
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "physics"
        },
        {
            "subject": "art"
        }
    ]
};
const data5 = {
    "name": {
        "first": "oto",
        "last": "chokhonelidze"
    },
    "image": "string",
    "dateOfBirth": "03 11 1999",
    "emails": [
        {
            "email": "eliasbrown@gmail.com",
            "primary": true
        }
    ],
    "phones": [
        {
            "phone": "555888777",
            "primary": true
        }
    ],
    "sex": "male",
    "subjects": [
        {
            "subject": "physics"
        }
    ]
};
const teacherId = teachers.add(data);
const teacher2Id = teachers.add(data2);
const teacher3Id = teachers.add(data3);
const teacher4Id = teachers.add(data4);
const teacher5Id = teachers.add(data5);
// console.log(teachers.read(teacherId));
// console.log(teachers.read(teacher3Id));
teachers.remove(teacher5Id);
// console.log(teacherId)
// console.log(teacher2Id)
// console.log(teacher3Id)
// console.log(teacher4Id)
const updatedProfile = {
    name: {
        first: 'Jimmy',
        last: 'Doe'
    },
    dateOfBirth: '05 10 1987',
};
const teacherId2 = teachers.update(teacherId, updatedProfile);
teachers.read(teacherId2);
// console.log(teachers.data)
