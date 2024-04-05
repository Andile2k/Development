let courses = ["Javascript", "Java", "Angular", "React"];//let courses = ["Javascript", "Java", "Angular", "React"];
 let i; //Counter for the for-loop
 let length = courses.length; //total Number of courses (Array)
 let space= ""; // Home made space
 
 for(i=0; i<length;){
    space = courses[i]+=space
    i++; //
     
 }
 console.log(courses)



 //Lets display text five times according to days of week
 const n=5;
 //
 for (let i=1; i<=n; i++){
    console.log(`Lets code in javascript` + i + ' days of week')
 }