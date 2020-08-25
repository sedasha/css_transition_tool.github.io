let ourDiv = document.querySelector(".our_div");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let scale = document.querySelector("#scale");
let skew = document.querySelector("#skew");
let rotate = document.querySelector("#rotate");
let but = document.querySelector("button");
let text = document.querySelector("textarea");
let color = document.querySelectorAll(".color");
let inp = document.querySelectorAll(".inp");


// -----------tarberak 1---------//
// document.body.addEventListener("mouseup", event =>{
// if(event.target == color1 || event.target == color2){
//     ourDiv.style = `
//     background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
//     `
// }
// })
// ---------tarberak2--------/
    // color1.addEventListener("mouseleave", ()=>{
    //     ourDiv.style = `
    //     background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
    //     `
    // });
    // color2.addEventListener("mouseleave", ()=>{
    //     ourDiv.style = `
    //     background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
    //     `
    // });
    // --------tarberak3------------//
// color.forEach(elem =>{
//     elem.addEventListener("input",()=>{
//         ourDiv.style = `
//         background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
//         transform: scale(${scale.value});
//         transform: skew(${skew.value}deg);
//         transform: rotate(${rotate.value}deg);
//         `
//     })
// })
inp.forEach(elem =>{
    elem.addEventListener("input", () =>{
        ourDiv.style = `
        background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
        transform: scale(${scale.value});
        transform: skew(${skew.value}deg);
        transform: rotate(${rotate.value}deg);
        `;
        })
    })
//----tarberak2-----//
// scale.addEventListener("mouseleave", ()=>{
   
//     ourDiv.style = `
//     background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
//     transform: scale(${scale.value});
//     transform: skew(${skew.value}deg);
//     transform: rotate(${rotate.value}deg);
//     `
// });
// skew.addEventListener("mouseleave", ()=>{
//     ourDiv.style = `
//     background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
//     transform: skew(${skew.value}deg);
//     transform: rotate(${rotate.value}deg);
//     transform: scale(${scale.value});
//     `
// });
// rotate.addEventListener("mouseleave", ()=>{
//     ourDiv.style = `
//     background-image: linear-gradient(to right, ${color1.value},  ${color2.value});
//     transform: rotate(${rotate.value}deg);
//     transform: skew(${skew.value}deg);
//     transform: scale(${scale.value});
//     `
// });
but.addEventListener("click", ()=>{
    if (scale.value != "" && skew.value != "" && rotate.value != ""){
        text.innerHTML = `
background-image: {linear-gradient(to right, ${color1.value},  ${color2.value})};
transform: scale(${scale.value})};
transform: {skew(${skew.value}deg)};
transform: {rotate(${rotate.value}deg)};
        `
    }
    if (scale.value == "" && skew.value != "" && rotate.value != "" ){
        text.innerHTML = `
background-image: {linear-gradient(to right, ${color1.value},  ${color2.value})};
transform: {skew(${skew.value}deg)};
transform: {rotate(${rotate.value}deg)};
        `
    };
    if (skew.value == "" && scale.value != "" && rotate.value != "" ){
        text.innerHTML = `
background-image: {linear-gradient(to right, ${color1.value},  ${color2.value})};
transform: {scale(${scale.value}deg)};
transform: {rotate(${rotate.value}deg};`
    };
    if (rotate.value == "" && scale.value != "" && skew.value != "" ){
        text.innerHTML = `
background-image: {linear-gradient(to right, ${color1.value}, ${color2.value})};                          
transform: {scale(${scale.value}deg)};
transform: {skew(${skew.value}deg)};
        `
    };

})
