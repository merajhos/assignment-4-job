//-write


const jobsData = [
{id:1, company:"TechNova", position:"Frontend Developer", location:"Dhaka", type:"Full-Time", salary:"৳60k-90k", description:"Build scalable UI.", status:null},

{id:2, company:"DataCraft", position:"Backend Engineer", location:"Chattogram", type:"Remote", salary:"৳70k-1L", description:"Build APIs.", status:null},

{id:3, company:"InnoSoft", position:"UI Designer", location:"Khulna", type:"Contract", salary:"৳50k-80k", description:"Design UX.", status:null},

{id:4, company:"CloudNet", position:"DevOps Engineer", location:"Remote", type:"Full-Time", salary:"৳90k-1.2L", description:"CI/CD manage.", status:null},

{id:5, company:"NextGen", position:"QA Engineer", location:"Rajshahi", type:"Full-Time", salary:"৳40k-70k", description:"Testing apps.", status:null},

{id:6, company:"ByteWorks", position:"Mobile Developer", location:"Sylhet", type:"Part-Time", salary:"৳50k-85k", description:"Flutter apps.", status:null},

{id:7, company:"SecureTech", position:"Security Analyst", location:"Dhaka", type:"Full-Time", salary:"৳80k-1.1L", description:"Security monitor.", status:null},

{id:8, company:"AI Labs", position:"ML Engineer", location:"Remote", type:"Full-Time", salary:"৳1L-1.5L", description:"AI models.", status:null}
];


let currentTab = "all";
const container = document.getElementById("jobContainer");


function getStatusBadge(status){
if(status === "interview"){
return `<span class="px-3 py-2 font-semibold rounded-lg bg-[#F8FAFC] text-green-700">INTERVIEW</span>`;
}

if(status === "rejected"){
return `<span class="px-3 py-2  font-semibold rounded-lg bg-[#F8FAFC] text-red-700">REJECTED</span>`;
}

return `<span class="px-3 py-2  font-semibold rounded-lg bg-[#F8FAFC] text-gray-600">NOT APPLIED</span>`;
}

function renderJobs(){
container.innerHTML="";

const filtered = jobsData.filter(job =>
currentTab === "all" ? true : job.status === currentTab
);

document.getElementById("tabCount").textContent = filtered.length + " jobs";

if(filtered.length === 0){
container.innerHTML=`
<div class="text-center py-20">

<i class="fa-regular fa-file text-6xl text-gray-300 mb-4"></i>
<h3 class="text-xl font-semibold">No jobs available</h3>
<p class="text-gray-400">Check back soon</p>
</div>`;
updateDashboard();
return;
}

filtered.forEach(job=>{
const card=document.createElement("div");
card.className="card bg-[#ffffff] shadow   hover:shadow-md ";

card.innerHTML=`
<div class="card-body relative">

<button class="delete-btn absolute right-4 top-4 text-gray-400 hover:text-red-500" data-id="${job.id}">
<i class="fa-solid fa-trash"></i>
</button>

<h3 class="text-lg font-bold">${job.company}</h3>
<p class="font-semibold text-gray-700">${job.position}</p>

<p class="text-sm text-gray-500">${job.location} • ${job.type}</p>
<p class="text-sm font-medium">${job.salary}</p>

<div class="mt-2">
${getStatusBadge(job.status)}
</div>

<p class="text-sm mt-3 text-gray-600">${job.description}</p>

<div class="flex flex-wrap gap-3 mt-4">

<button class="btn btn-sm btn-outline btn-success action-btn" data-id="${job.id}" data-status="interview">
Interview
</button>

<button class="btn btn-sm btn-outline btn-error action-btn" data-id="${job.id}" data-status="rejected">
Rejected
</button>

</div>
</div>
`;

container.appendChild(card);
});

updateDashboard();
}


function updateDashboard(){
document.getElementById("totalCount").innerText=jobsData.length;

document.getElementById("interviewCount").innerText=
jobsData.filter(j=>j.status==="interview").length;

document.getElementById("rejectedCount").innerText=
jobsData.filter(j=>j.status==="rejected").length;
}

container.addEventListener("click",function(e){

const deleteBtn=e.target.closest(".delete-btn");
if(deleteBtn){
const id=Number(deleteBtn.dataset.id);
const index=jobsData.findIndex(j=>j.id===id);
jobsData.splice(index,1);
renderJobs();
return;
}


const actionBtn=e.target.closest(".action-btn");
if(actionBtn){
const id=Number(actionBtn.dataset.id);
const status=actionBtn.dataset.status;
const job=jobsData.find(j=>j.id===id);
job.status = job.status === status ? null : status;
renderJobs();
}
});


document.querySelectorAll(".tab-btn").forEach(tab=>{
tab.addEventListener("click",function(){

document.querySelectorAll(".tab-btn").forEach(btn=>{
btn.classList.remove("bg-blue-600","text-white");
btn.classList.add("btn-outline");
});

this.classList.remove("btn-outline");
this.classList.add("bg-blue-600","text-white");

currentTab=this.dataset.tab;
renderJobs();
});
});

renderJobs();

