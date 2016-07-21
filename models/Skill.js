function Skill(name, ability) {
    this.name = name;
    this.ability = ability;
}

Skill.populate = function(data) {
    var skills = [];
    for (var abilityName of Object.keys(data)) {
        for (var skillName of data[abilityName]) {
            skills.push(new Skill(skillName, abilityName));
        }
    }
    skills.sort((a, b) => stringCompare(a.name, b.name));
    return skills;
};

function stringCompare(str1, str2) {
    return str1 > str2 ? 1 : str1 < str2 ? -1 : 0
}

module.exports = Skill;