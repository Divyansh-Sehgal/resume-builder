function Step2_Education({ formData, setFormData, next, prev }) {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Step 2: Education</h2>
      <input
        placeholder="College / University"
        className="border p-2 w-full"
        value={formData.education}
        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
      />
      <div className="flex justify-between">
        <button onClick={prev} className="bg-gray-500 text-white px-4 py-2">Back</button>
        <button onClick={next} className="bg-blue-500 text-white px-4 py-2">Next</button>
      </div>
    </div>
  );
}
export default Step2_Education;
