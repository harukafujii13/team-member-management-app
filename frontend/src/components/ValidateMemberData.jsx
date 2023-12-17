const ValidateMemberData = (memberData) => {
  const errors = {};

  const validateField = (name, value) => {
    switch (name) {
      case "first_name":
      case "last_name":
        if (!value.trim()) {
          return "Name is required";
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        break;
      case "phone_num":
        if (!/^\d{10}$/.test(value)) {
          return "Phone number is invalid";
        }
        break;
      default:
        return "";
    }
  };

  for (const key in memberData) {
    const error = validateField(key, memberData[key]);
    if (error) {
      errors[key] = error;
    }
  }

  return errors;
};

export default ValidateMemberData;
