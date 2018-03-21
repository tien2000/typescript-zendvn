function showStudentInfo(name : string, ...course : string[]) : string {
    return `${name} study ${course.join(", ")}`;
}

console.log(showStudentInfo("NeoTien", "ES6", "TypeScript", "FE"));