const ShowGames = () =>
{
    setTimeout(()=>
    {
        CreateGamesDivs();
    },1000);
} 

const CreateGamesDivs = () =>
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
    SLLDiv.onclick = () =>
    {
        location.href = "https://github.com/human-osaka-game-2018/StarLight_Line";
    }
    gameTag.appendChild(SLLDiv);

    //スターライトラインの説明テキスト文クラスの追加
    let SLLDescText = document.createElement("div");
    SLLDescText.innerText = "制作期間:  3ヶ月(2018/10~2019/1)\nプラットフォーム:  PC\nジャンル:  星わたりアクションアドベンチャー\n\n流れてくる星を限られたラインの中で避けたり拾ったりして\n高スコアを目指せ！";
    SLLDescText.classList.add("SLLText");
    SLLDescText.classList.add(SlideInClassName);
    gameTag.appendChild(SLLDescText);
}
