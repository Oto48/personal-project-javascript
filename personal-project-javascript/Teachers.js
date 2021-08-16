const Teacher = class {
  data = new Set()
  count = 1;
  add(object){
      if(typeof object !== 'object'){
          throw new Error('data has to be object');
      }
      if(!object.name || typeof object.name.first !== 'string' || typeof object.name.last !== 'string'){
          throw new Error('requiers name with string values');
      }
      if(typeof object.image !== 'string'){
          throw new Error('image has to be a string');
      }
      if(typeof object.dateOfBirth !== 'string'){
          throw new Error('dateOfBirth has to be a string');
      }
      if(!Array.isArray(object.emails) || typeof object.emails === 'undefined'){
          throw new Error('define emails with type array');
      }
      if(typeof object.emails[0].email === 'undefined' || typeof object.emails[0].email !== 'string'){
        throw new Error('define email with type string');
      }
      if(typeof object.emails[0].primary === 'undefined' || typeof object.emails[0].primary !== 'boolean'){
        throw new Error('define primary with type boolean');
      }
      if(!Array.isArray(object.phones) || typeof object.phones === 'undefined'){
        throw new Error('define phones with type array');
      }
      for(let i = 0; i < object.phones.length; i++){
        if(typeof object.phones[i] !== 'object'){
          throw new Error('phones array must contain objects');
        }
        if(!object.phones[i].phone || typeof object.phones[i].phone !== 'string'){
          throw new Error('please define phone with typeof string insite phones');
        }
        if(!object.phones[i].primary || typeof object.phones[i].primary !== 'boolean'){
          throw new Error('please define primary with typeof boolean insite phones');
        }
      }
      if(typeof object.sex === 'undefined' || typeof object.sex !== 'string'){
        throw new Error('define sex with type string');
      }
      if(object.sex !== 'male' && object.sex !== 'female'){
        throw new Error('sex has to be male or female');
      }
      if(typeof object.subjects === 'undefined' || !Array.isArray(object.subjects)){
        throw new Error('define sex with type string');
      }
      for(let i = 0; i < object.subjects.length; i++){
        if(typeof object.subjects[i] !== 'object'){
          throw new Error('subjects array must contain objects');
        }
        if(!object.subjects[i].subject || typeof object.subjects[i].subject !== 'string'){
          throw new Error('please define subject with typeof string insite object');
        }
      }

      if(isNaN(Date.parse(object.dateOfBirth))){
        throw new Error("please write correct date format")
      }

      let date = object.dateOfBirth;
      let mydate = new Date(date);
      let str = mydate.toDateString();
      object.dateOfBirth = str.substr(str.indexOf(' ') + 1)

      object.id = this.count++;
      this.data.add(object);
      return object.id;
  }
  read(id){
      let object;
      this.data.forEach((value) => {
          if(value.id === id){
            object = value;
          }
      });
      if(typeof object === 'undefined'){
        throw new Error('this kind of id does not exist')
      }
      return object;
  }

  update(id,value){
      let object;
      this.data.forEach((value) => {
          if(value.id === id){
              object = value;
          }
      });
      if(typeof object === 'undefined'){
        throw new Error('id does not exist');
      }
      const NewObject = value;
      for (const [key, value] of Object.entries(NewObject)) {
          if(typeof object[key] === 'undefined'){
              throw new Error('value in object does not exists');
          }
          object[key] = value;
      }
      this.add(object)
      object.id = id;
      return object.id;
  }

  remove(id){
      let object;
      this.data.forEach((value) => {
          if(value.id === id){
              object = value;
          }
      });
      this.data.delete(object);
  }

};


const teachers = new Teacher()

const data = {
"name": {
  "first": "John",
  "last": "Doe"
},
"image": "string",
"dateOfBirth": "04 11 1985", // format date
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
"sex": "male", // male or female
"subjects": [
  {
    "subject": "math"
  }
],
"description": "string",
}

const data2 = {
"name": {
  "first": "Jasper",
  "last": "Collins"
},
"image": "string",
"dateOfBirth": "07 24 1989", // format date
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
"sex": "male", // male or female
"subjects": [
  {
    "subject": "chemistry"
  }
],
"description": "string",
}

const data3 = {
"name": {
  "first": "Raphael",
  "last": "Richardson"
},
"image": "string",
"dateOfBirth": "5 08 1991", // format date
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
"sex": "male", // male or female
"subjects": [
  {
    "subject": "art"
  }
],
"description": "string",
}

const data4 = {
"name": {
  "first": "Elias",
  "last": "Brown"
},
"image": "string",
"dateOfBirth": "11 20 1975", // format date
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
"sex": "male", // male or female
"subjects": [
  {
    "subject": "physics"
  }
]
}

const data5 = {
"name": {
  "first": "oto",
  "last": "chokhonelidze"
},
"image": "string",
"dateOfBirth": "03 11 1999", // format date
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
"sex": "male", // male or female
"subjects": [
  {
    "subject": "physics"
  }
]
}

const teacherId = teachers.add(data);
const teacher2Id = teachers.add(data2);
const teacher3Id = teachers.add(data3);
const teacher4Id = teachers.add(data4);
const teacher5Id = teachers.add(data5);

// console.log(teachers.read(teacherId));
// console.log(teachers.read(teacher3Id));
teachers.remove(teacher5Id)
// console.log(teacherId)
// console.log(teacher2Id)
// console.log(teacher3Id)
// console.log(teacher4Id)

const updatedProfile = {
  name:{
      first: 'Jimmy',
      last: 'Doe'
  },
  dateOfBirth:'05 10 1987',
}

const teacherId2 = teachers.update(teacherId, updatedProfile)
// teachers.read(teacherId2)

console.log(teachers.data)





