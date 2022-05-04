// const natalia = {
//     name: 'natalia',
//     age: 20,
//     cursosAprobados: [
//         "Curso definitivo de HTML Y CSS",
//         "Curso practico de HTML Y CSS",
//     ],

//     aprobarCurso(nuevoCurso){
//         this.cursosAprobados.push(nuevoCurso);
//     },

// };

// //Hacer que Natalia apruebe otro curso

// natalia.cursosAprobados.push("Curso de responsive design");

// natalia.name = "Juan";

// natalia.age += 1;



// function Student(name, age, cursosAprobados){
//     this.name = name;
//     this.age = age;
//     this.cursosAprobados = cursosAprobados;

// }

// Student.prototype.aprobarCurso = function(nuevoCurso){
//     this.cursosAprobados.push(nuevoCurso);
// }

// const juanita = new Student("Juanita Alejandra", 15, ["Curso de POO", "Videojuegos"]);

// //Prototipos con la sintaxis de clases

// class Student2 extends Student{
//     constructor(name, age, cursosAprobados){
//         super(name, age, cursosAprobados);
//         this.name = name;
//         this.age = age;
//         this.cursosAprobados = cursosAprobados;
//     }

//     aprobarCurso(nuevoCurso){
//         this.cursosAprobados.push(nuevoCurso);
//     }
// }

// const Cesar = new Student2(
//     "Cesar Ochoa",
//     23,
//     ["Curso de JavaScript", "Curso practico de React"]
// );


const Juan1 = {
    name: "Juan DC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjandc",
        instagram: "fjuandc"
        facebook: undefined,
    },
    approvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],

    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de responsive design",
            ]
        },

        {
            name: "Escuela de videojuegos",
            courses: [
                "Curso  Introduccion a la produccion de videojuegos",
                "Curso Unreal Engine",
                "Curso de Unity",
            ]
        },
    ]
};


const miguelito1 = {
    name: "Miguel",
    username: "miguelito",
    points: 150,
    socialMedia: {
        twitter: "miguecdas",
        instagram: "miguecdas"
        facebook: undefined,
    },
    approvedCourses: [
        "Curso definitivo de Typescript",
        "Curso practico de Typescript",
    ],

    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso practico de HTML y CSS",
                "Curso de responsive design",
            ]
        },

        {
            name: "Escuela de videojuegos",
            courses: [
                "Curso  Introduccion a la produccion de videojuegos",
                "Curso Unreal Engine",
                "Curso de Unity",
            ]
        },
    ]
};
