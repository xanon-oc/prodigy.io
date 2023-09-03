import React, { useState } from "react";

export default function FormElementsInputRoundedBaseLeadingIcon() {
  const [state, setState] = useState({
    "id-11": "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <>
      {/*    <!-- Component: Rounded input with leading icon--> */}
      <div className="relative my-6">
        <input
          id="id-11"
          type="text"
          name="id-11"
          placeholder="your name"
          value={state["id-11"]}
          className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-11"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Text field
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-labelledby="title-3 description-3"
          role="graphics-symbol"
        >
          <title id="title-3">Check mark icon</title>
          <desc id="description-3">icon description here</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
          <span>Text field with helper text</span>
          <span className="text-slate-500">1/10</span>
        </small>
      </div>
      {/*    <!-- End Rounded input with leading icon--> */}
    </>
  );
}
