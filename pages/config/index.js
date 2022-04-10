const dev = process.env.NODE_ENV !== "PRODUCTION"

export  const server = dev ? "http://localhost:3000" : "https://yourwebsite.com"