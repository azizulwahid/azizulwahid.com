import { copyFileSync, existsSync, mkdirSync } from "node:fs";

const compatibilityRoutes = ["work"];

for (const route of compatibilityRoutes) {
  const source = `out/${route}.html`;
  const targetDir = `out/${route}`;
  const target = `${targetDir}/index.html`;

  if (existsSync(source)) {
    mkdirSync(targetDir, { recursive: true });
    copyFileSync(source, target);
  }
}
