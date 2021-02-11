<script context='module'>

    let projectToComponent = [
        {project:"1",component:"1k5R_res_0805", required:3},
        {project:"1",component:"10UF_CAP_KEMETA", required:10},
        {project:"2",component:"10UF_CAP_KEMETA", required:10},
        {project:"3",component:"10UF_CAP_KEMETA", required:10},
        {project:"1",component:"BTS443P_IC_TO252", required:5},
        {project:"2",component:"1uf_cap_0805", required:2},
        {project:"3",component:"bc817_tran_sot23", required:8},
        {project:"1",component:"16PF_CAP_0805", required:2},
        {project:"3",component:"16PF_CAP_0805", required:2},
        {project:"3",component:"2K2R_RES_0805", required:5},
    ]

    export async function preload({params, query}) {

        let projects = projectToComponent.reduce((acc,curr) => {
            if (curr.component.toLowerCase() == params.slug.toLowerCase()) {
                return [...acc, curr.project]
            } else {
                return acc
            }
        }, [])

        return {projects: projects, component:params.slug.toLowerCase()}
    }
</script>

<script>
    export let component, projects
</script>

<h1>{component}</h1>
<h2>Related Projects</h2>
{#each projects as project}
<a href='projects/{project}'><p>Project#{project}</p></a>
{/each}