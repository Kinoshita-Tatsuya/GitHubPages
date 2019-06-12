const targetTag = document.getElementsByClassName("Tag");
const targetText = document.getElementsByClassName("Tag_text");    

function IsClickTag()
{
    for(let i = 0; i < targetTag.length; ++i)
    {
        targetTag[i].classList.add("IsClick");
        
    }

    for(let i = 0; i < targetText.length; ++i)
    {
        targetText[i].classList.add("IsClick");
    }
}

function 

for(let i=0 ; i<targetTag.length ; i++)
{
    targetTag[i].addEventListener("click", processEvent, false);
}