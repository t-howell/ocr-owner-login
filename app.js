//map object/key codes for "owner"
let map = {111: false, 119: false, 110: false, 101: false, 114: false};

window.addEventListener("keypress", keys);

function keys(e) {
    if(e.keyCode in map) {
        map[e.keyCode] = true;
        if(map[111] && map[119] && map[110] && map[101] && map[114]) {
            // if relevant keys are pressed, redirect to Streamline login
            window.location.assign("https://admin.streamlinevrs.com/auth_login.html")
        }
    }
}


// window.addEventListener("keypress", showKeys);

// function showKeys(e) {
//     console.log(e.keyCode);
// }