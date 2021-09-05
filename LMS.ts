const Subject = class{
    id: number;
    title:string;
    lessons: number;
    description?: string;
    constructor(title: string, lessons: number, description?: string){
        this.id = Subject.count;
        this.title = title;
        this.lessons = lessons;
        if(description){
            this.description = description;
        }
        this.increase();
    }
    static count: number = 1;
    increase(){
        return Subject.count++;
    }
};

const LMS = class{
    list: any = new Set();

    add(object){
        if(typeof object !== 'object'){
            console.log('error')
        }else{
            return this.list.add(object);
        }
    }

    remove(subject){
        this.list.forEach((key) => {
            if(key.title === subject.title){
                this.list.delete(key)
            }
        })
    }

    verify(subject){
        const object = subject;
        const find = this.list;
        return find.has(object)
    }

    readAll(){
        let list:{}[] = [];
        let LMSlist: any = this.list
        LMSlist.forEach(e => {
            console.log(e)
            const object: any = {};
            object.subjectId = e.id;
            object.title = e.title;
            object.lessons = e.lessons;
            if(e.description){
                object.description = e.description;
            }
            list.push(object);
        })
        return list;
    }
}



const a = new Subject('history',24, 'this is history');
const math = new Subject('math',19);
const art = new Subject('art',22,'this is art');
const physics = new Subject('physics',16, 'this is physics');
const chemistry = new Subject('chemistry',12,'this is chemistry');

const lms = new LMS();

lms.add(a);
lms.add(math);
lms.add(art)
lms.add(physics)
lms.add(chemistry)

lms.remove(a);
// console.log(lms.verify(a))
// console.log(lms.verify(math))
// console.log(lms.readAll());

// console.log(lms)
