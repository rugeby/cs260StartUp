function alertDiv(){
    //创建div
    let alertBelowDiv = document.createElement("div");//创建最下面的div
    let alertContentDiv = document.createElement("div");//创建呈现内容的白色div
    let alertTextDiv = document.createElement("div");//创建文字div
    let alertSubmitDiv = document.createElement("div");//创建确定div
    let alertCancelDiv = document.createElement("div");//创建取消div

    //获取body
    let body = document.body;
    //添加div
    body.appendChild(alertBelowDiv);
    alertBelowDiv.appendChild(alertContentDiv);
    alertContentDiv.appendChild(alertTextDiv);
    alertContentDiv.appendChild(alertCancelDiv);
    alertContentDiv.appendChild(alertSubmitDiv);

    alertBelowDiv.className="alertBelowDiv";
    alertContentDiv.className="alertContentDiv";
    alertTextDiv.className="alertTextDiv";
    alertCancelDiv.className="alertCancelDiv";
    alertSubmitDiv.className="alertSubmitDiv";

    alertTextDiv.innerHTML="确定当前操作？";
    alertCancelDiv.innerHTML="取消";
    alertSubmitDiv.innerHTML="确定";

    //添加点击函数
    alertCancelDiv.onclick=function (){
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    }

    alertSubmitDiv.onclick=function (){
        //业务代码执行部分
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    }

}
