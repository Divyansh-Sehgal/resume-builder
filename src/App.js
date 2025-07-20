import { useState } from "react";
import Step1 from "./components/Step1_PersonalInfo";
import Step2 from "./components/Step2_Education";
import Step3 from "./components/Step3_Skills";
import Step4 from "./components/Step4_Projects";
import Step5 from "./components/Step5_Review";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
  name: "", email: "", phone: "",
  linkedin: "", github: "",

  educationInstitution: "",
  educationYear: "",
  educationDegree: "",
  educationCgpa: "",

  project1Title: "", project1Desc: "",
  project2Title: "", project2Desc: "",

  achievements: "", skillsFrontend: "",
  skillsBackend: "", skillsTools: "",
  certifications: "", hobbies: ""
});



  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 shadow rounded w-full max-w-md">
        {step === 1 && <Step1 formData={formData} setFormData={setFormData} next={next} />}
        {step === 2 && <Step2 formData={formData} setFormData={setFormData} next={next} prev={prev} />}
        {step === 3 && <Step3 formData={formData} setFormData={setFormData} next={next} prev={prev} />}
        {step === 4 && <Step4 formData={formData} setFormData={setFormData} next={next} prev={prev} />}
        {step === 5 && <Step5 formData={formData} prev={prev} />}
      </div>
    </div>
  );
}

export default App;
