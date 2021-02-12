<script>
    let formdata = {}
    let files;
    const submitForm = async () => {

        let formData = new FormData();
        formData.append('payload',JSON.stringify(formdata));
        formData.append('bom', files[0]);

        let response = await fetch('/projects/new', {
            method:"POST",
            body:formData
        })

        let bom = await response.json();

        let formResponse = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            body: JSON.stringify({
                bom: bom,
                project: {
                    ...formdata
                }
            }),
            headers: {
                'content-type':'application/json'
            }
        })

        console.log(await formResponse.json())
    }
</script>

<h1>Upload a new Project</h1>
<form on:submit|preventDefault={submitForm}>

    <label for='name'>Project Name</label>
    <input name='name' type='text' bind:value={formdata.name} />

    <br>

    <label for='description'>Description</label>
    <input name='description' type='text' bind:value={formdata.description}/>

    <br>

    <label for='author'>Project Author</label>
    <input name='author' type='text' bind:value={formdata.author}/>

    <br>

    <label for='bom'>Upload BoM CSV</label>
    <input name='bom' type='file' bind:files />

    <br>

    <input type='submit' />
</form>