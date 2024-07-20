/**
 * @author maneeshavenigalla
 * You are given some lists of regions where the first region of each list includes all other regions in that list.
 * Naturally, if a region x contains another region y then x is bigger than y. Also, by definition, a region x contains itself.
 * Given two regions: region1 and region2, return the smallest region that contains both of them.
 * If you are given regions r1, r2, and r3 such that r1 includes r3, it is guaranteed there is no r2 such that r2 includes r3.
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
const findSmallestRegion = (regions, region1, region2) => {
  let regionObj = {};

  for (const region of regions) {
    const [parent, ...children] = region;

    for (const child of children) {
      regionObj[child] = parent;
    }
  }

  const stack1 = [];
  while (region1) {
    stack1.push(region1);
    region1 = regionObj[region1];
  }

  const stack2 = [];
  while (region2) {
    stack2.push(region2);
    region2 = regionObj[region2];
  }

  let result = "";

  while(stack1.length && stack2.length) {
    let reg1 = stack1.pop();
    let reg2 = stack2.pop();

    if(reg1 === reg2) {
        result = reg1;
    }
  }

  return result;
};

module.exports = findSmallestRegion;
