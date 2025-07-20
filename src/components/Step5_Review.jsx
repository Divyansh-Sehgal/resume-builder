import html2pdf from "html2pdf.js";

function Step5_Review({ formData, prev }) {
  const downloadResume = () => {
    const element = document.getElementById("resume-preview");
    const opt = {
      margin: 0,
      filename: `${formData.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center mb-4">Step 5: Review & Download</h2>

      <div
        id="resume-preview"
        className="bg-white text-black font-sans max-w-3xl mx-auto border shadow-md p-8 leading-relaxed"
      >
        {/* Header */}
        <div className="text-center border-b pb-2 mb-4">
          <h1 className="text-3xl font-bold">{formData.name}</h1>
         <p className="text-sm">
  {formData.phone} | {formData.email} <br />
  <a href={formData.linkedin} className="text-blue-700 underline mr-4" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
  <a href={formData.github} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
</p>

        </div>

        {/* Education */}
        <section className="mb-4">
          <h2 className="font-semibold text-lg border-b mb-1">Education</h2>
          <p><strong>{formData.educationInstitution}</strong> ({formData.educationYear})</p>
          <p>{formData.educationDegree} – CGPA: {formData.educationCgpa}</p>
        </section>

        {/* Projects */}
        <section className="mb-4">
          <h2 className="font-semibold text-lg border-b mb-1">Projects</h2>
          <p className="font-semibold">{formData.project1Title}</p>
          <ul className="list-disc list-inside text-sm mb-2">
            {formData.project1Desc?.split('\n').map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <p className="font-semibold">{formData.project2Title}</p>
          <ul className="list-disc list-inside text-sm">
            {formData.project2Desc?.split('\n').map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="mb-4">
          <h2 className="font-semibold text-lg border-b mb-1">Achievements</h2>
          <ul className="list-disc list-inside text-sm">
            {formData.achievements?.split('\n').map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Technical Skills */}
        <section className="mb-4">
          <h2 className="font-semibold text-lg border-b mb-1">Technical Skills</h2>
          <p><strong>Frontend:</strong> {formData.skillsFrontend}</p>
          <p><strong>Backend:</strong> {formData.skillsBackend}</p>
          <p><strong>Tools:</strong> {formData.skillsTools}</p>
        </section>

        {/* Certifications */}
        <section className="mb-4">
          <h2 className="font-semibold text-lg border-b mb-1">Certifications</h2>
          <ul className="list-disc list-inside text-sm">
            {formData.certifications?.split('\n').map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </section>

        {/* Hobbies */}
        <section className="mb-2">
          <h2 className="font-semibold text-lg border-b mb-1">Hobbies</h2>
          <p>{formData.hobbies}</p>
        </section>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={prev} className="bg-gray-600 text-white px-4 py-2 rounded">Back</button>
        <button onClick={downloadResume} className="bg-green-700 text-white px-4 py-2 rounded">Download PDF</button>
      </div>
    </div>
  );
}

export default Step5_Review;
