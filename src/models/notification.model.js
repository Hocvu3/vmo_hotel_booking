const userTokens = [
  'dt1riU70Tc-QKwlqDQ5eQc:APA91bGZEVAnJ1iIUSZih3_EM3m9w9zCstH3G8OFu0bRbKqiPXB-ihbT16OZOjG8mbSJ5LTmwOQBvNk-U1_d0hto37G1XXwop0uRHamWsh6CPW88YRi39kw',
  'ccIaRYfi62RbvxsEiRegEB:APA91bHCjA9M0LYyYiDhp-IMd9iGNg0bRHQoysS9ajCed4-ZTPD-ntqiNkWdVD0bG-mQFa53qD9cAVBLcntckOFCzN213uP0SRp6xQYdNqkkRP1qRbYJhcU',
];

const saveToken = (token) => {
  if (!userTokens.includes(token)) {
    userTokens.push(token);
  }
};

const getTokens = () => userTokens;

module.exports = { saveToken, getTokens };
