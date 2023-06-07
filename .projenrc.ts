import { CustomTypescriptProject } from "@chetzof/projen-base";
const project = new CustomTypescriptProject({
  defaultReleaseBranch: "main",
  devDeps: ["file:../projen-base/"],
  name: "chetzof-eslint-config",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();