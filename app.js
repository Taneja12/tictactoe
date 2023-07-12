// console.log('Hello')
function func(id){
    var j =Number(localStorage.getItem('y'))
    setvar(id,Number(j))
    //console.log(id)
    if(j%2===0){
        //console.log('even')
        var x = document.getElementById(id)
        x.innerHTML = "X"
        j= j+1
        localStorage.setItem("y",j)
        document.getElementById(id).disabled = true;
    }
    else{
        //console.log('odd')
        var x = document.getElementById(id)
        x.innerHTML = "0"
        j = j +1
        localStorage.setItem("y",j)
        document.getElementById(id).disabled = true;
    }
    test_result()
}

function setvar(p,q){
    if(q%2==1){
        if(p=='1'){
            localStorage.setItem("a","1")
        }
        if(p=='2'){
            localStorage.setItem("b","1")
        }
        if(p=='3'){
            localStorage.setItem("c","1")
        }
        if(p=='4'){
            localStorage.setItem("d","1")
        }
        if(p=='5'){
            localStorage.setItem("e","1")
        }
        if(p=='6'){
            localStorage.setItem("f","1")
        }
        if(p=='7'){
            localStorage.setItem("g","1")
        }
        if(p=='8'){
            localStorage.setItem("h","1")
        }
        if(p=='9'){
            localStorage.setItem("i","1")
        }
    }
    if(Number(q)%2==0){
        if(p=='1'){
            localStorage.setItem("a","2")
        }
        if(p=='2'){
            localStorage.setItem("b","2")
        }
        if(p=='3'){
            localStorage.setItem("c","2")
        }
        if(p=='4'){
            localStorage.setItem("d","2")
        }
        if(p=='5'){
            localStorage.setItem("e","2")
        }
        if(p=='6'){
            localStorage.setItem("f","2")
        }
        if(p=='7'){
            localStorage.setItem("g","2")
        }
        if(p=='8'){
            localStorage.setItem("h","2")
        }
        if(p=='9'){
            localStorage.setItem("i","2")
        }
    }
}

function test_result(){
    a1 = localStorage.getItem("a")
    a2 = localStorage.getItem("b")
    a3 = localStorage.getItem("c")
    a4 = localStorage.getItem("d")
    a5 = localStorage.getItem("e")
    a6 = localStorage.getItem("f")
    a7 = localStorage.getItem("g")
    a8 = localStorage.getItem("h")
    a9 = localStorage.getItem("i")

    arr1 = [a1,a2,a3]
    arr2 = [a4,a5,a6]
    arr3 = [a7,a8,a9]
    //console.log(arr1)
    // console.log(arr2)
    // console.log(arr3)
    show_result(arr1,arr2,arr3)
}

function show_result(arr1,arr2,arr3){
    var myresult=false
    if(arr1[0]==arr1[1] && arr1[1]==arr1[2] && arr1[1]!='0'){
        who_wins(a1)
        myresult=true
    }
    if(arr2[0]==arr2[1] && arr2[1]==arr2[2] && arr2[1]!='0'){
        who_wins(a4)
        myresult=true
    }
    if(arr3[0]==arr3[1] && arr3[1]==arr3[2] && arr3[1]!='0'){
        who_wins(a7)
        myresult=true
    }
    if(arr1[0]==arr2[0] && arr2[0]==arr3[0] && arr1[0]!='0'){
        who_wins(a1)
        myresult=true
    }
    if(arr1[1]==arr2[1] && arr2[1]==arr3[1] && arr1[1]!='0'){
        who_wins(a2)
        myresult=true
    }
    if(arr1[2]==arr2[2] && arr2[2]==arr3[2] && arr1[2]!='0'){
        who_wins(a3)
        myresult=true
    }
    if(arr1[0]==arr2[1] && arr2[1]==arr3[2] && arr1[0]!='0'){
        who_wins(a1)
        myresult=true
    }
    if(arr1[2]==arr2[1] && arr2[1]==arr3[0] && arr1[2]!='0'){
        who_wins(a3)
        myresult=true
    }
    if(myresult==false && localStorage.getItem('y')=='10'){
        document.getElementById('result').innerHTML ="<h1>" + "Match TIED" + "</h1>"
        document.getElementById('result').className = "alert alert-primary"
    }
    
}

function who_wins(t){
    if(t=='1'){
        document.getElementById('result').innerHTML = "<h1>" + "Zero WINS" + "</h1>"
        document.getElementById('result').className = "alert alert-primary"
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }
    if(t=='2'){
        document.getElementById('result').innerHTML = "<h1>" + "Cross WINS" + "</h1>"
        document.getElementById('result').className = "alert alert-primary"
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
    }
}

function func1()
{
    location.reload()
}