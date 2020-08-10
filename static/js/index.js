var element = document.getElementsByClassName("Tab");
element[0].classList.add("active")
var new_list = []
for(let i=0; i < element.length; i++){
    new_list.push(element[i])
}

let i
for(i=0; i < element.length; i++){
    console.log(element[i]); 
    let current = element[i]
    console.log(current.classList)
    current.addEventListener("click", () => {
        console.log(current.classList)
        current.classList.add("active");
        console.log(current.classList)
        var current_element = new_list.splice(new_list.indexOf(current), 1)
        for(let e = 0; e < new_list.length; e++){
            non_active = new_list[e]
            non_active.classList.remove("active")
        }
        new_list.push(current)

        active_classes = document.getElementsByClassName("active");
    console.log(active_classes)
    if (active_classes[0] == element[0]){
        document.getElementById("weather").style.display = "block"
        document.getElementById("temperature").style.display = "none"
        document.getElementById("wind").style.display = "none"
    }
    if (active_classes[0] == element[1]){
        document.getElementById("temperature").style.display = "block"
        document.getElementById("wind").style.display = "none"
        document.getElementById("weather").style.display = "none"
    }
    if (active_classes[0] == element[2]){
        document.getElementById("wind").style.display = "block"
        document.getElementById("temperature").style.display = "none"
        document.getElementById("weather").style.display = "none"
    }
    })
}

active_classes = document.getElementsByClassName("active");
console.log(active_classes)
if (active_classes[0] == element[0]){
    document.getElementById("weather").style.display = "block"
}
