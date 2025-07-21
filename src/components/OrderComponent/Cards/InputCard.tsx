import React from "react";

interface InputCardProps {
  title?: string;
  label: string;
  category?: string;
  type?: React.HTMLInputTypeAttribute;
  isTextArea?: boolean;
  id?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error: string;
  touched: boolean;
}

const InputCard = ({
  title,
  label,
  category,
  type = "text",
  isTextArea = false,
  id,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: InputCardProps) => {
  const displayError: string = touched && error ? error : "";

  const uniqueInputId =
    id || (category ? `input-${category.replace(/\s+/g, "-")}` : undefined);

  const showCategoryText = category && !isTextArea;

  return (
    <div className="mb-4 bg-white w-full px-5 py-5">
      {title && (
        <h3 className="mb-2 text-base font-semibold text-gray-800">{title}</h3>
      )}
      <div
        className={`flex items-center ${
          showCategoryText ? "" : "justify-center"
        }`}
      >
        {showCategoryText && (
          <p className="w-24 text-gray-700 font-medium mr-4">{category}</p>
        )}
        <div className={`flex-grow ${!showCategoryText ? "w-full" : ""}`}>
          {isTextArea ? (
            <textarea
              id={uniqueInputId}
              className={`w-full h-16 rounded-md border  text-gray-800 placeholder-gray-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                displayError ? "border-red-500" : "border-gray-300 "
              }`}
              placeholder={label}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              rows={3}
            />
          ) : (
            <input
              type={type}
              id={uniqueInputId}
              className={`w-full rounded-md border p-3 text-gray-800 placeholder-gray-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                displayError ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={label}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
          {displayError && (
            <p className="mt-1 text-sm text-red-600">{displayError}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputCard;
