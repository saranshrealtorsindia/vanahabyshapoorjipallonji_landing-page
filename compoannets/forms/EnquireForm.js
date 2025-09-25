"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./enquireform.module.css";
import InputElement from "../formelements/InputElement";
import SubmitBtn from "../buttons/SubmitBtn";
import { ModelsContext } from "@/contextApis/ModelContextProvider";
export default function EnquireForm() {
  const { setisThanksOpen, setisModelOpen } = useContext(ModelsContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange", // validate as the user types
    reValidateMode: "onChange",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
    },
  });

  async function onSubmit(formData) {
    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      // try to read JSON error (server returns JSON even on error per route.js)
      const errBody = await res.json().catch(async () => {
        // fallback: read text for debugging
        const text = await res.text();
        console.error("Non-JSON response:", text);
        return { error: "Non-JSON response from server" };
      });
      console.error("Server error:", errBody);
      return;
    }

    const data = await res.json();
    setisModelOpen(false);
    setisThanksOpen(true);
  }

  const selectedDate = watch("eventdate");
  return (
    <div className={styles.form_main_container}>
      <div className={styles.form_header}>
        <div className={styles.form_heading}>SHAPOORJI PALLONJI </div>
        {/* <div className={styles.form_subheading}> EVENT REGISTRATION </div> */}
      </div>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.two_column_inputWrapper}>
            <div>
              <InputElement
                inputLabel="First Name"
                inputPlaceholder="First Name"
                name="firstname"
                register={register}
                rules={{ required: "First name is required" }}
                error={errors.firstname?.message}
              />
            </div>
            <div>
              <InputElement
                inputLabel="Last Name"
                inputPlaceholder="Last Name"
                name="lastname"
                register={register}
                rules={{ required: "Last name is required" }}
                error={errors.lastname?.message}
              />
            </div>
          </div>
          <div className={styles.single_column_inputWrapper}>
            <InputElement
              inputLabel="Email"
              inputPlaceholder="Enter Your E-mail"
              name="email"
              type="email"
              register={register}
              rules={{
                required: "Email is required",
                pattern: {
                  value:
                    /^(?:[a-zA-Z0-9_'^&\-]+(?:\.[a-zA-Z0-9_'^&\-]+)*|"(?:[^"]|\\")+")@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/,
                  message: "Enter a valid email",
                },
              }}
              error={errors.email?.message}
            />
          </div>
          <div className={styles.single_column_inputWrapper}>
            <InputElement
              inputLabel="Phone Number"
              inputPlaceholder="Enter Your Contact Number"
              name="number"
              type="tel"
              register={register}
              rules={{
                required: "Phone number is required",
                minLength: { value: 10, message: "Must be at least 10 digits" },
              }}
              error={errors.number?.message}
            />
          </div>

          <div className={styles.form_btn_wrapper}>
            <SubmitBtn
              btnText={isSubmitting ? "Submitting..." : "Enquire Now"}
              disabledBtn={!isValid || isSubmitting}
              fullWidth={true}
              btncolor="primary_color"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
