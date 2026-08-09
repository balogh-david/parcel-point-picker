import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // Set the GraphQL API URL from the env file here when running codegen.
  schema: "",
  config: {
    enumsAsTypes: true,
    useTypeImports: true,
  },
  generates: {
    "src/features/parcel-locker/graphql/generated/types.generated.ts": {
      plugins: ["typescript"],
    },
    "src/features/parcel-locker/graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "generated/types.generated.ts",
        folder: "generated",
      },
      documents: "src/features/parcel-locker/graphql/**/*.graphql",
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },
};

export default config;
