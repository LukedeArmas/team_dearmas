import init from "./startup/init";


init().catch(e => {
  console.log(`Error: ${e}`);
  process.exit(1);
});