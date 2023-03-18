import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

const Tutor_TextArea = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  console.log(content);
  return (
    <>
      <div className="mt-10">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow hover:shadow-lg">
          <h1 className="text-xl font-bold capitalize dark: text-center mb-1">
            Add Course Here!
          </h1>
          <h2 className="text-xl capitalize dark: text-center mb-5">
            Enter Details of Sub Section
          </h2>
          <hr />
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label htmlFor="passwordConfirmation">Text Area</label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  onChange={(newContent) => setContent(newContent)}
                />
                {/* <textarea
                  id="textarea"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 border rounded-md   focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  defaultValue={""}
                /> */}
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Tutor_TextArea;
