import init from "./startup/init";


init().catch(e => {
  console.log(e);
  process.exit(1);
});