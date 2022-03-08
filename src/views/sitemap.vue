<template>
	<v-content>
		<pre>
{{ sitemap }}
		</pre>
	</v-content>
</template>
<script>
import path from 'path';

export default {
	name: 'sitemap',
	mounted: function() {
		const url = "https://sopia.dev";
		let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
		xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
		if ( localStorage.routes ) {
			const routes = JSON.parse(localStorage.routes);
			routes.forEach((route) => {
				if ( route.name === "Sitemap" ) return;

				xml += `\t<url>\n`;
				xml += `\t\t<loc>`;
				xml += url + route.path;
				xml += `</loc>\n`;
				xml += `\t</url>\n`;

				const children = route.children;
				if ( children ) {
					children.forEach((cr) => {
						const p = path.join(route.path, cr.path);
						xml += `\t<url>\n`;
						xml += `\t\t<loc>`;
						xml += url + p;
						xml += `</loc>\n`;
						xml += `\t</url>\n`;
					});
				}
			});
		}
		xml += `</urlset>`;

		this.sitemap = xml;
	},
	data: function() {
		return {
			'sitemap': 'test'
		}
	}
}
</script>
