const ShowContacts = () =>
{
    setTimeout(()=>
    {
        CreateContactsDivs();
    },1000);
} 

const CreateContactsDivs = () =>
{
    let contactTag = document.getElementById("ContactTag");
    const ScaleStr = "Scale";

    let contactTitle = document.createElement("div");
    contactTitle.classList.add("Title_Contact");
    contactTitle.classList.add(ScaleStr);
    contactTitle.innerText = "Contact";
    contactTag.appendChild(contactTitle);

    let gitHub = document.createElement("div");
    gitHub.classList.add("GitHub_Icon");
    gitHub.classList.add(ScaleStr);
    
    gitHub.onclick = () =>
    {
        location.href = "https://github.com/kinoshita-tatsuya?tab=repositories";
    }

    contactTag.appendChild(gitHub);

    let twitter = document.createElement("div");
    twitter.classList.add("Twitter_Icon");
    twitter.classList.add(ScaleStr);
    
    twitter.onclick = () =>
    {
        location.href = "https://twitter.com/nonono9989";
    }

    contactTag.appendChild(twitter);
    
    let topPage = document.createElement("div");
    topPage.classList.add("From_Contact_To_Toppage");
    topPage.classList.add(ScaleStr);
    topPage.innerText = "TopPageへ";

    topPage.onclick = () =>
    {
        location.reload();
    }

    contactTag.appendChild(topPage);
}
