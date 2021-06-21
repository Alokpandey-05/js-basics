var user =   {

    first_name:"alok",
    
    last_name:"pandey",
    
    role : "admin" ,
    
    login_count: 32,
    
    isheloggedinfromfacebook: true,

    course_list : [],

    buyCourse : function (courseName) {
this.course_list.push(courseName);
},

    getCourseCount : function() {
    return `${this.first_name} is enrolled in ${this.course_list.length} courses`;
    }
}   



function info()
{

    console.log(user.getCourseCount());
    user.buyCourse("react JS");
    user.buyCourse("angular JS");
    console.log(user.getCourseCount());

    console.table(user);
}
info();

