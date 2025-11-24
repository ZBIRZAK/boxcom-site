"use server";

import axios from "axios";

export const SendContactAction = async (initialState, formData) => {
  const url =
    process.env.BACKEND_HOST +
    process.env.FORM_SUBMISSION_URL.replace(":id", process.env.CONTACT_FORM_ID);

  const honeypot = formData.get("name");

  if (honeypot !== "") {
    // ça veut dire qu'un bot a rempli le champ => stop
    return;
  }

  formData.append("_wpcf7_unit_tag", process.env.CONTACT_FORM_KEY);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // <-- important
      },
    });

    // console.log(response);

    return {
      success: true,
      result_message: initialState.data.message_success,
    };
  } catch (error) {
    console.log(error);
    // console.log(error.response);
    // console.log(error.response.data);

    return {
      success: false,
      result_message: initialState.data.error_message,
    };
  }
};
