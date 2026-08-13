"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const GRADE_OPTIONS = [
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Junior High",
  "Senior High",
];

type FormData = {
  parentName: string;
  studentName: string;
  gradeLevel: string;
  contactNumber: string;
};

const EMPTY_FORM: FormData = {
  parentName: "",
  studentName: "",
  gradeLevel: "",
  contactNumber: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass = (invalid: boolean) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-base text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-maroon/40 ${
    invalid ? "border-red-400" : "border-maroon/15 focus:border-maroon"
  }`;

export default function Enrollment() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [invalidFields, setInvalidFields] = useState<Set<keyof FormData>>(new Set());
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    setInvalidFields((prev) => {
      if (!prev.has(field)) return prev;
      const next = new Set(prev);
      next.delete(field);
      return next;
    });
  };

  const resetForm = () => {
    setFormData(EMPTY_FORM);
    setInvalidFields(new Set());
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const empty = (Object.keys(formData) as (keyof FormData)[]).filter(
      (field) => formData[field].trim() === ""
    );
    if (empty.length > 0) {
      setInvalidFields(new Set(empty));
      return;
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.warn(
        "NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not configured — enrollment form cannot submit."
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // The Apps Script endpoint doesn't send CORS headers, so the response
      // is opaque under no-cors — response.ok/.json() aren't readable. A
      // fetch that completes without throwing is the only success signal
      // available here.
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
    } catch (err) {
      console.error("Enrollment form submission failed:", err);
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

  return (
    <section id="enrollment" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-4 justify-center">
              <span className="h-px w-6 bg-gold" aria-hidden="true" />
              Enrollment
            </span>
            <h2 className="section-heading">Enroll at St. Michael&apos;s High School</h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Fill out the form below and we will get in touch with you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-lg sm:mt-14">
            {status === "success" ? (
              <div className="rounded-2xl border border-maroon/10 bg-white p-8 text-center shadow-sm sm:p-10">
                <CheckCircle2
                  className="mx-auto mb-5 text-maroon"
                  size={52}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  Thank you for your interest!
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  We have received your inquiry. The school will get in touch with you soon.
                </p>
                <button type="button" onClick={resetForm} className="btn-secondary mt-8">
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-maroon/10 bg-white p-6 shadow-sm sm:p-8"
              >
                <div>
                  <label htmlFor="parentName" className="mb-1.5 block text-sm font-medium text-ink">
                    Parent / Guardian Name
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={updateField("parentName")}
                    className={inputClass(invalidFields.has("parentName"))}
                    aria-invalid={invalidFields.has("parentName")}
                  />
                  {invalidFields.has("parentName") && (
                    <p className="mt-1.5 text-xs text-red-600">This field is required.</p>
                  )}
                </div>

                <div>
                  <label htmlFor="studentName" className="mb-1.5 block text-sm font-medium text-ink">
                    Student Name
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={updateField("studentName")}
                    className={inputClass(invalidFields.has("studentName"))}
                    aria-invalid={invalidFields.has("studentName")}
                  />
                  {invalidFields.has("studentName") && (
                    <p className="mt-1.5 text-xs text-red-600">This field is required.</p>
                  )}
                </div>

                <div>
                  <label htmlFor="gradeLevel" className="mb-1.5 block text-sm font-medium text-ink">
                    Grade Level Applying For
                  </label>
                  <select
                    id="gradeLevel"
                    required
                    value={formData.gradeLevel}
                    onChange={updateField("gradeLevel")}
                    className={inputClass(invalidFields.has("gradeLevel"))}
                    aria-invalid={invalidFields.has("gradeLevel")}
                  >
                    <option value="" disabled>
                      Select a grade level
                    </option>
                    {GRADE_OPTIONS.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                  {invalidFields.has("gradeLevel") && (
                    <p className="mt-1.5 text-xs text-red-600">This field is required.</p>
                  )}
                </div>

                <div>
                  <label htmlFor="contactNumber" className="mb-1.5 block text-sm font-medium text-ink">
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={updateField("contactNumber")}
                    className={inputClass(invalidFields.has("contactNumber"))}
                    aria-invalid={invalidFields.has("contactNumber")}
                  />
                  {invalidFields.has("contactNumber") && (
                    <p className="mt-1.5 text-xs text-red-600">This field is required.</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-600" role="alert">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
