"use client";

import { useActionState } from "react";
import { SendContactAction } from "./FormAction";
import { isDev } from "../../lib/helpers";
import InputText from "../../components/Forms/InputText";
import InputEmail from "../../components/Forms/InputEmail";
import Textarea from "../../components/Forms/Textarea";
import RequiredMention from "../../components/Forms/RequiredMention";

const testDevData = {
  myname: "Abdellah Alaoui",
  email: "a.alaoui.test@gmaaaaaayl.com",
  subject: "voici mon sujet",
  message: "Voici mon message",
  name: "",
};

const ContactForm = ({ data }) => {
  const initialState = isDev()
    ? {
        ...testDevData,
        data,
      }
    : { data };

  const [state, formAction, pending] = useActionState(
    SendContactAction,
    initialState
  );

  return (
    <form
      action={formAction}
      className="bg-white text-black space-y-3 p-5 rounded-2xl"
    >
      <InputText
        name="myname"
        label={data.name.label}
        placeholder={data.name.placeholder}
        required={data.name.required}
        defaultValue={state.myname || ""}
      />

      {/* Honeypot - laissez-le ici pour protéger contre les spams */}
      <InputText
        name="name"
        label="Your name"
        // required
        placeholder="Your name here"
        defaultValue={state.name || ""}
        className="absolute top-[-999px]"
      />

      <InputEmail
        name="email"
        label={data.email.label}
        placeholder={data.email.placeholder}
        required={data.email.required}
        defaultValue={state.email || ""}
      />

      <InputText
        name="subject"
        label={data.subject.label}
        placeholder={data.subject.placeholder}
        required={data.subject.required}
        defaultValue={state.subject || ""}
      />

      <Textarea
        name="message"
        label={data.message.label}
        placeholder={data.message.placeholder}
        required={data.message.required}
        defaultValue={state.message || ""}
        rows={5}
      />

      <div className="mt-5 flex gap-10">
        <button
          disabled={pending}
          className="cursor-pointer disabled:cursor-default disabled:opacity-50 hover:bg-blue-900 bg-blue-700 text-white rounded-lg p-3"
          type="submit"
        >
          {pending
            ? data.submit_button.sending_message
            : data.submit_button.caption}
        </button>
        {state.success && state.result_message && (
          <div className="bg-green-200 p-3 rounded-lg">
            {state.result_message}
          </div>
        )}
        {!state.success && state.result_message && (
          <div className="bg-red-200 p-3 rounded-lg text-red-800">
            {state.result_message}
          </div>
        )}
      </div>

      <div className="mt-3">
        <RequiredMention>{data.required_mention}</RequiredMention>
      </div>
    </form>
  );
};

export default ContactForm;
