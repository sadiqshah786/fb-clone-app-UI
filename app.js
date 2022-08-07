var modal = document.getElementById('myModal');
var btnClose = document.getElementById('closebtn');
var inputTab = document.getElementById('inputTab');

btnClose.onclick = function () {

    modal.style.display = "none";
}

inputTab.onclick = function () {
    modal.style.display = "block";
    swal({
        title: "Are you sure?",
        text: "Please Dn't post any irrelavant thing becuase you are using sadiq's account",
        icon: "warning",
        dangerMode: true,
    })
}



var colorlist = document.getElementById('colorlist')
function showBackground() {
    colorlist.style.visibility = "visible";
}

var textarea = document.getElementById('textArea');
function changeColor(paraID) {
    if (paraID == "im0") {
        textarea.classList = "bg0";
    }
    else if (paraID == "im1") {
        textarea.classList = "bg1";

    } else if (paraID == "im2") {
        // textarea.removeAttribute('class','bg1')
        textarea.classList = "bg2";
    } else if (paraID == "im3") {
        // textarea.removeAttribute('class','bg2')
        textarea.classList = "bg3";
    } else if (paraID == "im4") {
        textarea.classList = "bg4";
    } else if (paraID == "im5") {
        // textarea.removeAttribute('class','bg4')
        textarea.classList = "bg5";
        textarea.classList += " bg5 colortext";
    } else if (paraID == "im6") {
        // textarea.removeAttribute('class','bg5')
        textarea.classList = "bg6";
    } else if (paraID == "im7") {
        // textarea.removeAttribute('class','bg6')
        textarea.classList = "bg7";
    } else if (paraID == "im8") {
        // textarea.removeAttribute('class','bg7')
        textarea.classList = "bg8";
        textarea.classList += " bg8 colortext";
    } else if (paraID == "im9") {
        textarea.removeAttribute('class', 'bg8')
        textarea.classList += " bg9 colortext";
    } else if (paraID == "im10") {
        textarea.removeAttribute('class', 'bg9')
        textarea.classList = "bg10";
    } else if (paraID == "im11") {
        textarea.removeAttribute('class', 'bg10')
        textarea.classList = "bg11";
    }

}

// var postCreatoin = document.getElementById('postCreatoin')
// var box_img = document.getElementById('box_img')

// function ImageShow() {
//     box_img.style.display = "block";
// }
// const image_input = document.querySelector("#image-input");
// image_input.addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         const uploaded_image = reader.result;
//         document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//     });
//     reader.readAsDataURL(this.files[0]);
// });


function likes() {

    var like = document.getElementById('likes');
    var increment = document.getElementById('increment');
    like.style.color = "#000";
    increment.innerHTML = 1;
}

function comments() {
    var audince = document.getElementById('audince');
    var usercomment = document.getElementById('usercomment');
    var like_share = document.getElementById('like_share');

    like_share.style.display="none";
    
    audince.innerHTML = `
    <div class="like_share ">
	<div class="likes">
		<ul>
			<li><a><i class="fa-solid fa-thumbs-up" id="likes" onclick="likes()" ;></i><span id="increment">0</span> Likes</a></li>
			<li><a><i class="fa-solid fa-comment"></i><span>2</span> Comment</a></li>
		</ul>
	</div>
	<div class="share">
		<a href="#"><i class="fa-solid fa-share-nodes"></i><span>0</span> Share</a>
	</div>
</div>
<div class="commments shares" >
	<ul>
		<li><a href="#"><img src="assests/img/03.jpg" alt=""></a></li>
		<li><a href="#" class="com-author">Paul Molive</a>
			<p>Lorem ipsum dolor sit amet</p>
			<div class="links">
				<a href="#"> like</a>
				<a href="#"> Reply</a>
				<a href="#"> Translate</a>
				<a href="#" class="time_com"> 5 min</a>
			</div>
		</li>
	</ul>
</div>
<div class="commments">
	<ul>
		<li><a href="#"><img src="assests/img/1.png" alt=""></a></li>
		<li><a href="#" class="com-author">Sadiq Shah</a>
        <div class="post_div" ">
        <p>${usercomment.value}</p></div>
			<div class="links">
				<a href="#"> like</a>
				<a href="#"> Reply</a>
				<a href="#"> Translate</a>
				<a href="#" class="time_com">Just Now</a>
			</div>
		</li>
	</ul>
</div>
<div class="comment_box">
	<div class="sec_inner_comment">
		<div class="input_comment">
			<input type="text" name="" id="">
		</div>
		<div class="icons_comments">
			<ul>
				<li><a><i class="fa-solid fa-paper-plane" onclick="comments()" ;></i></a></li>
				<li><a href="#"><i class="fa-solid fa-paperclip"></i></a></li>
				<li><a href="#"><i class="fa-solid fa-face-meh-blank"></i></a></li>
				<li><a href="#"><i class="fa-solid fa-camera"></i></a></li>
			</ul>
		</div>
	</div>
</div>
                            `
}

function submit() {

   
    if (textarea.value === "") {
        swal("Please create a post")
    }
    else {
        postCreatoin.innerHTML = `
        <div class="resusebox" id="resusebox">

        <div class="post">
    
            <div class="author">
                <ul>
                    <li><a href="#"><img src="assests/img/1.png" alt=""></a></li>
                    <li class="name_auth"><a href="#">Sadiq Shah<span class="done_post"> Added New 
                                 Post</span></a>
                        <p class="time_post">Just Now</p>
    
                    </li>
                </ul>
            </div>
    
    
            <div class="dots">
                <i class="fa-solid fa-ellipsis"></i>
            </div>
    
        </div>
    
    
        <div class="content_post" id="pattern">
            <p>${textarea.value}</p>
        </div>
    
       
    
        <div class="like_share" id="like_share">
            <div class="likes">
                <ul>
                    <li><a ><i class="fa-solid fa-thumbs-up" id="likes" onclick = "likes()";></i><span id="increment">0</span> Likes</a></li>
                    <li><a ><i class="fa-solid fa-comment"></i><span>1</span> Comment</a></li>
                </ul>
            </div>
    
            <div class="share">
                <a href="#"><i class="fa-solid fa-share-nodes"></i><span>0</span> Share</a>
            </div>
        </div>
    
        
        <div class="audince" id="audince">
        
    
            <div class="commments">
                <ul>
                    <li><a href="#"><img src="assests/img/03.jpg" alt=""></a></li>
                    <li><a href="#" class="com-author">Paul Molive</a>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div class="links">
                            <a href="#"> like</a>
                            <a href="#"> Reply</a>
                            <a href="#"> Translate</a>
                            <a href="#" class="time_com"> 5 min</a>
                        </div>
                    </li>
    
                </ul>
            </div>
    
            <div class="comment_box">
                <div class="sec_inner_comment">
                    <div class="input_comment">
                        <input type="text" name="" id="usercomment">
                    </div>
    
                    <div class="icons_comments">
                        <ul>
                        <li><a><i class="fa-solid fa-paper-plane" onclick = "comments()";></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-paperclip"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-face-meh-blank"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-camera"></i></a></li>
                        </ul>
                    </div>
    
                </div>
            </div>
        </div>
    
    </div>`
        var ani = 0.5
        modal.style.transition = ani + "s";
        modal.style.display = "none";



    }
}



