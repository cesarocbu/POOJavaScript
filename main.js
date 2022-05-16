class Course {
    constructor({
        name,
        classes = [],
    }){
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: "Curso gratis de programación básica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
});
const cursoPractiHTML = new Course({
    name: "Curso practico de HTML y CSS",
});


class LearningPaths{
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        "Curso definitivo de HTML y CCS",
        "Curso practico de HTML y CCS"
    ],
});

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        "Curso DataBusiness",
        "Curso Dataiz"
    ],
});

const escuelaVgs = new LearningPaths({
    name: "Escuela de Video Juegos",
    courses: [
        cursoProgBasica
        "Curso de Unity",
        "Curso de Unreal Engine"
    ],
});


class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],

    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const Juan2 = new Student ({
    name: "Juan DC",
    username: "Juanelodc",
    email: "juanelodc@gmail.com"
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});


const Cesar2 = new Student ({
    name: "Cesar OB",
    username: "Cesar OB",
    email: "cesarocbu@gmail.com"
    instagram: "@cesarocbu",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});

