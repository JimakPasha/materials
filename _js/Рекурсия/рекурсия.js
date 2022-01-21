const skills = [
  { skillId: 10, parentSkillId: null, text: 'blalala' },
  { skillId: 20, parentSkillId: null, text: 'blalala2' },
  { skillId: 11, parentSkillId: 10, text: 'blalala3' },
  { skillId: 12, parentSkillId: 10, text: 'blalalasdf' },
  { skillId: 13, parentSkillId: 10, text: 'blaladgdla' },
  { skillId: 21, parentSkillId: 20, text: 'blalaldgha' },
  { skillId: 22, parentSkillId: 20, text: 'blala4e5tg5la' },
  { skillId: 23, parentSkillId: 20, text: 'blalalhr5a' },
  { skillId: 111, parentSkillId: 11, text: 'blalalasdasda' },
  { skillId: 112, parentSkillId: 11, text: 'blalalasdasda' },
  { skillId: 1111, parentSkillId: 111, text: 'blalalasdasda' },
  { skillId: 1112, parentSkillId: 111, text: 'blalalasdasda' },
  { skillId: 1113, parentSkillId: 111, text: 'blalalasdasda' },
];

function recurs2(data, prevSkillId, allData) {
  const parentSkill = data.filter((el) => el.parentSkillId === prevSkillId);
  const childrens = parentSkill.map((item) => {
    function addChildren() {
      const childArr = allData.filter(
        (el) => el.parentSkillId === item.skillId
      );
      if (childArr.length !== 0) {
        return recurs2(childArr, item.skillId, allData);
      }
      return null;
    }
    const obj = {
      name: item.text,
      skillId: item.skillId,
      parentSkillId: item.parentSkillId,
      children: addChildren(),
    };
    return obj;
  });
  return childrens;
}

console.log(recurs2(skills, null, skills));
