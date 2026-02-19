// Main entry to our chat backend application
import app from "./app";
import config from "./config/config";
import { checkDbConnection } from "./config/db";

const PORT = config.port;

// Main function to start the server and check database connectivity
async function main() {
  try {
    const dbTime = await checkDbConnection();
    console.log(dbTime)
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}/`);
    });

    // TODO: Setup graceful shutdown

  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1); // fail fast so your platform restarts it
  }
}

// Start the application
main();