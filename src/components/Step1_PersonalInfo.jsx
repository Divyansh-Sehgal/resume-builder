function Step1_PersonalInfo({ formData, setFormData, next }) {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Step 1: Personal Info</h2>

      <input
        placeholder="Full Name"
        className="border p-2 w-full"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        className="border p-2 w-full"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        className="border p-2 w-full"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        placeholder="LinkedIn URL"
        className="border p-2 w-full"
        value={formData.linkedin}
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      />
      <input
        placeholder="GitHub URL"
        className="border p-2 w-full"
        value={formData.github}
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
      />

      <button onClick={next} className="bg-blue-500 text-white px-4 py-2">Next</button>
    </div>
  );
}
export default Step1_PersonalInfo;
