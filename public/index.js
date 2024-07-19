

document.addEventListener('DOMContentLoaded',async (e)=>{
    

    const customForm = document.getElementById("custom-form");
    customForm.addEventListener('submit',async(e)=>{

        e.preventDefault();
        const file = await fetch("./file.json",{method : "GET"});
        const ams = await file.json();
        const vista = document.getElementById('vista');
        vista.setAttribute("customTracks",JSON.stringify(ams))  


    })
})

  
// const div = document.getElementsByTagName("protvista-uniprot");
// div[0].setAttribute("customTracks","helooo");