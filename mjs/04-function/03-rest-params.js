function showStudentInfo(name, ...course) {
    return `${name} study ${course.join(", ")}`;
}
console.log(showStudentInfo("NeoTien", "ES6", "TypeScript", "FE"));
