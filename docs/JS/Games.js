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
    let GameTitleDiv = document.createElement("div");
    GameTitleDiv.classList.add("Title_Game");
    GameTitleDiv.classList.add(SlideInClassName);
    gameTag.appendChild(GameTitleDiv);
    
    //スターライトラインの説明画像クラスの追加
    let SLLDiv = document.createElement("div");
    SLLDiv.classList.add("SLL_Img");
    SLLDiv.classList.add(SlideInClassName);
    SLLDiv.onclick = () =>
    {
        location.href = "https://github.com/human-osaka-game-2018/StarLight_Line";
    }
    gameTag.appendChild(SLLDiv);

    //スターライトラインの説明テキスト文クラスの追加
    let SLLDescText = document.createElement("div");
    SLLDescText.innerText = "制作期間:  3ヶ月(2018/10~2019/1)\nプラットフォーム:  PC\nジャンル:  星わたりアクションアドベンチャー\n\n流れてくる星を限られたラインの中で避けたり拾ったりして\n高スコアを目指せ！";
    SLLDescText.classList.add("SLL_Text");
    SLLDescText.classList.add(SlideInClassName);
    gameTag.appendChild(SLLDescText);

    //リーサルブラストの説明画像クラスの追加
    let LBDiv = document.createElement("div");
    LBDiv.classList.add("LB_Img");
    LBDiv.classList.add(SlideInClassName);
    LBDiv.onclick = () =>
    {
        location.href = "https://github.com/human-osaka-game-2018/LethalBlast";
    }
    gameTag.appendChild(LBDiv);


    let LBText = document.createElement("div");
    LBText.innerText = "制作期間: 1ヶ月半(2018/7~2018/9)\nプラットフォーム: PC\nジャンル: ワードパズルゲーム\n\nいろんな単語を組み合わせ自分だけの必殺技を作成し、\n敵を倒せ！";
    LBText.classList.add("LB_Text");
    LBText.classList.add(SlideInClassName);
    gameTag.appendChild(LBText);

    
    let TopPage = document.createElement("div");
    TopPage.classList.add("From_Games_To_TopPage");
    TopPage.classList.add(SlideInClassName);
    TopPage.innerText = "TopPageへ";

    TopPage.onclick = () =>
    {
        location.reload();
        scrollTo(0,0);
    }
    gameTag.appendChild(TopPage);
}
