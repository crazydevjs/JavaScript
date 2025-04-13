const coding = ["js", "cpp", "rb", "swift", "java"];

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach((item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const mycoding = [
    {
        language: "JavaScript",
        languageFileNme: "js"
    },
    {
        language: "Python",
        languageFileNme: "py"
    },
    {
        language: "Ruby",
        languageFileNme: "rb"
    },

]
mycoding.forEach((item) => {
    console.log(item.language);
})