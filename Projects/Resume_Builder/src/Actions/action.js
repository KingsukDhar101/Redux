function contactAction(contact) {
  return {
    type: "contact",
    payload: contact,
  };
}
function experienceAction(experience) {
  return {
    type: "experience",
    payload: experience,
  };
}

function educationAction(education) {
  return {
    type: "education",
    payload: education,
  };
}

function summaryAction(summary) {
  return {
    type: "summary",
    payload: summary,
  };
}
function skillAction(skill) {
  return {
    type: "skill",
    payload: skill,
  };
}

export {
  contactAction,
  experienceAction,
  educationAction,
  summaryAction,
  skillAction,
};
