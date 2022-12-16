/** @format */

async function getUser(user) {
  try {
    let res = await fetch(`https://api.github.com/users/${user}`);

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getUser;
