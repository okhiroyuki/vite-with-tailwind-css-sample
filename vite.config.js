import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
	return {
		base: "./",
		build: {
			outDir: "dist",
			rollupOptions: {
				plugins: [
					mode === "analyze" &&
						visualizer({
							open: true,
							filename: "stats.html",
							gzipSize: true,
							brotliSize: true,
						}),
				],
			},
		},
	};
});
