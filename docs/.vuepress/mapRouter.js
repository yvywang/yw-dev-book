const { resolve } = require('path')
const { readdirSync, readFileSync, access, statSync } = require('fs')

const excludeDir = ['.vuepress']
const excludeFile = ['README.md']
const dirArr = readdirSync(resolve(__dirname, '../'))       // 所有父级目录下的目录及文件

const config = dirArr.reduce((ret, name) => {
    const stat = statSync(resolve(__dirname, `../${name}`)) // 取目录及文件的信息
    if (!stat || !stat.isDirectory() || excludeDir.includes(name)) return ret  // 是目录或其他条件则 return
    const children = readdirSync(resolve(__dirname, `../${name}`)).filter(file => !excludeFile.includes(file)).map(file => `/${name}/` + file.replace(/\.md/ig, ''))
    const readMePath = resolve(__dirname, `../${name}/README.md`)
    const route = {
        title: readFileSync(readMePath, 'utf-8').match(/title:(.*)\./)[1],
        path: `/${name}/`,
        children
    }
    return [...ret, route]
}, [])

module.exports = config