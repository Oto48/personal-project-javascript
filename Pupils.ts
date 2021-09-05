type pupilObject = {
    id?:number,
    name:{first:string; last:string},
    image:string,
    dateOfBirth: string,
    phones:{phone:string; primary: boolean}[],
    sex: string,
    description?:string,
};


const Pupils = class {
    data:any = new Set()
    static count = 1;
    add(object:pupilObject){

        let date = object.dateOfBirth;
        var mydate = new Date(date);
        var str = mydate.toDateString();
        object.dateOfBirth = str.substr(str.indexOf(' ') + 1)

        object.id = Pupils.count++;
        this.data.add(object);
        return object;
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
        return object;
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



const pupildata = {
  "name": {
    "first": "Oto",
    "last": "Chokhonelidze"
  },
  "image": "string",
  "dateOfBirth": "11 03 1999",
  "phones": [
    {
      "phone": "555444222",
      "primary": true
    }
  ],
  "sex": "male",
  "description": "string"
}

const pupildata2 = {
  "name": {
    "first": "Leroy",
    "last": "Rowland"
  },
  "image": "string",
  "dateOfBirth": "08 05 2005",
  "phones": [
    {
      "phone": "552666777",
      "primary": true
    }
  ],
  "sex": "male",
  "description": "string"
}

const pupildata3 = {
  "name": {
    "first": "Mark",
    "last": "Wu"
  },
  "image": "string",
  "dateOfBirth": "11 04 2005",
  "phones": [
    {
      "phone": "555999888",
      "primary": true
    }
  ],
  "sex": "male",
  "description": "string"
}

const pupildata4 = {
  "name": {
    "first": "Joe",
    "last": "Caldwell"
  },
  "image": "string",
  "dateOfBirth": "06 23 2005",
  "phones": [
    {
      "phone": "555111222",
      "primary": true
    }
  ],
  "sex": "male",
  "description": "string"
}

const pupildata5 = {
  "name": {
    "first": "Joe",
    "last": "Caldwell"
  },
  "image": "string",
  "dateOfBirth": "07 07 2005",
  "phones": [
    {
      "phone": "555111222",
      "primary": true
    }
  ],
  "sex": "male",
  "description": "string"
}

const pupils = new Pupils();

export const pupil = pupils.add(pupildata);

const pupil2 = pupils.add(pupildata2);

const pupil3 = pupils.add(pupildata3);

const pupil4 = pupils.add(pupildata4);

const pupil5 = pupils.add(pupildata5);


pupils.read(pupil.id)

pupils.remove(pupil5.id)

const pupilupdatedProfile = {
    name:{
        first: 'Terry',
        last: 'Davis'
    },
    image:"string"
}

pupils.update(pupil2.id, pupilupdatedProfile)
// console.log(pupils.data)
