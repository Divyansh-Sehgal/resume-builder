function Step3_Skills({ formData, setFormData, next, prev }) {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Step 3: Skills</h2>
      <input
        placeholder="Skills (comma-separated)"
        className="border p-2 w-full"
        value={formData.skills}
        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
      />
      <div className="flex justify-between">
        <button onClick={prev} className="bg-gray-500 text-white px-4 py-2">Back</button>
        <button onClick={next} className="bg-blue-500 text-white px-4 py-2">Next</button>
      </div>
    </div>
  );
}
export default Step3_Skills;
