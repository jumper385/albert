<script>
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