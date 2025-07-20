function Step4_Projects({ formData, setFormData, next, prev }) {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Step 4: Projects</h2>
      <input
        placeholder="Project Description"
        className="border p-2 w-full"
        value={formData.projects}
        onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
      />
      <div className="flex justify-between">
        <button onClick={prev} className="bg-gray-500 text-white px-4 py-2">Back</button>
        <button onClick={next} className="bg-blue-500 text-white px-4 py-2">Next</button>
      </div>
    </div>
  );
}
export default Step4_Projects;
