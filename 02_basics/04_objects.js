// const tinderUser= new Object()

const tinderUser= {}

tinderUser.name="darshan"
tinderUser.age=19
tinderUser.email="darsh@gamail.com"
// console.log(tinderUser);

const regularUser= {
    email: "dars@gmail.com" ,
        userName:  {
            firstName: "darshan",
            lastName: "Gurkha"
    }
}
// console.log(regularUser.userName.firstName);

const obj1= {1:"a", 2:"b"}
const obj2= {3: "a", 4:"b"}
// const obj3= {obj1,obj2}                           //not recommend
// const obj3= Object.assign({},obj1,obj2)        //good method
// console.log(obj3);

const obj3= {...obj1,...obj2}          // 90 percent usage by this method 
// console.log(obj3);

const users = [
    {
        name: "darshan",
        email: "darshan@gmail.com"
    } ,
        {
        name: "darshan",
        email: "darshan@gmail.com"
    },
        {
        name: "darshan",
        email: "darshan@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));


/// object structure///

const course = {
   coursename :"Js tutorial",
   price : "999",
   courseInstructor : "darshan"
}

const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);                           //can also do in this


// {
//     "name" : "darshan",
//    "age": "19",                                   //json format
//     "college": "sigma university"
// }

[
    {},
    {},
    {},
]

