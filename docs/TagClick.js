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
    let TagList = document.getElementsByClassName("Tag");
    let TagTextList = document.getElementsByClassName("Tag_Text");

    for(let i = TagList.length - 1;i >= 0; --i) TagList[i].remove(TagList[i]);

    for(let i = TagTextList.length - 1;i >= 0; --i) TagTextList[i].remove(TagTextList[i]);
}

const IsClickGameTag = () =>
{
    MoveAllTag();
    setTimeout( () =>
    {
        DestroyByTags();
        ExplainGames();   
    },1000)
}

const IsClickProfileTag = () =>
{
    MoveAllTag();
    setTimeout( () =>
    {
        
    },3000)
}

const IsClickTopTag = () =>
{
    MoveAllTag();
    setTimeout( () =>
    {
        
    },3000)
}

const IsClickThisPageTag= () =>
{
    MoveAllTag();
    setTimeout( () =>
    {
        
    },3000)
}

const ExplainGames = () =>
{
    let gameTag = document.getElementById("GameTag");
    const SlideInClassName = "SlideIn";

    //ゲームの説明のタグを表示する
    let Game_DescDiv = document.createElement("div");
    Game_DescDiv.classList.add("Game_Description");
    Game_DescDiv.classList.add(SlideInClassName);
    gameTag.appendChild(Game_DescDiv);
    
    //スターライトラインの説明画像クラスの追加
    let SLLDiv = document.createElement("div");
    SLLDiv.classList.add("StarlightLine_Description");
    SLLDiv.classList.add(SlideInClassName);
    gameTag.appendChild(SLLDiv);

    //スターライトラインの説明テキスト文クラスの追加
    let SLLDescText = document.createElement("div");
    SLLDescText.innerText = "制作期間:  3ヶ月(2018/10~2019/1)\nプラットフォーム:  PC\nジャンル:  星わたりアクションアドベンチャー\n\n流れてくる星を限られたラインの中で避けたり拾ったりして\n高スコアを目指せ！";
    SLLDescText.classList.add("SLLText");
    SLLDescText.classList.add(SlideInClassName);
    gameTag.appendChild(SLLDescText);
} 
