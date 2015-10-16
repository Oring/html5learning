Friends = new Mongo.Collection("friends"); // "friends" table 생성 !!


/* 테스트 데이터
if(Meteor.isServer){ // Sever 인지 아닌지 체크 !!
    Meteor.startup(function(){
        //Friends.remove({});
        if(Friends.find().count() === 0){
            Friends.insert({no:1,name:"김완선",email:"kws@gmail.com"});
            Friends.insert({no:2,name:"카라",email:"kara@gmail.com"});
            Friends.insert({no:3,name:"전지현",email:"jjh@gmail.com"});
            Friends.insert({no:4,name:"박승현",email:"ppillip@gmail.com"});
        }
    });
}
    */