var showNum = 6;

$(function () {
    loadArticle();
    loadClickRank()
})


function loadArticle() {
    $.ajax({
        url : "/blog/article/list",
        type: "post",
        contentType : "application/json;charset=utf8",
        data : JSON.stringify({type : "2"}),
        dataType : "json",
        success :function (data) {
            console.log(data);
            var html = "";
            var content = "";
            var length = data.length < showNum ? data.length : showNum
            for (var i = 0; i < length; i++) {
                content = data[i].content;
                if(content.length > 64){
                    content = content.substring(0, 64) + " ...";
                }
                html += '<div class="blogs">\n' +
                    '\t\t      <figure>\n' +
                    '\t\t\t     <img src="images/'+data[i].titleImage+'">\n' +
                    '\t\t\t   </figure>\n' +
                    '\t\t\t   <ul>\n' +
                    '\t\t\t     <h3><a href="/">'+data[i].title+'</a></h3>\n' +
                    '\t\t\t\t  <p>"'+content+'"</p>\n' +
                    '\t\t\t     <p class="autor">\n' +
                    '\t\t\t\t    <span class="lm f_l">\n' +
                    '\t\t\t\t\t    <a href="/">个人博客</a>\n' +
                    '\t\t\t\t\t </span>\n' +
                    '\t\t\t\t\t <span class="dtime f_l">'+data[i].createDate+'</span>\n' +
                    '\t\t\t\t\t <span class="viewnum f_r">\n' +
                    '\t\t\t\t\t    浏览（<a href="/">666</a>）</span>\n' +
                    '\t\t\t\t\t <span class="pingl f_r">\n' +
                    '\t\t\t\t\t    评论（<a href="/">60</a>）</span>\n' +
                    '\t\t\t\t  </p>\n' +
                    '\t\t\t   </ul>\n' +
                    '\t       </div>';
            }

            $("#blogDiv").append(html);
        }
    })
}

function loadClickRank() {
    $.ajax({
        url : "/blog/article/list",
        type: "post",
        contentType : "application/json;charset=utf8",
        data : JSON.stringify({order : "likes", type :"1,2"}),
        dataType : "json",
        success : function (data) {
            console.log(data)
            var length = data.length < showNum ? data.length : showNum
            var html = "<ul>"
            for (var i = 0; i < length; i++) {
                html += '\t\t\t\t\t<li><a href="/" target="_blank">'+data[i].title+'</a></li>\n';
            }

            html += "</ul>"

            $("#rankDiv").append(html);
        }
    })
}
