const TOKEN = import.meta.env.VITE_TOKEN;
console.log(TOKEN)

const UrlApi = "https://api.github.com/users/";

const InputSearchUser = document.querySelector("#InputSearchUser");
const BtnValide = document.querySelector("#BtnValide");
const UserResultCase = document.querySelector("#UserResultCase");
const PpUser = document.querySelector("#PpUser");
const loginUser = document.querySelector("#name");
const username = document.querySelector("#usernam");
const joined = document.querySelector("#joined");
const bio = document.querySelector("#bio");
const Repos = document.querySelector("#Repos");
const Followe = document.querySelector("#Followe");
const Following = document.querySelector("#Following");
const Locat = document.querySelector("#Locat")
const link = document.querySelector("#link")
const Twiter = document.querySelector("#Twiter")
const LinkGithub = document.querySelector("#LinkGithub")

BtnValide.addEventListener("click", getUser);

async function getUser() {
	const response = await fetch(UrlApi + InputSearchUser.value, {
		headers: {
			Authorization: `Bearer ${TOKEN}`,
		},
	});

	const data = await response.json();
	console.log(data);
	let UserPpData = data.avatar_url;
	let loginData = data.login;
	let UsernameData = data.name;
	let dateCreationData = data.created_at;
	let BioData = data.bio;
	let ReposData = data.public_repos
	let FolloweData = data.followers
	let FollowingData = data.following
	let LocatData = data.location
	let linkData = data.blog
	let TwiterData = data.twitter_username
	let LinkGithubData = data.html_url

	PpUser.setAttribute("src", UserPpData);
	loginUser.textContent = loginData;
	username.textContent = UsernameData;
	joined.textContent = dateCreationData;
	bio.textContent = BioData;
	Repos.textContent = ReposData;
	Followe.textContent = FolloweData;
	Following.textContent = FollowingData
	Locat.textContent = LocatData
	link.textContent = linkData
	Twiter.textContent = TwiterData
	LinkGithub.textContent = LinkGithubData
}

