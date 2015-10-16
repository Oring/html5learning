Template.friendsListItem.events({
    'click [name=remove]': function(evt, tmpl){ // evt 엔 click 이벤트 들어옴, tmpl 엔 모든 DOM 정보가 들어온다.
        console.log($(evt.target).attr('id'));
        console.log(this);
        //$(evt.target)으로 호출 가능 but array로 다 튀어나온다, (this로 쓰면) 스코프가 정해진다.
        //console.log(this.no); // key값을 얻는 과정이 단순하다. data context 는 this 에 주입 됨
        //console.log(this.email);
        //console.log(this);
    }
});