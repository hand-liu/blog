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
        data : JSON.stringify({type : "3"}),
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
                html += '<div class="mood">\n' +
                    '\t\t\t   <span class="tutime">'+data[i].createDate+'</span>\n' +
                    '\t\t\t   <p>'+data[i].content+'</p>\n' +
                    '\t\t   </div>';
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
