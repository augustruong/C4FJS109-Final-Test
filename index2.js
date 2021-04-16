function merge2String(s1,s2) {
    let result = "";
    let l;
    
    if (s1.length <= s2.length) {l = s2.length;}
    else {l = s1.length;}

    for (let i = 0; i < l; ++i) { 
        if (s1[i] == undefined) {result += s2[i];} 
        else if (s2[i] == undefined) {result += s1[i];}
        else {
            result += s1[i] + s2[i];
        }
    }

    console.log(result);

    //alert(result);
}

let s1 = prompt("Nhap string 1");
let s2 = prompt("Nhap string 2");
merge2String(s1, s2);