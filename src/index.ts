import { createServer } from "node:http";

function main() {
  try {
    const server = createServer();
    const PORT: number = 8080;

    server.listen(PORT, () => {
      console.log(`Http server is runnig on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(`error starting http server`);
    throw error;
  }
}

main();
