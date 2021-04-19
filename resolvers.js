const courseModel = require("./coursemodel");

const resolvers = {
    getCourse: (args, req) => courseModel.courseList(req, "select id, course_name, category, price, language, email, stack from course").then(data => data),
    getCourseInfo: (args, req) => courseModel.courseInfo(req, "select id, course_name, category, price, language, email, stack from course where id=?", [args.id]).then(data => data[0]),
    createCourse: (args, req) => {
        let sql = "insert into course (course_name, category, price, language, email, stack) values(?,?,?, ?,?,?)";
        return courseModel.createCourse(req, sql, [
            args.input.course_name,
            args.input.category,
            args.input.price,
            args.input.language,
            args.input.email,
            args.input.stack,
        ]).then(data => data).catch(err => err);
    }
}

module.exports = resolvers;
