type teacherObject = {
    id?:number,
    name:{first:string; last:string},
    image:string,
    dateOfBirth: string,
    emails:{email:string; primary: boolean}[],
    phones:{phone:string; primary: boolean}[],
    sex: string,
    subjects:{subject:string;}[],
    description?:string,
  };
  
  const Teacher = class {
    data:any = new Set()
    count = 1;
    add(object:teacherObject){
      let date = object.dateOfBirth;
      let mydate = new Date(date);
      let str = mydate.toDateString();
      object.dateOfBirth = str.substr(str.indexOf(' ') + 1)
        
      object.id = this.count++;
      this.data.add(object);
      return object.id;
    }
  
    read(id:number){
      let object:{};
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
  
    update(id:number, value:object){
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
  
    remove(id:number){
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
      },
      {
        "subject": "art"
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
  