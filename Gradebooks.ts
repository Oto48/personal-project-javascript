import {Groups, groups, groupId , group2Id} from "./Groups.js";

import {pupil, pupil2, pupil3, pupil4} from "./Pupils.js";

import{Subject, LMS, lms, math, art, physics, chemistry} from "./LMS.js";

import{Teacher, teachers, teacherId, teacher2Id, teacher3Id, teacher4Id} from "./Teachers.js";


interface records {
    // [key: string]: any;
    pupilId: number;
    teacherId: number;
    subjectId: number;
    lesson: number;
    mark: number;
};


const Gradebooks = class {
    groups:any;
    teachers:any;
    lms:any;
    constructor(groups:any,teachers:any,lms:any){
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
    }

    gradebooks:any = new Set();

    static count = 1;

    add(lvl:number,id:number){
        const gradebook:{[key: string]: any;} = {}
        this.groups.data.forEach((value:{id:number}) => {
            if(value.id === id){
                gradebook.id = Gradebooks.count++;
                gradebook.level = lvl;
                gradebook.group = value;
                gradebook.records = [];
            }
        })
        this.gradebooks.add(gradebook)
    }

    clear(){
        this.gradebooks.clear()
    }

    addRecord(id:number,record:records){
        let findId;
        let findpupil;
        this.gradebooks.forEach((value:{records:any, id:number, group:{[key: string]: any;}}) => {
            if(value.id === id){
                findId = value;
                value.group.pupils.forEach((pupil:{id:number, name:{first:string, last:string},}) =>{
                    if(record.pupilId === pupil.id){
                        findpupil = pupil;
                        for(let i = 0; i < value.records.length; i++){
                            if(value.records[i].id === pupil.id){
                                const pupilrecord2:{[key: string]: any;} = {};
                                let sub:any;
                                this.teachers.data.forEach((value:{id:number, name:any}) =>{
                                    if(value.id === record.teacherId){
                                        sub = value;
                                        pupilrecord2.teacher = value.name.first+" "+value.name.last;
                                    }
                                })
                                let checksubject:any;
                                this.lms.list.forEach((value:{id:number, title:string}) =>{
                                    if(value.id === record.subjectId){
                                        let subjectname = value.title;
                                        sub.subjects.forEach((value:{subject:string}) => {
                                            if(value.subject === subjectname){
                                                checksubject = value.subject
                                            }
                                        })
                                        if(typeof checksubject === 'undefined'){
                                            throw new Error('this teacher does not teach this subject')
                                        }
                                        pupilrecord2.subject = value.title;
                                    }
                                })
                                pupilrecord2.lesson = record.lesson;
                                pupilrecord2.mark = record.mark;
                                return value.records[i].records.push(pupilrecord2)
                            }
                        }
                        const pupilrecord:{[key: string]: any;} = {};
                        pupilrecord.id = pupil.id;
                        pupilrecord.name = pupil.name.first+" "+pupil.name.last;
                        pupilrecord.records = [];
                        const pupilrecord2:{[key: string]: any;} = {};
                        let sub:{[key: string]: any;};
                        this.teachers.data.forEach((value:{id:number, name:{first:string, last:string}}) =>{
                            if(value.id === record.teacherId){
                                sub = value;
                                pupilrecord2.teacher = value.name.first+" "+value.name.last;
                            }
                        })
                        let checksubject:any;
                        this.lms.list.forEach((value:{id:number, title:string}) =>{
                            if(value.id === record.subjectId){
                                let subjectname = value.title;
                                sub.subjects.forEach((value:{subject:any}) => {
                                    if(value.subject === subjectname){
                                        checksubject = value.subject
                                    }
                                })
                                if(typeof checksubject === 'undefined'){
                                    throw new Error('this teacher does not teach this subject')
                                }
                                pupilrecord2.subject = value.title;
                            }
                        })
                        pupilrecord2.lesson = record.lesson;
                        pupilrecord2.mark = record.mark;
                        pupilrecord.records.push(pupilrecord2)
                        return value.records.push(pupilrecord)
                    }
                })
            }
        })

        if(typeof findId === 'undefined'){
            throw new Error('id does not exist')
        }
        if(typeof findpupil === 'undefined'){
            throw new Error('pupil does not exist in this group')
        }
    }

    read(gradebookId:number, pupilId:number){
        this.gradebooks.forEach((value:{id:number, records:any}) =>{
            if(gradebookId === value.id){
                for(let i = 0; i < value.records.length; i++){
                    if(value.records[i].id === pupilId){
                        const object:{[key: string]: any;} = {}
                        object.name = value.records[i].name;
                        object.records = value.records[i].records;
                        console.log(object);
                        return object;
                    }
                }
            }
        })
    }

    readAll(id:number){
        let object:any;
        this.gradebooks.forEach((value:{id:number}) => {
            if(value.id === id){
                object = value;
            }
        })
        if(typeof object === 'undefined'){
            throw new Error('id does not exist')
        }
        let arr:object[] = []
        object.records.forEach((value:object) =>{
            arr.push(value)
        })
        return arr;
    }

}

const pupilId = pupil.id;
const pupil2Id = pupil2.id;
const pupil3Id = pupil3.id;
const pupil4Id = pupil4.id;


const gradebooks = new Gradebooks(groups, teachers, lms);
const level = 1;
const gradebook = gradebooks.add(level, groupId);
const gradebook2 = gradebooks.add(level, group2Id);

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: math.id,
  lesson: 1,
  mark: 9
};
const record2 = {
  pupilId: pupil2Id,
  teacherId: teacher2Id,
  subjectId: chemistry.id,
  lesson: 3,
  mark: 8
};

const record3 = {
  pupilId: pupil3Id,
  teacherId: teacher3Id,
  subjectId: art.id,
  lesson: 2,
  mark: 10
};
const record4 = {
  pupilId: pupil4Id,
  teacherId: teacher4Id,
  subjectId: physics.id,
  lesson: 5,
  mark: 2
};


gradebooks.addRecord(1, record);
gradebooks.addRecord(1, record);
gradebooks.addRecord(1, record2);
gradebooks.addRecord(1, record2);
gradebooks.addRecord(2, record3);
gradebooks.addRecord(2, record4);
gradebooks.addRecord(2, record4);

console.log(gradebooks.readAll(2))
// gradebooks.clear()