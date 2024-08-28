import {promises as fs} from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), '/helper/data.json')


export const readData = async () => {

     // utf8 = wuxuu kugu badala data-da lasoo aqrinaayo wax la fahmi karo
    // fs = fileSystem
    const jsonData = await fs.readFile(dataFilePath, 'utf8') 
    return JSON.parse(jsonData)
}

export const writeData = async (data) => {

    const jsonData = JSON.stringify(data, null, 2)
    await fs.writeFile(dataFilePath, jsonData, 'utf8')
}
