const Subject = class {
    constructor(title, lessons, description){
        this.id = Subject.count;
        if(typeof title !== 'string' || title === 'undefined'){
            throw new Error("define title with type string")
        }else{
            this.title = title;
        }
        if(typeof lessons !== 'number' || lessons === 'undefined'){
            throw new Error("define lessons with type number")
        }else{
            this.lessons = lessons;
        }
        if(typeof description !== 'undefined'){
            if(typeof description !== 'string'){
                throw new Error("description has to be a string")
            }else{
                this.description = description;
            }
        }
        this.increase();
    }
    static count = 1;
    increase(){
        return Subject.count++;
    }
};

const LMS = class{
    list = new Set();

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
        let list = [];
        this.list.forEach(e => {
            const object = {};
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

const history = new Subject('history',24);
const math = new Subject('math',19,'this is math');
const art = new Subject('art',22);
const physics = new Subject('physics',16);
const chemistry = new Subject('chemistry',12);

const lms = new LMS()
lms.add(history)
lms.add(math)
lms.add(art)
lms.add(physics)
lms.add(chemistry)
lms.remove(history)
lms.verify(history)
lms.verify(art)
console.log(lms.readAll());
