const Parent = require('./models/parent');
const Student = require('./models/student');
const Teacher = require('./models/teacher');
const Subject = require('./models/subject');
const Position = require('./models/position');
const StudentGroup = require('./models/student-group');
const TeachersRole = require('./models/teachers-role');
const Book = require('./models/book');

const ParentService = require('./services/parent-service');
const StudentService = require('./services/student-service');
const TeacherService = require('./services/teacher-service');
const SubjectService = require('./services/subject-service');
const PositionService = require('./services/position-service');
const StudentGroupService = require('./services/student-group-service');
const TeachersRoleService = require('./services/teachers-role-service');
const BookService = require('./services/book-service');

let annie =  new Student({name: 'Annie Edison', contacts: '+ 1 1000 100', dateOfBirth: '01.01.1992'});
let annie_parent = new Parent({name: 'Blair Waldorf', contacts: '+ 1 1000 101', dateOfBirth: '01.01.1972' });
let diana = new Student({name: 'Diana', contacts: '+1 1000 300', dateOfBirth: '18.06.1992'});
let positionDirector = new Position(1000, 'Director');
let positionTeacher = new Position(500, 'Teacher');
let teacherCoraline = new Teacher({ name: 'Coraline Jones', contacts: '+1 1000 200', dateOfBirth: '09.09.1988'}, positionDirector);
let teacherEmma = new Teacher({ name: 'Emma', contacts: '+1 1000 200', dateOfBirth: '09.09.1988'}, positionTeacher);
let subjectAstronomy = new Subject('Astronomy', 7, 16, 10);
let subjectClassmaster = new Subject('Classmaster', 7, 1, 100);
let astronomyBook = new Book('Astronomy', 'Carl Sagan Cosmos', 7);
let astronomyTeacher = new TeachersRole(subjectAstronomy, teacherCoraline);
let astronomyTeacher2 = new TeachersRole(subjectAstronomy, teacherEmma);
let classMasterRole = new TeachersRole(subjectClassmaster, teacherCoraline);

annie.addParent(annie_parent);
subjectAstronomy.addBook(astronomyBook);
teacherCoraline.addSubject(subjectAstronomy);

let ravenclawGroup = new StudentGroup(7, 'Ravenclaw');
let slytherinGroup = new StudentGroup(7, 'Slytherin');
let gryffindorGroup = new StudentGroup(7, 'Gryffindor');
let hufflepufGroup = new StudentGroup(7, 'Hufflepuff');

slytherinGroup.save();
ravenclawGroup.save();
gryffindorGroup.save();
hufflepufGroup.save();

ravenclawGroup.addStudent(annie);
ravenclawGroup.addStudent(diana);
ravenclawGroup.addTeachersRole(astronomyTeacher);
ravenclawGroup.addTeachersRole(classMasterRole);
// hufflepufGroup.addTeachersRole(astronomyTeacher);
annie.save();
diana.save();


console.log(TeacherService.salary(teacherCoraline));
// let corRoles = TeachersRoleService.findRoles(teacherCoraline);
// console.log(corRoles);