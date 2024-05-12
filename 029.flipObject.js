const people = {
  bob: "JS Developer",
  alice: "AI Engineer",
  jon: "JS Developer",
  nick: "UX Designer",
};

function flipObject(people) {
  const result = {};

  Object.entries(people).forEach(([name, job]) => {
    if(!result.hasOwnProperty(job)) {
      result[job] = [name];
      return; 
    }
    result[job].push(name);
  });

  return result;
}

export { flipObject };
