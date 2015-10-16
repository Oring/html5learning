Meteor.methods({ // Meteor.methods : 외부에 노출되지 않은 restAPI.
    friendsList: function(){ // key(friendsList) -> 클라이언트가 restAPI로 key를 콜
        return Friends.find({}, {sort: {no:1}}); // json을 던져줌.
    }
});