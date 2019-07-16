const MoveAllTag = () =>
{
    let TagList = document.getElementsByClassName("Tag");
    let TagTextList = document.getElementsByClassName("Tag_Text");
    let catchphrase = document.getElementsByClassName("Catchphrase");
    
    for(let i = 0;i < TagList.length; ++i)　TagList[i].classList.add("isclick");
    
    for(let i = 0;i < TagTextList.length; ++i)　TagTextList[i].classList.add("isclick");

    catchphrase.item(0).classList.add("isClick");
}

const DestroyByTags = () =>
{
    setTimeout( () =>
    {
        let TagList = document.getElementsByClassName("Tag");
        let TagTextList = document.getElementsByClassName("Tag_Text");

        for(let i = TagList.length - 1;i >= 0; --i) TagList[i].remove(TagList[i]);

        for(let i = TagTextList.length - 1;i >= 0; --i) TagTextList[i].remove(TagTextList[i]);   

    },1000)   
}

const MoveAndDestory = () =>
{
    MoveAllTag();
    DestroyByTags();
}

const Reload = () =>
{
    location.reload();
}
