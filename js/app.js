/**
 * Created by troybarnard on 2/25/16.
 */
var color = "grey";
function changeBg() {
    if (color == "grey") {
        document.body.style.backgroundColor = "white";
        color = "white";
    } else {
        document.body.style.backgroundColor = "#959595";
        color = "grey";
    }
}