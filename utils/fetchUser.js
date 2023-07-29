const fetchUser = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  // destructure
  const person = data.results[0];
  const { phone, email } = person;
  const {
    dob: { age },
  } = person;
  const { password } = person.login;
  const { first, last } = person.name;
  const { large: image } = person.picture;
  const {
    street: { number, name },
  } = person.location;

  return {
    phone,
    email,
    age,
    password,
    image,
    name: `${first} ${last}`,
    street: `${number} ${name}`,
  };
};

export default fetchUser;
