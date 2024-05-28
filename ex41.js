function f1(){
    var x = parseFloat(document.getElementById("moyC").value);
    var y = parseFloat(document.getElementById("noteEFM").value);
    var mm = (x + y)/3;
    if(mm >= 16){
        document.querySelector("span").innerText = mm + "  \uD83E\uDD73";
    }else{
        if(mm >= 14 && mm < 16){
            document.querySelector("span").innerText = mm + "  \uD83D\uDE01";
        }else{
            if(mm >= 12 && mm < 14){
                document.querySelector("span").innerText = mm + "  \uD83D\uDE04";
            }else{
                if(mm >= 10 && mm < 12){
                    document.querySelector("span").innerText = mm + "  \uD83D\uDE33";
                }else{
                    if(mm >= 7 && mm < 10){
                        document.querySelector("span").innerText = mm + "  \uD83D\uDE1E";
                    }else{
                        document.querySelector("span").innerText = mm + "  \uD83D\uDE20";
                    }
                }
            }
        }
    }

}