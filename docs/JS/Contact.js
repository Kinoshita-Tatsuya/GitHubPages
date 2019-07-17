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

    let contactTitle = document.createElement("div");
    contactTitle.classList.add("Title_Contact");
    contactTitle.innerText = "Contact";
    contactTag.appendChild(contactTitle);

    let gitHub = document.createElement("div");
    gitHub.classList.add("GitHub_Icon");
    gitHub.onclick = () =>
    {
        location.href = "https://github.com/kinoshita-tatsuya?tab=repositories";
    }
    contactTag.appendChild(gitHub);

    let twitter = document.createElement("div");
    twitter.classList.add("Twitter_Icon");
    twitter.onclick = () =>
    {
        location.href = "https://twitter.com/nonono9989";
    }
    contactTag.appendChild(twitter);
    
    let topPage = document.createElement("div");
    topPage.classList.add("From_Contact_To_Toppage");
    topPage.innerText = "TopPageへ";
    topPage.onclick = () =>
    {
        location.reload();
    }
    contactTag.appendChild(topPage);
}
