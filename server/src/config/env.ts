import dotenv from "dotenv"
dotenv.config()

interface Environment {
    PORT: string
}

function parseEnv(env: NodeJS.ProcessEnv): Environment {
    if(!env.PORT) throw new Error("Port not specified.")
    return env as unknown as Environment
}


export default parseEnv(process.env)