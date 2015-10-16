/* EXAMPLE

 Template.friendsList.helpers({ // helper : 데이터 전달 역할. helpers({}) 의 '{}'가 object 이다
     datas: function(){ // object 로 반환 해보자 ! key : value 중에 value값을 function으로 하고 fuction 안에 모든짓을 할 수 있다.
         return {
             a: 'a data',
             b: 'b data',
             c: 'c data'
         }
     }
 })


 Template.friendsList.events({ // meteor 에서 기본적으로 제공하는 객체 Template, event
     'click #btn': function (evt,tmpl) { // json 구조의 이벤트 key값:value값 => 'html에서사용하는모든이벤트명 css셀렉터' : 콜백함수 // tmpl 안에 css셀렉터가 포함.
         alert("clicked!");
     }// 오브젝트를 넣을수 있다 ! (meteor가 제공하는 이벤트 추가 방식)
 });

 */

Template.friendsList.onCreated(function(){
    that = this;
    that.autorun(function(){ // autorun 내부적으로 스택처럼 인식. 데이터가 추가가되면 자동적으로 넘겨줌 (Reactive)
        this.subscribe("fridendsList",{}); // '{}' 다 달라
    })
})


Template.friendsList.helpers({ // 화면에다 데이터 전달.
    listName: function(){
        return "my friend list"
    },
    list: function(){
        return Friends.find(); // array로 리턴 . 처음에 Friends는 비어있다. 구독신청을 하게되면 들어온다.

        /* 테스트용 데이터 설정
        var arr = [
            {no:4,name:"박승현",email:"ppillip@gmail.com"}
            ,{no:3,name:"전지현",email:"jjh@gmail.com"}
            ,{no:1,name:"김완선",email:"kws@gmail.com"}
            ,{no:2,name:"카라",email:"kara@gmail.com"}
        ];
        arr = _.sortBy(arr, function(obj) {return obj.no;}); // jQuery나 underscore는 기본적으로 설치되어있다.
        return arr;
        */

        /* 전통적인 데이터 겟 방식
        Meteor.call('friendsList', function(err, rslt){
            console.log(rslt);
            Session.set(rslt);
        });
        //return Session.get(rslt);
        */


        return Friends.find({}, { sort : {no:-1} } ) // query 문. '{}' 전체데이터를 다가지고 와라. (클라이언트에서 DB를 달라고 한 상태!!! 위험)
        // 모든 데이터를 클라이언트에게 쏴주는 상태. "autopublish" 때문!. meteor 정신:"일단 개발부터!" (meteor remote autopublish)
    }
})


Template.friendsList.events({

});