const ShowProfile = () =>
{
    setTimeout(()=>
    {
        CreateProfileDivs();  
    },1000);    
}

const CreateProfileDivs = () =>
{
    let profileTag = document.getElementById("ProfileTag");
    const FadeInstr = "FadeIn";

    //プロフィールの説明文字の表示
    let profile = document.createElement("div");
    profile.classList.add("Title_Profile");
    profile.classList.add(FadeInstr);
    profileTag.appendChild(profile);

    //自分の名前の表示
    let name = document.createElement("div");
    name.innerText　= "Name"
    name.classList.add("MyName");
    name.classList.add(FadeInstr);
    profileTag.appendChild(name);

    //誕生日の表示
    let birth = document.createElement("div");
    birth.innerText　= "Birth"
    birth.classList.add("Birth");
    birth.classList.add(FadeInstr);
    profileTag.appendChild(birth);

    //趣味の表示
    let hobby = document.createElement("div");
    hobby.innerText　= "Hobby"
    hobby.classList.add("Hobby");
    hobby.classList.add(FadeInstr);
    profileTag.appendChild(hobby);

    //トップページに戻れるdivの追加
    let JumpTopPage = document.createElement("div");
    JumpTopPage.innerText　= "TopPageへ"
    JumpTopPage.classList.add("JumpTopPage");
    JumpTopPage.classList.add(FadeInstr);
    JumpTopPage.onclick = () =>
    {
        location.reload();
    }

    profileTag.appendChild(JumpTopPage);
}
