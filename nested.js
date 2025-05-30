let college ={
    name: "BAF Shaheen",
    class:[11,12],
    events: "Rag day, 21st feb, independence day",
    unique:{
        color: "blue",
        badge: "Eagle",
        campus:
        {
            area:['chittagong','Dhaka','Jassore']
        }
    }

    
}
delete college.unique.badge;
console.log(college.class[0]+college.unique.campus.area[0])
console.log(college)