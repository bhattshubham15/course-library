const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Course {
        id: Int
        course_name: String
        category: String
        price: Int
        language: String
        email: String
        stack: String
    }

    enum Stack {
        WEB
        MOBILE
    }

    type Query {
        getCourse: [Course]
        getCourseInfo(id: Int): Course
    }

    input CourseInput {
        id: Int
        course_name: String!
        category: String!
        price: Int!
        language: String!
        email: String!
        stack: String!
    }

    type Mutation {
        createCourse (input: CourseInput): Int
    }
`);

module.exports = schema;


// create 

// mutation {
// 	createCourse(input: {
//     courseName: "Python",
//     category: "CS",
//     price: 499,
//     language: "English",
//     email: "abc@gmail.com",
//     stack: WEB,
//     teachingAssists: {
//       firstName: "Shubham",
//       lastName: "Bhatt",
//       experience: 2
//     }
//   }){
//     id,
//     courseName
//   }
// }

//get

// query {
//     getCourse(id: "aja"){
//       id,
//       teachingAssists {
//         experience
//       }
//     }
//   }

//get without id
// query {
//     getCourse{
//       id,
//       course_name,
//       category
//     }
//   }