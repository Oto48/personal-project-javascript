import {pupil, pupil2, pupil3, pupil4} from './Pupils.js';

const Groups = class {
    data:any = new Set()
    static count = 1;
    add(room:number){
        const group:{id?:number, room?: number, pupils?:[]} = {};
        group.id = Groups.count++;
        group.room = room;
        group.pupils = [];
        this.data.add(group);
        return group.id;
    }

    update(id:number,updated:{room:number}){
        let object;
        this.data.forEach((value:{id:number}) => {
            if(value.id === id){
              object = value;
            }
        });
        if(typeof object === 'undefined'){
          throw new Error('id does not exist');
        }
        if(typeof updated.room === 'undefined'){
            throw new Error('please define new room for update')
        }
        this.data.forEach((value:{id:number,room:number}) => {
            if(value.id === id){
                return value.room = updated.room;
            }
        });
    }

    read(id:number){
        let object;
        this.data.forEach((value:{id:number}) => {
            if(value.id === id){
                object = value;
            }
        });
        if(typeof object === 'undefined'){
          throw new Error('this kind of id does not exist')
        }
        return object;
    }

    addPupil(id:number,pupil:object){
        this.data.forEach((value:{id:number,pupils:{}[]}) => {
            if(value.id === id){
                value.pupils.push(pupil)
            }
        })
    }

    readAll(){
        let arr:{}[] = [];
        this.data.forEach((value:{}) => {
            arr.push(value)
        })
        return arr;
    }

    removePupil(id:number,pupil:number){
        let object:any;
        this.data.forEach((value:{id:number}) => {
            if(value.id === id){
                object = value;
            }
        });
        let removepupil:any;
        object.pupils.forEach((element:{id:number}) => {
            if(element.id === pupil){
                removepupil = element.id;
            }
        });
        if(typeof removepupil === 'undefined'){
            throw new Error("pupil id is not correct")
        }
        object.pupils = object.pupils.filter( (el:{id:number}) => el.id !== removepupil )
        return object.pupils
    }
}

const room = 236;
const room2 = 420;
const groups = new Groups();


const groupId = groups.add(room);

const group2Id = groups.add(room2);

console.log(groups)


console.log(pupil)


groups.addPupil(groupId, pupil);
groups.addPupil(groupId, pupil2);

groups.addPupil(group2Id, pupil3);
groups.addPupil(group2Id, pupil4);


groups.update(groupId, {
  room: 237
});


groups.removePupil(groupId, pupil.id);

console.log(groups.readAll())

export {Groups, groups, groupId, group2Id}