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

    let profile = document.createElement("div");
    profile.classList.add("TitleProfile");
    profile.classList.add(FadeInstr);
    profileTag.appendChild(profile);

    let name = document.createElement("div");
    name.innerText　= "Name"
    name.classList.add("MyName");
    name.classList.add(FadeInstr);
    profileTag.appendChild(name);

    let birth = document.createElement("div");
    birth.innerText　= "Birth"
    birth.classList.add("Birth");
    birth.classList.add(FadeInstr);
    profileTag.appendChild(birth);

    let hobby = document.createElement("div");
    hobby.innerText　= "Hobby"
    hobby.classList.add("Hobby");
    hobby.classList.add(FadeInstr);
    profileTag.appendChild(hobby);

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
