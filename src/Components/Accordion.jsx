import React, { useState } from "react";

export const Accordion = ({ children }) => {
  return <div className="space-y-2">{children}</div>;
};

export const AccordionItem = ({ title, children, value }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <button
        className="w-full text-left p-4 font-medium bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && (
        <div className="p-4 bg-white dark:bg-gray-800 border-t">
          {children}
        </div>
      )}
    </div>
  );
};
