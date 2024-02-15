import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "area-incrivel";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5aYzU4NFJBQUFDSUEySlZy.77-9Fu-_ve-_vUbvv73vv71sfX0A77-9VO-_vXvvv71D77-9Vu-_vRjvv71SG--_vQtWUXrvv73vv71C",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "empreendimento",
      path: "/",
    },
  ],
});
