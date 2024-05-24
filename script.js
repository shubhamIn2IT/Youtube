
const toggle = (id, body,toggleIcon) => {
    const body1 = document.getElementById(body);
    const icon = document.getElementById(toggleIcon);
    document.getElementById(id).getAttribute('value') == 'of' ? showBody(id,body1,icon)  : hideBody(id,body1,icon)
}


const showBody = (id,body,icon)=>{
    icon.style.transform= 'rotate(90deg)'
    body.style.height='auto'
    document.getElementById(id).setAttribute('value','on')
}

const hideBody = (id,body,icon)=>{
    icon.style.transform= 'rotate(0deg)'
    body.style.height='0'
    document.getElementById(id).setAttribute('value','of')
}




