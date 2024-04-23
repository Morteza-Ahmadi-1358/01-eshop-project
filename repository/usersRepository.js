import path from 'path'
import fs from 'fs'

export const GET = () => {
    return fs.readFileSync(path.join(process.cwd(), 'files', 'users.json'))
}