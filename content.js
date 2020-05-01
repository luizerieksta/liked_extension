

//arrays
var textArray = ["Did you really see this picture?", "Did you even like it?", "Why are you liking this?", "STOP", "Stop liking everything!", "Did you really like it?", "How many pictures have you already liked?", "Liking this won't change anything", "What is this photo ❓❓❓"];
var comment = ["I do not like this", "Wow... so fake 🙄", "How many filters did you apply to that photo? 😜😜", "What an original photo..", "Not my favorite 💩", "It is a no from me ❌❌", "Why did you post this? 🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️", "How many followers have you bought? 🤷‍♀️", "I do not feel like seeing this 🙅‍♀️🙅‍♀️", "I did not actually want to like this...", "Not actually sure why I liked it 🤔", "What if we all started posting comments instead of likes?"];


//article contains the post
var article = "article";


//select a random function that is going to happen
function selectFunction() {

	var functions = [manipulateLikes(this), appendText(this), postComment(this), emptyFunction1(this), emptyFunction2(this)];
	var randFunction = Math.round(Math.random() * 4);

}



//random function gets selected
var randFunction;
$("*").dblclick(function() {
	randFunction = Math.round(Math.random() * 4);
	console.log(randFunction);
});


//check for when scrolling occurs and only then call function
$(window).scroll($.debounce( 250, function(){

	//one function happens when article(post) is double clicked
    $(article).dblclick(function() {

	var functions = [manipulateLikes, appendText, postComment, emptyFunction1, emptyFunction2];

    	functions[randFunction](this);

	
    });
}));


//one possible function - posting a comment
function postComment(article) {

	//selects a random comment from the array above
	var rand = Math.round(Math.random() * 11);
	var commentText = comment[rand];

	//appends it to the coment box from the user's username and deletes all the existing comments 
	$(article).find(".Igw0E.IwRSH.eGOV_._4EzTm.XfCBB").html('<div><div class="                   Igw0E   rBNOH        eGOV_     ybXk5    _4EzTm                                                                                                           "><div class="          QzzMF         Igw0E     IwRSH      eGOV_        vwCYk                                                                                                               " data-testid="post-comment-root"><a class="FPmhX notranslate MBL3Z" title="comment" href="/seychelles.cc/">'     +username1+   '</a>&nbsp;<span><span>' +commentText+ '</span></span></div><span class=""><div class="_2ic5v"><button class="wpO6b ZQScA" type="button"><svg aria-label="Like" class="_8-yf5 " fill="#999999" height="12" viewBox="0 0 48 48" width="12"><path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path></svg></button></div></span></div></div>'
    );

}

//second possible function - appending text
function appendText(article) {

	//selects a random string from the array above
	var rand = Math.round(Math.random() * 8);
    var $text = $("<div class='text'></div>");
    $text.text(textArray[rand]);

    //appends text on top of the image
    $(article).find( '._9AhH0' ).html($text);
}


//third possible function - erasing likes
function manipulateLikes(article) {

	//replaces the like couunt with a message that says that all likes were erased by the user
    $(article).find( '.Nm9Fw' ).html('<div class="Nm9Fw"><a class="FPmhX notranslate  cqXBL" title="username" href="/sabiinezv/">'+ username1 +'</a> erased all likes <button class="sqdOP yWX7d     _8A5w5    " type="button"><span></span></button></div>'
    );

}

//empty function so that sometimes nothing happens
function emptyFunction1(article) {
}

//empty function so that sometimes nothing happens
function emptyFunction2(article) {
}



//getting the user's username for the use of posting a comment and erasing the like count
var username = document.getElementsByClassName("gmFkV");
var username1 = username[0].innerText;














