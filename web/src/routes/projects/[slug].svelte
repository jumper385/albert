<script context='module'>

    let projects = [
        {id: "1",name: "PDM Board",description: "low voltage power distribution board for the car",},
        {id: "2",name: "Segment PCB",description: "segment PCB for the accumilator.",},
        { id: "3", name: "PCB Combination", description: "Mervin's PCB!!!" },
    ];

    let projectToComponent = [
        {project:"1",component:"1k5R_res_0805", required:3},
        {project:"1",component:"10UF_CAP_KEMETA", required:10},
        {project:"1",component:"BTS443P_IC_TO252", required:5},
        {project:"2",component:"1uf_cap_0805", required:2},
        {project:"3",component:"bc817_tran_sot23", required:8},
        {project:"3",component:"16PF_CAP_0805", required:2},
        {project:"3",component:"2K2R_RES_0805", required:5},
    ]

    let components = [
        // 10UF_CAP_0805
        {id:"1UF_CAP_0805", type:'capacitor', name:'1uF Cap 0805', value:1, unit:'uF', package:'0805', count:100},
        {id:"0.1UF_CAP_0805", type:'capacitor', name:'0.1uF Cap 0805', value:0.1, unit:'uF', package:'0805', count:100},
        {id:"4.7UF_CAP_0805", type:'capacitor', name:'4.7uF Cap 0805', value:4.7, unit:'uF', package:'0805', count:100},
        {id:"16PF_CAP_0805", type:'capacitor', name:'16pF Cap 0805', value:16, unit:'pF', package:'0805', count:100},
        {id:"20UF_CAP_KEMETA", type:'capacitor', name:'20uF Cap KEMET A', value:20, unit:'uF', package:'KEMET A', count:100},
        {id:"10UF_CAP_KEMETA", type:'capacitor', name:'10uF Cap KEMET A', value:10, unit:'uF', package:'KEMET A', count:100},

        // 1K5R_RES_0805
        {id:"1K5R_RES_0805", type:'resistor', name:'1K5R Resistor 0805', value:1500, unit:'R', package:'0805', count:100},
        {id:"330R_RES_0805", type:'resistor', name:'330R Resistor 0805', value:330, unit:'R', package:'0805', count:100},
        {id:"10KR_RES_0805", type:'resistor', name:'10KR Resistor 0805', value:10000, unit:'R', package:'0805', count:100},
        {id:"2K2R_RES_0805", type:'resistor', name:'2K2R Resistor 0805', value:2200, unit:'R', package:'0805', count:100},
        {id:"860R_RES_0805", type:'resistor', name:'860 Resistor 0805', value:860, unit:'R', package:'0805', count:100},

        // MODEL_TRAN_SOT23
        {id:"BTS443P_IC_TO252", type:'integrated circuit', name:'BTS-443-P Smart Highside PROFET', value:'BTS443', unit:'model', package:'TO-252', count:100},
        {id:"BC817_TRAN_SOT23", type:'integrated circuit', name:'BC817K 45 V 500 mA NPN general-purpose transistor', value:'BC817KH', unit:'model', package:'SOT-23', count:100},
    ]

    export async function preload({params, query}) {
        let project = projects.filter(e => e.id == params.slug)

        let bom = projectToComponent.reduce((acc,curr) => {
            if (curr.project == params.slug) {
                let component = components.filter(e => e.id.toLowerCase() == curr.component.toLowerCase())[0]
                let entry = {
                    ...component,
                    count:curr.required,
                }
                return [...acc, entry]
            } else {
                return acc
            }
        }, [])

        return {project: project[0], bom: bom}
    }

</script>

<script>
    export let project, bom
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