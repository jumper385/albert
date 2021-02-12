<script context='module'>
export async function preload(path, params, query) {
    const res = await this.fetch('http://localhost:5000/components');
    const components = await res.json();
    return {components}
}
</script>

<script>
    export let components;
</script>

<h1>Component Selection</h1>
<div style='display:grid; grid-template-columns:2fr 5fr 1fr 1fr 1fr; font-size:9pt; grid-column-gap: 8pt;'>
    <p style='font-weight:bold'>Component ID</p>
    <p style='font-weight:bold'>Name/Description</p>
    <p style='font-weight:bold'>Value</p>
    <p style='font-weight:bold'>Package</p>
    <p style='font-weight:bold'>Inventory</p>
    {#each components as component}
    <a href='components/{component.id}'><p>{component.id}</p></a>
    <p>{component.name}</p>
    <p>{component.value} {component.unit}</p>
    <p>{component.package}</p>
    <p>{component.count}</p>
    {/each}
</div>