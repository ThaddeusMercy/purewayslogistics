"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, X } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Image from 'next/image';

const ApplicationForm: React.FC = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    drivingLicence: '',
    experience: '',
    selfEmployed: '',
    workEligibility: '',
    startDate: '',
    additionalInfo: '',
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setFileName(file.name);

      if (file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else if (file.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(file));
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileName('');
    setPreviewUrl('');
    if (previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create form data object to handle file upload
      const submitData = new FormData();
      
      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        // Convert boolean to string for FormData
        const formValue = typeof value === 'boolean' ? String(value) : value;
        submitData.append(key, formValue);
      });
      
      // Add CV file if selected
      if (selectedFile) {
        submitData.append('cv', selectedFile);
      }

      // Send the form data with the file
      const response = await fetch('/api/send-form', {
        method: 'POST',
        body: submitData, // Using FormData to include the file
        // Don't set Content-Type header - browser will set it with boundary for multipart/form-data
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Your application has been submitted successfully! We will contact you soon.'
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          drivingLicence: '',
          experience: '',
          selfEmployed: '',
          workEligibility: '',
          startDate: '',
          additionalInfo: '',
          termsAccepted: false
        });
        setSelectedFile(null);
        setFileName('');
        setPreviewUrl('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit application. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto lg:py-10 py-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-[#FF6B00] hover:text-[#e05e00] transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>

          <SectionTitle
            title="Join Our Team"
            subtitle="Self-Employed Delivery Driver Application Form"
            centered
          />
          
          <p className="text-center text-secondary-700 mb-8">
            Interested in working with Pureways Logistics as a self-employed delivery driver? Fill out the form below and we'll be in touch!
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Do you hold a full, valid UK/EU driving licence? <span className="text-red-500">*</span>
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input 
                  type="radio" 
                  name="drivingLicence" 
                  value="yes" 
                  required 
                  checked={formData.drivingLicence === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2" 
                />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="drivingLicence" 
                    value="no" 
                    required 
                    checked={formData.drivingLicence === 'no'}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Do you have previous delivery driving experience? <span className="text-red-500">*</span>
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input 
                  type="radio" 
                  name="experience" 
                  value="yes" 
                  required 
                  checked={formData.experience === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2" 
                />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="experience" 
                    value="no" 
                    required 
                    checked={formData.experience === 'no'}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Are you currently self-employed? <span className="text-red-500">*</span>
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input 
                  type="radio" 
                  name="selfEmployed" 
                  value="yes" 
                  required 
                  checked={formData.selfEmployed === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2" 
                />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="selfEmployed" 
                    value="no" 
                    required 
                    checked={formData.selfEmployed === 'no'}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Are you eligible to work in the UK? <span className="text-red-500">*</span>
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input 
                  type="radio" 
                  name="workEligibility" 
                  value="yes" 
                  required 
                  checked={formData.workEligibility === 'yes'}
                  onChange={handleInputChange}
                  className="mr-2" 
                />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input 
                    type="radio" 
                    name="workEligibility" 
                    value="no" 
                    required 
                    checked={formData.workEligibility === 'no'}
                    onChange={handleInputChange}
                    className="mr-2" 
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-secondary-700 mb-1">
                Available start date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-secondary-700 mb-1">
                Upload CV (PDF or Image) <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {previewUrl ? (
                    <div className="relative">
                      {selectedFile?.type === 'application/pdf' ? (
                        <iframe
                          src={previewUrl}
                          className="w-full h-96 border rounded-md"
                          title="PDF Preview"
                        />
                      ) : (
                        <Image
                          src={previewUrl}
                          alt="Preview"
                          className="max-h-96 w-auto mx-auto rounded-md"
                        />
                      )}
                      <button
                        type="button"
                        onClick={removeFile}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="cv-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#FF6B00] hover:text-[#e05e00] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#FF6B00]"
                        >
                          <span>Upload a file</span>
                          <input
                            id="cv-upload"
                            name="cv"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                    </>
                  )}
                  {fileName && !previewUrl && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected file: {fileName}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-secondary-700 mb-1">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
              />
            </div>

            <div className="flex items-start mb-4">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  name="termsAccepted"
                  type="checkbox"
                  required
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className="w-4 h-4 border border-gray-300 rounded appearance-none checked:bg-[#FF6B00] checked:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00] relative"
                  style={{ backgroundImage: formData.termsAccepted ? "url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%270 0 16 16%27 fill=%27white%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z%27/%3E%3C/svg%3E')" : "", backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsAccepted" className="font-medium text-secondary-700">
                  I have read the <a href="/terms" target="_blank" className="text-[#FF6B00] hover:underline">terms and conditions</a> and agree to it. <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitStatus.message}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#FF6B00] px-8 py-3 rounded-lg text-white font-bold transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e05e00]'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </motion.div>
  );
};

export default ApplicationForm;