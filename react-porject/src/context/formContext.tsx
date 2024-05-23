import {
  PropsWithChildren,
  createContext,
  useState,
  FC,
  useContext,
} from "react";

interface FormData {
  name: string;
  lastname: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  adrass: string;
  twitter: string;
  discord: string;
  likdin: string;
  instagram: string;
  youTube: string;
}

const formDataInit: FormData = {
  name: "",
  lastname: "",
  age: "",
  gender: "",
  phone: "",
  email: "",
  adrass: "",
  twitter: "",
  discord: "",
  likdin: "",
  instagram: "",
  youTube: "",
};

export const FormContext = createContext<{
  formData: FormData;
  handleChange: (name: any) => void;
  handleSelectedGender: (gender: string) => void;
  canGoStepTwo: () => boolean;
}>({
  formData: formDataInit,
  handleChange: () => {},
  handleSelectedGender: () => {},
  canGoStepTwo: () => false,
});

export const useFormProviderContext = () => useContext(FormContext);

const FormPorvider: FC<PropsWithChildren> = ({ children }) => {
  const [formData, setFormData] = useState(formDataInit);

  const handleChange = (e: {
    target: { type: any; name: string; value: any };
  }) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(e);
  };
  const canGoStepTwo = () => {
    console.log("test");
    if (formData.name && formData.lastname && formData.gender) return true;
    return false;
  };

  const handleSelectedGender = (gender: string) => {
    setFormData((prev) => ({
      ...prev,
      gender: gender,
    }));
  };
  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        handleSelectedGender,
        canGoStepTwo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormPorvider;
