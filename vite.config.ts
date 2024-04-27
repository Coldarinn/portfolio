import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default () => {
  return defineConfig({
    plugins: [
      react(),
      svgr({
        include: "**/*.svg",
        svgrOptions: {
          icon: true,
          svgo: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      }),
    ],
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
  });
};
