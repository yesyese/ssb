import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

export default function GrievanceRedressalPage() {
  const [formState, setFormState] = useState({
    name: '',
    regNo: '',
    department: '',
    email: '',
    phone: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: could be wired to backend or email
    alert('Your grievance has been recorded. The Grievance Redressal Cell will review it shortly.');
    setFormState({
      name: '',
      regNo: '',
      department: '',
      email: '',
      phone: '',
      description: '',
      date: '',
    });
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Grievance Redressal"
            subtitle="Online Grievance Redressal Registration"
            description="Submit your grievances related to academics, administration, or campus life. The committee will address them in a fair and time-bound manner."
          />

          <div className="space-y-section">
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Policy & Process</h2>
              <p className="text-[var(--text-soft)] mb-2">
                Sanskrithi School of Business is committed to providing a transparent and student-friendly environment.
                The Grievance Redressal Cell addresses complaints related to academic matters, infrastructure,
                evaluation, conduct, and other student concerns.
              </p>
              <p className="text-[var(--text-muted)] text-sm">
                Students are encouraged to submit genuine grievances with clear details. All submissions are treated
                confidentially and reviewed by the committee for appropriate action.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Online Grievance Redressal Registration</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                      Student Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                      Registration No<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="regNo"
                      value={formState.regNo}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                      Department<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formState.department}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                      Email Id<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                      Contact No<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                      Date of the Complaint (Optional)
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-soft)] mb-1">
                    Grievance Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--base)] text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

