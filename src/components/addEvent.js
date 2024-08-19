import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { gsap } from "gsap";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    image: null,
    EventName: "",
    description: "",
    roll_no: "",
    name: "",
    department: "",
    venue: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    formLink: "",
    whatsappLink: "", 
  });

  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const inputRefs = useRef([]);
  const input1Refs = useRef([]);
  const buttonRefs = useRef(null);
  const button1Refs = useRef(null);

  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      image: acceptedFiles[0],
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  useEffect(() => {
    if (formData.image) {
      const newImagePreview = URL.createObjectURL(formData.image);
      setImagePreview(newImagePreview);
      return () => URL.revokeObjectURL(newImagePreview);
    }
  }, [formData.image]);
  

  useEffect(() => {
    gsap.from(inputRefs.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from(input1Refs.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from(buttonRefs.current, {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from(button1Refs.current, {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const departments = [
    "Computer Engineering",
    "Information Technology",
    "Electrical and Communication Engineering",
    "Electrical and Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Food Technology",
    "Artificial Intelligence and Data Science",
    "Artificial Intelligence and Machine Learning",
  ];

  return (
    <div className="bg-add-event w-full h-full flex justify-center items-center">
      <div className="md:w-1/2 bg-custom-black w-full h-auto flex flex-col p-10 md:px-20 rounded-xl my-20">
        <h1 className="text-color font-bold text-3xl mb-10">Add Event</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div
            {...getRootProps({
              className:
                "dropzone border-dashed border-2 border-gray-400 p-4 text-center cursor-pointer",
            })}
          >
            <input {...getInputProps()} />
            <p className="text-white">
              {formData.image
                ? formData.image.name
                : "Drag & drop event image here, or click to select one"}
            </p>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Event Preview"
                className="mt-4 w-full h-auto object-cover"
              />
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Event Name"
              name="EventName"
              value={formData.EventName}
              onChange={handleChange}
              className="form-input"
              ref={(el) => inputRefs.current.push(el)}
            />
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Event Description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="form-input"
              ref={(el) => input1Refs.current.push(el)}
            />
          </div>

          <div className="flex space-x-10">
            <input
              type="text"
              placeholder="Roll Number"
              name="roll_no"
              value={formData.roll_no}
              onChange={handleChange}
              className="form-input"
              ref={(el) => inputRefs.current.push(el)}
            />
            <input
              type="text"
              placeholder="Student Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              ref={(el) => input1Refs.current.push(el)}
            />
          </div>

          <div>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="form-input"
              ref={(el) => inputRefs.current.push(el)}
            >
              <option value="" disabled>Select a department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={formData.venue}
              onChange={handleChange}
              className="form-input"
              ref={(el) => input1Refs.current.push(el)}
            />
          </div>

          <div className="flex space-x-4">
            <div>
              <label className="block text-white mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-input"
                ref={(el) => inputRefs.current.push(el)}
              />
            </div>

            <div>
              <label className="block text-white mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="form-input"
                ref={(el) => input1Refs.current.push(el)}
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div>
              <label className="block text-white mb-2">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="form-input"
                ref={(el) => inputRefs.current.push(el)}
              />
            </div>

            <div>
              <label className="block text-white mb-2">End Time</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="form-input"
                ref={(el) => input1Refs.current.push(el)}
              />
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Google Form Link"
              name="formLink"
              value={formData.formLink}
              onChange={handleChange}
              className="form-input"
              ref={(el) => inputRefs.current.push(el)}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="WhatsApp Group Link"
              name="whatsappLink"
              value={formData.whatsappLink}
              onChange={handleChange}
              className="form-input"
              ref={(el) => input1Refs.current.push(el)}
            />
          </div>

          <div className="flex justify-center space-x-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn"
              ref={buttonRefs}
            >
              Cancel
            </button>
            <button
            ref={button1Refs}
              type="submit"
              className=" text-white bg-green-600 h-12 w-32 rounded-md font-bold hover:bg-green-700 hover:scale-105"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;