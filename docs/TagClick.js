var ProfileTagId = document.getElementById("ProfileTag");
var TagList = document.getElementsByClassName("Tag");
var TagTextList = document.getElementsByClassName("Tag_Text");

function MoveAllTag()
{
    var id = document.getElementsByClassName("Catchphrase");
    for(let i = 0;i < TagList.length; ++i)
    {
        TagList[i].classList.add("Isclick");
    }
    
    for(let i = 0;i < TagTextList.length; ++i)
    {
        TagTextList[i].classList.add("Isclick");
    }

    id.item(0).classList.add("IsClick");
}

function IsClickGameTag()
{
    MoveAllTag();
    setTimeout(function()
    {
        var children = document.getElementById("GameTag").children;

        children[0].classList.remove("Tag");
        children[0].classList.remove("IsClick");
        children[0].classList.add("Game_Description");
        children[0].classList.add("SlideIn");
    },3000)
}

function IsClickProfileTag()
{
    MoveAllTag();
    setTimeout(function()
    {
        
    },3000)
}

function IsClickTopTag()
{
    MoveAllTag();
    setTimeout(function()
    {
        
    },3000)
}

function IsClickThisPageTag()
{
    MoveAllTag();
    setTimeout(function()
    {
        
    },3000)
}
