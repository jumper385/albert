<script context='module'>

    export async function preload(page, params, query) {
        const { slug } = page.params
        let res = await this.fetch(`http://localhost:5000/projects/projectid/${slug}`)
        let project = await res.json();
        console.log(project);
        return { project } 
    }

</script>

<script>
    export let project
    let bom = []
</script>

<h1>{project.name} <span style='color:gray; font-size:9pt'>Project#{project.id}</span></h1>

<p>{project.description}</p>

<h2>Bill of Materials</h2>
<div style='display:grid; grid-template-columns:2fr 5fr 1fr 1fr 1fr; font-size:9pt; grid-column-gap: 8pt;'>
    <p style='font-weight:bold'>Component ID</p>
    <p style='font-weight:bold'>Name/Description</p>
    <p style='font-weight:bold'>Value</p>
    <p style='font-weight:bold'>Package</p>
    <p style='font-weight:bold'>Required</p>
    {#each bom as component}
    <p>{component.id}</p>
    <p>{component.name}</p>
    <p>{component.value} {component.unit}</p>
    <p>{component.package}</p>
    <p>{component.count}</p>
    {/each}
</div>