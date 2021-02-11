<script context="module">
	export async function preload(page, session) {
		const fetchProjects = async () => {
			let response = await this.fetch("http://localhost:5000/projects");
			let payload = await response.json();
			return payload.projects;
		};

		let projects = await fetchProjects();
		return { projects };
	}
</script>

<script>
	import { randomEmoji } from "../../helpers/eastereggs";
	export let projects;
</script>

<div style='display:flex; with:100%; justify-content:space-between; align-items:center'>
	<h1 style='margin:0;'>Existing Projects</h1>
	<a href='projects/new' style='display:flex; align-items:center; justify-content:center; background:#2ecc71; border-radius:5pt; color:white;padding:6pt 12pt; text-decoration:none'>+ Project</a>
</div>
<br>
<hr style='border:none; height:2pt; width:100%; background:#bdc3c7;'>
<br>	
{#each projects as project}
	<h2>{randomEmoji()} {project.name}</h2>
	<a href="projects/{project.id}">
		<small style="color:gray">Project#{project.id}</small>
	</a>
	<p>{project.description}</p>
	<small>
		<p>Author: {project.author}</p>
	</small>
	<br />
{/each}
