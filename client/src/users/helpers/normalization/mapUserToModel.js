const mapUserToModel = (user) => {
  return {
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.lat,
    phone: user.phone,
    email: user.email,
    password: user.password,
    imageUrl: user.imag.url,
    imageAlt: user.imag.alt,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: user.address.houseNumber,
    zip: user.address.zip,
  };
};

export default mapUserToModel;
