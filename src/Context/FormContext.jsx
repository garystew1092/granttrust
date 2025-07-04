import { createContext, useContext, useState } from "react";

// Create context with default values
const FormContext = createContext({
    formData: {},
    updateFormData: () => {},
    resetForm: () => {}
});

// Custom provider component
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    // Function to update specific fields
    const updateFormData = (fieldUpdates) => {
        setFormData(prev => ({
            ...prev,
            ...fieldUpdates
        }));
    };

    // Function to reset form data 
    const resetForm = () => {
        setFormData({});
    };

    // Value that will be provided to consumers
    const value = {
        formData,
        updateFormData,
        resetForm
    };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

// Custom hook for easy access to context
export const useFormContext = () => {
    return useContext(FormContext);
};