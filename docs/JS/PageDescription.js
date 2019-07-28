const ShowPageDescription = () =>
{
    setTimeout(() =>
    {
        CreatePageDescriptionDivs();
    },1000);
}

const CreatePageDescriptionDivs = () =>
{
    let thisPageTag = document.getElementById("ThisPageTag");

    let title = document.createElement("h2");
    title.innerText = "頑張ったところ";
    thisPageTag.appendChild(title);

    let textList = 
    [
        "スクロールをできるページとできないページを分けたところ",
        "ページごとにJSファイルを作成し、そのページで何をやっているのかをわかりやすくしたところ",
        "そのページごとのアニメーションを作成し、動きをつけたところ",
        "ゲーム説明の画像を押すとgitHubのリポジトリに行けるようにしたところ",
        "いかにおしゃれにできるかを考えて位置調整や色の調整をしたところ"
    ];

    textList.forEach((item) =>
    {
        let elm = document.createElement("li");
        elm.innerText = item;
        thisPageTag.appendChild(elm);
    });

    let topPage = document.createElement("div");
    topPage.classList.add("From_ThisPage_To_TopPage");
    topPage.classList.add("SlideFadeIn");
    topPage.innerText = "TopPageへ";

    topPage.onclick = () =>
    {
        location.reload();
    }

    thisPageTag.appendChild(topPage);
}
